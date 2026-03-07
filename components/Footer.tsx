import Image from 'next/image';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__panel glass-card">
        <div className="footer__brand">
          <Image
            src="/brand/setu-groups/symbol/setu-groups-symbol-2048.png"
            alt="Setu Groups symbol"
            width={64}
            height={64}
          />
          <div className="footer__brand-copy">
            <strong>Setu Groups</strong>
            <span>Intertwining Trade &amp; Technology</span>
          </div>
        </div>
        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#services">Services</a>
          <a href="mailto:hello@setugroups.com">hello@setugroups.com</a>
        </div>
        <span>© {year} Setu Groups. All rights reserved.</span>
      </div>
    </footer>
  );
}
