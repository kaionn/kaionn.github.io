const NAV_ITEMS = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "hobby-projects"],
  ["Career", "career"],
  ["Contact", "contact"],
] as const;

export default function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="wordmark" aria-label="kaionn トップへ">kaionn<span aria-hidden="true">.</span></a>
      <nav className="top-nav" aria-label="セクションナビゲーション">
        {NAV_ITEMS.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
    </header>
  );
}
