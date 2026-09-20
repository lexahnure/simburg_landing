import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="footer-container">
        <div className="footer-grid-3col">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link">
              <img
                src="/uploads/logo_simburg.svg"
                alt="Simburg"
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-brand-desc">
              Standards-based infrastructure for eSIM, OTA, and SIM lifecycle management, built for telecom operators.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="footer-col-title">Products</h4>
            <div className="footer-col-links">
              <Link to="/product-rsp" className="footer-link">
                RSP Solution
              </Link>
              <Link to="/product-sim-os" className="footer-link">
                SIM/eSIM OS
              </Link>
              <Link to="/product-ota" className="footer-link">
                OTA Platform
              </Link>
              <Link to="/product-edoc" className="footer-link">
                eDocuments
              </Link>
            </div>
          </div>

          {/* Contact & Legal Column */}
          <div>
            <h4 className="footer-col-title">Contact &amp; Legal</h4>
            <div className="footer-col-links">
              <Link to="/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
              <Link to="#" className="footer-link">
                Terms of Service
              </Link>
              <Link to="/contact" className="footer-contact-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-wrap">
          <div className="footer-copyright">
            © 2026 Simburg. All rights reserved.
          </div>

          <div className="footer-eu-badge">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="3" r="0.8" fill="currentColor" />
              <circle cx="16.5" cy="4.2" r="0.8" fill="currentColor" />
              <circle cx="19.8" cy="7.5" r="0.8" fill="currentColor" />
              <circle cx="21" cy="12" r="0.8" fill="currentColor" />
              <circle cx="19.8" cy="16.5" r="0.8" fill="currentColor" />
              <circle cx="16.5" cy="19.8" r="0.8" fill="currentColor" />
              <circle cx="12" cy="21" r="0.8" fill="currentColor" />
              <circle cx="7.5" cy="19.8" r="0.8" fill="currentColor" />
              <circle cx="4.2" cy="16.5" r="0.8" fill="currentColor" />
              <circle cx="3" cy="12" r="0.8" fill="currentColor" />
              <circle cx="4.2" cy="7.5" r="0.8" fill="currentColor" />
              <circle cx="7.5" cy="4.2" r="0.8" fill="currentColor" />
            </svg>
            <span>European Union Based</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

