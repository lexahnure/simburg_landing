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

  const isAbout = location.pathname === '/about' || location.pathname === '/about.html' || location.pathname === '/about.dc.html';
  const isDarkHero = isHome && !scrolled && !menuOpen;

  const headerStyle = menuOpen
    ? { background: '#FFFFFF', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }
    : scrolled
    ? { background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(14px)', boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }
    : isHome || isAbout
    ? { background: 'transparent', boxShadow: 'none' }
    : { background: '#FFFFFF', boxShadow: 'none' };

  const textColor = isDarkHero ? '#FFFFFF' : '#14161A';
  const logoFilter = isDarkHero ? 'brightness(0) invert(1)' : 'none';
  const ctaBg = isDarkHero ? '#FFFFFF' : '#003E83';
  const ctaColor = isDarkHero ? '#003E83' : '#FFFFFF';

  return (
    <header
      className={`site-header ${menuOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        ...headerStyle,
      }}
    >
      <div className="header-inner">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src="/uploads/logo_simburg.svg"
            alt="Simburg"
            className="header-logo"
            style={{
              height: 48,
              width: 154,
              display: 'block',
              filter: logoFilter,
              transition: 'filter 0.3s ease',
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {/* Products Dropdown */}
          <div
            style={{ position: 'relative', padding: '10px 0' }}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <span
              style={{
                color: textColor,
                fontSize: 15,
                fontWeight: 500,
                cursor: 'default',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                transition: 'color 0.3s ease',
              }}
            >
              Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9l6 6 6-6"
                  stroke={textColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: 'stroke 0.3s ease' }}
                />
              </svg>
            </span>

            <div
              style={{
                opacity: productsOpen ? 1 : 0,
                visibility: productsOpen ? 'visible' : 'hidden',
                transform: productsOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-6px)',
                position: 'absolute',
                top: '100%',
                left: '50%',
                background: '#FFFFFF',
                border: '1px solid #EDEEF2',
                borderRadius: 16,
                boxShadow: '0 12px 30px -10px rgba(20,22,26,0.12)',
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 270,
                transition: 'opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease',
              }}
            >
              <Link
                to="/product-rsp"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  color: location.pathname === '/product-rsp' ? '#1C479C' : '#14161A',
                  textDecoration: 'none',
                  fontSize: 14.5,
                  fontWeight: location.pathname === '/product-rsp' ? 600 : 500,
                  padding: '11px 12px',
                  borderRadius: 12,
                  background: location.pathname === '/product-rsp' ? '#F5F5F7' : 'transparent',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 3h7l4 4v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="#1C479C" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M14 3v4h4" stroke="#1C479C" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                RSP Solution
              </Link>

              <Link
                to="/product-edoc"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  color: location.pathname === '/product-edoc' ? '#1C479C' : '#14161A',
                  textDecoration: 'none',
                  fontSize: 14.5,
                  fontWeight: location.pathname === '/product-edoc' ? 600 : 500,
                  padding: '11px 12px',
                  borderRadius: 12,
                  background: location.pathname === '/product-edoc' ? '#F5F5F7' : 'transparent',
                }}
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
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 10,
                  color: location.pathname === '/product-sim-os' ? '#1C479C' : '#14161A',
                  textDecoration: 'none',
                  fontSize: 14.5,
                  fontWeight: location.pathname === '/product-sim-os' ? 600 : 500,
                  padding: '11px 12px',
                  borderRadius: 12,
                  background: location.pathname === '/product-sim-os' ? '#F5F5F7' : 'transparent',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="6" y="6" width="12" height="12" rx="2" stroke={location.pathname === '/product-sim-os' ? '#1C479C' : '#B0B4BC'} strokeWidth="1.6" />
                    <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke={location.pathname === '/product-sim-os' ? '#1C479C' : '#B0B4BC'} strokeWidth="1.4" />
                  </svg>
                  SIM/eSIM OS
                </span>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#98A2B3', background: '#F1F2F4', padding: '3px 8px', borderRadius: 100, whiteSpace: 'nowrap' }}>
                  Coming Soon
                </span>
              </Link>

              <Link
                to="/product-ota"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 10,
                  color: location.pathname === '/product-ota' ? '#1C479C' : '#14161A',
                  textDecoration: 'none',
                  fontSize: 14.5,
                  fontWeight: location.pathname === '/product-ota' ? 600 : 500,
                  padding: '11px 12px',
                  borderRadius: 12,
                  background: location.pathname === '/product-ota' ? '#F5F5F7' : 'transparent',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="16" r="1.4" fill={location.pathname === '/product-ota' ? '#1C479C' : '#B0B4BC'} />
                    <path d="M8.5 12.5a5 5 0 0 1 7 0M5.5 9.5a9 9 0 0 1 13 0" stroke={location.pathname === '/product-ota' ? '#1C479C' : '#B0B4BC'} strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  OTA Platform
                </span>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#98A2B3', background: '#F1F2F4', padding: '3px 8px', borderRadius: 100, whiteSpace: 'nowrap' }}>
                  Coming Soon
                </span>
              </Link>
            </div>
          </div>

          <Link
            to="/about"
            style={{
              color: location.pathname === '/about' ? '#1C479C' : textColor,
              textDecoration: 'none',
              fontSize: 15,
              fontWeight: location.pathname === '/about' ? 600 : 500,
              transition: 'color 0.3s ease',
            }}
          >
            About Us
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: 22, flexShrink: 0 }}>
          <Link
            to="/contact"
            style={{
              background: ctaBg,
              color: ctaColor,
              textDecoration: 'none',
              fontSize: 14.5,
              fontWeight: 600,
              padding: '11px 22px',
              borderRadius: 100,
              whiteSpace: 'nowrap',
              transition: 'background 0.3s ease, color 0.3s ease',
              boxShadow: isDarkHero ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle-btn"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: textColor }}
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
              <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="6" width="12" height="12" rx="2" stroke={location.pathname === '/product-sim-os' ? '#1C479C' : '#B0B4BC'} strokeWidth="1.6" />
                  <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke={location.pathname === '/product-sim-os' ? '#1C479C' : '#B0B4BC'} strokeWidth="1.4" />
                </svg>
                <span>SIM/eSIM OS</span>
              </span>
              <span className="mobile-drawer-badge">Soon</span>
            </Link>

            <Link
              to="/product-ota"
              className={`mobile-drawer-link ${location.pathname === '/product-ota' ? 'active' : ''}`}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="16" r="1.4" fill={location.pathname === '/product-ota' ? '#1C479C' : '#B0B4BC'} />
                  <path d="M8.5 12.5a5 5 0 0 1 7 0M5.5 9.5a9 9 0 0 1 13 0" stroke={location.pathname === '/product-ota' ? '#1C479C' : '#B0B4BC'} strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <span>OTA Platform</span>
              </span>
              <span className="mobile-drawer-badge">Soon</span>
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
