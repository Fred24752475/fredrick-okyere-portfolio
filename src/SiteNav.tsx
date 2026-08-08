import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from './content';

type NavItem = { label: string; href: string; external?: boolean };

const homeItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Photos', href: '#photos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
  { label: 'Test app', href: 'https://saylyt.com/download', external: true },
];

const photosItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/#work' },
  { label: 'Photos', href: '/photos' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Test app', href: 'https://saylyt.com/download', external: true },
];

export default function SiteNav() {
  const { pathname } = useLocation();
  const onPhotos = pathname.startsWith('/photos');
  const items = onPhotos ? photosItems : homeItems;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-nav">
      <div className="shell nav-bar">
        {onPhotos ? (
          <Link className="brand-mark" to="/" onClick={() => setOpen(false)}>
            {profile.shortName}
          </Link>
        ) : (
          <a className="brand-mark" href="#top" onClick={() => setOpen(false)}>
            {profile.shortName}
          </a>
        )}

        <nav className="nav-links desktop-nav" aria-label="Primary">
          {items.map((item) =>
            item.external || item.href.startsWith('http') ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ) : item.href.startsWith('#') ? (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ) : (
              <Link key={item.label} to={item.href}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? 'nav-toggle-bars open' : 'nav-toggle-bars'} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={open ? 'mobile-nav open' : 'mobile-nav'}
        hidden={!open}
      >
        <nav className="mobile-nav-links" aria-label="Mobile">
          {items.map((item) =>
            item.external || item.href.startsWith('http') ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : item.href.startsWith('#') ? (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
