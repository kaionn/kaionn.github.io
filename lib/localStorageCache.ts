/**
 * localStorage を使った簡易 TTL キャッシュ。
 * 静的エクスポートで ISR が使えないため、クライアント側で短時間キャッシュする。
 * SSR / プリレンダー時は window が無いため、常に miss として振る舞う。
 */

interface CacheEntry<T> {
  readonly value: T;
  readonly fetchedAt: number;
}

function isCacheEntry(value: unknown): value is CacheEntry<unknown> {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const record = value as Record<string, unknown>;
  return typeof record.fetchedAt === "number" && "value" in record;
}

function readCache<T>(key: string, ttlMs: number): T | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(key);
  if (raw === null) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isCacheEntry(parsed)) {
      return null;
    }
    const isExpired = Date.now() - parsed.fetchedAt > ttlMs;
    if (isExpired) {
      return null;
    }
    return parsed.value as T;
  } catch {
    return null;
  }
}

function writeCache<T>(key: string, value: T): void {
  if (typeof window === "undefined") {
    return;
  }

  const entry: CacheEntry<T> = { value, fetchedAt: Date.now() };
  try {
    window.localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // ストレージが満杯・無効化されている場合はキャッシュを諦める
  }
}

/**
 * key に対応するキャッシュが有効ならそれを返し、無ければ fetcher を実行して
 * 結果をキャッシュしてから返す。fetcher が失敗した場合は例外を呼び出し元に伝播する。
 */
export async function getCachedOrFetch<T>(
  key: string,
  ttlMs: number,
  fetcher: () => Promise<T>,
): Promise<T> {
  const cached = readCache<T>(key, ttlMs);
  if (cached !== null) {
    return cached;
  }

  const value = await fetcher();
  writeCache(key, value);
  return value;
}
