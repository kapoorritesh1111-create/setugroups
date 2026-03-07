import Image from 'next/image';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#top" aria-label="Setu Groups home">
          <Image
            src="/brand/setu-groups/logos/web/setu-groups-logo-256.png"
            alt="Setu Groups logo"
            width={182}
            height={54}
            priority
          />
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="button button--primary" href="#contact">
          Start a conversation
        </a>
      </div>
    </header>
  );
}
