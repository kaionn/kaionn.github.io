const jstFormatter = new Intl.DateTimeFormat("ja-JP", {
  timeZone: "Asia/Tokyo",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

/**
 * 日時を JST の "MM/DD HH:mm" 形式に整形する。
 */
export function formatJstTimestamp(date: Date): string {
  const parts = jstFormatter.formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes): string =>
    parts.find((part) => part.type === type)?.value ?? "00";

  return `${get("month")}/${get("day")} ${get("hour")}:${get("minute")}`;
}
