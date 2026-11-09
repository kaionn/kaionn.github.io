import { Link } from "@astryxdesign/core/Link";

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
      <Link href="#top" label="kaionn トップへ" type="inherit" color="primary" className="wordmark">kaionn<span aria-hidden="true">.</span></Link>
      <nav className="top-nav" aria-label="セクションナビゲーション">
        {NAV_ITEMS.map(([label, id]) => <Link key={id} href={`#${id}`} type="inherit" color="secondary">{label}</Link>)}
      </nav>
    </header>
  );
}
