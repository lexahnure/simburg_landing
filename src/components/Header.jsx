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
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <g clipPath="url(#clip-rsp-desktop)">
                    <path d="M28.6663 26.6665V12.6665L22.6663 6.6665H3.33301L3.33301 26.6665" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M21.6569 21.0096C20.914 20.2668 20.0321 19.6775 19.0615 19.2755C18.0909 18.8734 17.0506 18.6665 16 18.6665C14.9494 18.6665 13.9091 18.8734 12.9385 19.2755C11.9679 19.6775 11.086 20.2668 10.3431 21.0097" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M24.0142 18.653C22.9618 17.6006 21.7124 16.7657 20.3374 16.1962C18.9624 15.6266 17.4886 15.3335 16.0003 15.3335C14.512 15.3335 13.0383 15.6266 11.6632 16.1962C10.2882 16.7657 9.03884 17.6006 7.98645 18.653" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M19.2995 23.3668C18.8662 22.9335 18.3517 22.5898 17.7855 22.3552C17.2193 22.1207 16.6125 22 15.9997 22C15.3868 22 14.78 22.1207 14.2138 22.3552C13.6476 22.5898 13.1332 22.9335 12.6998 23.3668" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M17.4142 25.2523C17.2285 25.0666 17.008 24.9193 16.7654 24.8187C16.5227 24.7182 16.2626 24.6665 16 24.6665C15.7374 24.6665 15.4773 24.7182 15.2346 24.8187C14.992 24.9193 14.7715 25.0666 14.5858 25.2523L16 26.6665L17.4142 25.2523Z" fill="#1C479C" />
                  </g>
                  <defs>
                    <clipPath id="clip-rsp-desktop">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>RSP Solution</span>
              </Link>

              <Link
                to="/product-sim-os"
                className={`dropdown-item ${location.pathname === '/product-sim-os' ? 'active' : ''}`}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6 28.6665L26 28.6665L26 3.33317L12 3.33317L6 9.33317L6 28.6665Z" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M14.0003 23.9998L14.0003 10.6665M18.0003 23.9998L18.0003 10.6665M10.667 13.9998L14.0003 17.3332L10.667 20.6665M21.3337 13.9998L18.0003 17.3332L21.3337 20.6665M14.0003 14.6665H18.0003V19.9998H14.0003V14.6665Z" stroke="#1C479C" strokeWidth="2" strokeLinejoin="bevel" />
                </svg>
                <span>SIM/eSIM Operating System</span>
              </Link>

              <Link
                to="/product-ota"
                className={`dropdown-item ${location.pathname === '/product-ota' ? 'active' : ''}`}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4.66699 10.0002L16.0003 3.3335L27.3337 10.0002V23.3335L16.0003 30.0002L4.66699 23.3335L4.66699 10.0002Z" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M16.0003 30V24M4.66699 10L10.0003 13.0792M27.3337 10L22.0003 13.0792" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M21.6569 17.0096C20.914 16.2668 20.0321 15.6775 19.0615 15.2755C18.0909 14.8734 17.0506 14.6665 16 14.6665C14.9494 14.6665 13.9091 14.8734 12.9385 15.2755C11.9679 15.6775 11.086 20.2668 10.3431 17.0097" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M19.2995 19.3668C18.8662 18.9335 18.3517 18.5898 17.7855 18.3552C17.2193 18.1207 16.6125 18 15.9997 18C15.3868 18 14.78 18.1207 14.2138 18.3552C13.6476 18.5898 13.1332 18.9335 12.6998 19.3668" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M17.4142 21.2523C17.2285 21.0666 17.008 20.9193 16.7654 20.8187C16.5227 20.7182 16.2626 20.6665 16 20.6665C15.7374 20.6665 15.4773 20.7182 15.2346 20.8187C14.992 20.9193 14.7715 20.0666 14.5858 25.2523L16 26.6665L17.4142 25.2523Z" fill="#1C479C" />
                </svg>
                <span>OTA Platform</span>
              </Link>

              <Link
                to="/product-edoc"
                className={`dropdown-item ${location.pathname === '/product-edoc' ? 'active' : ''}`}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M9.33301 18.6665H22.6663M9.33301 22.6665H17.9997" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M13.333 11.3332H18.6663C18.6663 10.6665 18.333 8.6665 15.9997 8.6665C13.6663 8.6665 13.3332 10.6665 13.333 11.3332ZM13.333 11.3332C13.333 11.9998 13.6663 13.9998 15.9997 13.9998C18.333 13.9998 18.333 12.6665 18.333 12.6665" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M21.3333 8.00016V3.3335L6 3.3335V28.6668H26V8.00016L23 5.00016" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                <span>Electronic Documents Solution</span>
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
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g clipPath="url(#clip-rsp-mobile)">
                  <path d="M28.6663 26.6665V12.6665L22.6663 6.6665H3.33301L3.33301 26.6665" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M21.6569 21.0096C20.914 20.2668 20.0321 19.6775 19.0615 19.2755C18.0909 18.8734 17.0506 18.6665 16 18.6665C14.9494 18.6665 13.9091 18.8734 12.9385 19.2755C11.9679 19.6775 11.086 20.2668 10.3431 21.0097" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M24.0142 18.653C22.9618 17.6006 21.7124 16.7657 20.3374 16.1962C18.9624 15.6266 17.4886 15.3335 16.0003 15.3335C14.512 15.3335 13.0383 15.6266 11.6632 16.1962C10.2882 16.7657 9.03884 17.6006 7.98645 18.653" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M19.2995 23.3668C18.8662 22.9335 18.3517 22.5898 17.7855 22.3552C17.2193 22.1207 16.6125 22 15.9997 22C15.3868 22 14.78 22.1207 14.2138 22.3552C13.6476 22.5898 13.1332 22.9335 12.6998 23.3668" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M17.4142 25.2523C17.2285 25.0666 17.008 24.9193 16.7654 24.8187C16.5227 24.7182 16.2626 24.6665 16 24.6665C15.7374 24.6665 15.4773 24.7182 15.2346 24.8187C14.992 24.9193 14.7715 25.0666 14.5858 25.2523L16 26.6665L17.4142 25.2523Z" fill="#1C479C" />
                </g>
                <defs>
                  <clipPath id="clip-rsp-mobile">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>RSP Solution</span>
            </Link>

            <Link
              to="/product-sim-os"
              className={`mobile-drawer-link ${location.pathname === '/product-sim-os' ? 'active' : ''}`}
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 28.6665L26 28.6665L26 3.33317L12 3.33317L6 9.33317L6 28.6665Z" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                <path d="M14.0003 23.9998L14.0003 10.6665M18.0003 23.9998L18.0003 10.6665M10.667 13.9998L14.0003 17.3332L10.667 20.6665M21.3337 13.9998L18.0003 17.3332L21.3337 20.6665M14.0003 14.6665H18.0003V19.9998H14.0003V14.6665Z" stroke="#1C479C" strokeWidth="2" strokeLinejoin="bevel" />
              </svg>
              <span>SIM/eSIM Operating System</span>
            </Link>

            <Link
              to="/product-ota"
              className={`mobile-drawer-link ${location.pathname === '/product-ota' ? 'active' : ''}`}
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4.66699 10.0002L16.0003 3.3335L27.3337 10.0002V23.3335L16.0003 30.0002L4.66699 23.3335L4.66699 10.0002Z" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                <path d="M16.0003 30V24M4.66699 10L10.0003 13.0792M27.3337 10L22.0003 13.0792" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                <path d="M21.6569 17.0096C20.914 16.2668 20.0321 15.6775 19.0615 15.2755C18.0909 14.8734 17.0506 14.6665 16 14.6665C14.9494 14.6665 13.9091 14.8734 12.9385 15.2755C11.9679 15.6775 11.086 20.2668 10.3431 17.0097" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                <path d="M19.2995 19.3668C18.8662 18.9335 18.3517 18.5898 17.7855 18.3552C17.2193 18.1207 16.6125 18 15.9997 18C15.3868 18 14.78 22.1207 14.2138 22.3552C13.6476 22.5898 13.1332 22.9335 12.6998 23.3668" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                <path d="M17.4142 21.2523C17.2285 21.0666 17.008 20.9193 16.7654 20.8187C16.5227 20.7182 16.2626 20.6665 16 20.6665C15.7374 20.6665 15.4773 20.7182 15.2346 20.8187C14.992 20.9193 14.7715 25.0666 14.5858 21.2523L16 22.6665L17.4142 21.2523Z" fill="#1C479C" />
              </svg>
              <span>OTA Platform</span>
            </Link>

            <Link
              to="/product-edoc"
              className={`mobile-drawer-link ${location.pathname === '/product-edoc' ? 'active' : ''}`}
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9.33301 18.6665H22.6663M9.33301 22.6665H17.9997" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                <path d="M13.333 11.3332H18.6663C18.6663 10.6665 18.333 8.6665 15.9997 8.6665C13.6663 8.6665 13.3332 10.6665 13.333 11.3332ZM13.333 11.3332C13.333 11.9998 13.6663 13.9998 15.9997 13.9998C18.333 13.9998 18.333 12.6665 18.333 12.6665" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
                <path d="M21.3333 8.00016V3.3335L6 3.3335V28.6668H26V8.00016L23 5.00016" stroke="#1C479C" strokeWidth="2" strokeLinejoin="round" />
              </svg>
              <span>Electronic Documents Solution</span>
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
