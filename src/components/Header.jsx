import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/index.html' || location.pathname === '/index.dc.html';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  const isDarkHero = isHome && !scrolled && !menuOpen;

  const headerClassNames = [
    'site-header',
    scrolled ? 'scrolled' : '',
    menuOpen ? 'menu-open' : '',
    isDarkHero ? 'dark-hero' : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClassNames}>
      <div className="header-inner">
        <Link to="/" className="header-logo-link">
          <img
            src="/uploads/logo_simburg.svg"
            alt="Simburg"
            className="header-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {/* Products Dropdown */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <span className="nav-dropdown-trigger">
              Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <div className={`nav-dropdown-menu ${productsOpen ? 'open' : ''}`}>
              <Link
                to="/product-rsp"
                className={`dropdown-item ${location.pathname === '/product-rsp' ? 'active' : ''}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 3h7l4 4v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="#1C479C" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M14 3v4h4" stroke="#1C479C" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                RSP Solution
              </Link>

              <Link
                to="/product-edoc"
                className={`dropdown-item ${location.pathname === '/product-edoc' ? 'active' : ''}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="#1C479C" strokeWidth="1.6" />
                  <circle cx="8" cy="12" r="2" stroke="#1C479C" strokeWidth="1.4" />
                  <path d="M13 10h6M13 13h6" stroke="#1C479C" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                Electronic Documents
              </Link>

              <Link
                to="/product-sim-os"
                className={`dropdown-item ${location.pathname === '/product-sim-os' ? 'active' : ''}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="6" width="12" height="12" rx="2" stroke="#1C479C" strokeWidth="1.6" />
                  <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="#1C479C" strokeWidth="1.4" />
                </svg>
                SIM/eSIM OS
              </Link>

              <Link
                to="/product-ota"
                className={`dropdown-item ${location.pathname === '/product-ota' ? 'active' : ''}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="16" r="1.4" fill="#1C479C" />
                  <path d="M8.5 12.5a5 5 0 0 1 7 0M5.5 9.5a9 9 0 0 1 13 0" stroke="#1C479C" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                OTA Platform
              </Link>
            </div>
          </div>

          <Link
            to="/about"
            className={`nav-item-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="header-cta-btn"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle-btn"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-line line-1" />
          <span className="hamburger-line line-2" />
          <span className="hamburger-line line-3" />
        </button>

        {/* Mobile Navigation Drawer */}
        <div className="mobile-drawer">
          <div className="mobile-drawer-title">Products</div>
          <div className="mobile-drawer-links">
            <Link
              to="/product-rsp"
              className={`mobile-drawer-link ${location.pathname === '/product-rsp' ? 'active' : ''}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 3h7l4 4v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="#1C479C" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M14 3v4h4" stroke="#1C479C" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              <span>RSP Solution</span>
            </Link>

            <Link
              to="/product-edoc"
              className={`mobile-drawer-link ${location.pathname === '/product-edoc' ? 'active' : ''}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#1C479C" strokeWidth="1.6" />
                <circle cx="8" cy="12" r="2" stroke="#1C479C" strokeWidth="1.4" />
                <path d="M13 10h6M13 13h6" stroke="#1C479C" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span>Electronic Documents</span>
            </Link>

            <Link
              to="/product-sim-os"
              className={`mobile-drawer-link ${location.pathname === '/product-sim-os' ? 'active' : ''}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="6" width="12" height="12" rx="2" stroke="#1C479C" strokeWidth="1.6" />
                <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="#1C479C" strokeWidth="1.4" />
              </svg>
              <span>SIM/eSIM OS</span>
            </Link>

            <Link
              to="/product-ota"
              className={`mobile-drawer-link ${location.pathname === '/product-ota' ? 'active' : ''}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="16" r="1.4" fill="#1C479C" />
                <path d="M8.5 12.5a5 5 0 0 1 7 0M5.5 9.5a9 9 0 0 1 13 0" stroke="#1C479C" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span>OTA Platform</span>
            </Link>
          </div>

          <div className="mobile-drawer-divider" />

          <Link
            to="/about"
            className={`mobile-drawer-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About Us
          </Link>

          <div className="mobile-drawer-cta-wrap">
            <Link to="/contact" className="mobile-drawer-cta-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
