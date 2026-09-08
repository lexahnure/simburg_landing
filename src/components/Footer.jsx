import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="site-footer" style={{ background: '#0D172B', color: '#8E9BAE', padding: '56px 24px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div
          className="footer-grid-3col"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: 40,
          }}
        >
          {/* Brand Col */}
          <div>
            <Link to="/" style={{ display: 'inline-block' }}>
              <img
                src="/uploads/logo_simburg.svg"
                alt="Simburg"
                style={{
                  height: 28,
                  width: 'auto',
                  display: 'block',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Link>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.55,
                color: '#8E9BAE',
                maxWidth: 280,
                margin: '18px 0 0',
              }}
            >
              Standards-based infrastructure for eSIM, OTA, and SIM lifecycle management, built for telecom operators.
            </p>
          </div>

          {/* Products Col */}
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>
              Products
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link to="/product-rsp" className="footer-link">RSP Solution</Link>
              <Link to="/product-sim-os" className="footer-link">SIM/eSIM OS</Link>
              <Link to="/product-ota" className="footer-link">OTA Platform</Link>
              <Link to="/product-edoc" className="footer-link">eDocuments</Link>
            </div>
          </div>

          {/* Contact & Legal Col */}
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>
              Contact &amp; Legal
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:hello@simburg.io" className="footer-link">
                hello@simburg.io
              </a>
              <a href="tel:+380441234567" className="footer-link">
                +380 44 123 4567
              </a>
              <span style={{ color: '#8E9BAE', fontSize: 14 }}>
                Kyiv, Ukraine
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          className="footer-bottom"
          style={{
            marginTop: 56,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 13,
            color: '#8E9BAE',
          }}
        >
          <div>© 2026 Simburg. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link to="#" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span style={{ color: '#8E9BAE', userSelect: 'none' }}>·</span>
            <Link to="#" className="footer-legal-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
