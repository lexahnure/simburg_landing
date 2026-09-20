import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-page-wrap">
      {/* 1. Header / Hero Section */}
      <section className="privacy-hero-section">
        <div className="privacy-hero-container">
          <ScrollReveal>
            <div className="privacy-hero-content">
              <h1 className="privacy-hero-title">Privacy Notice</h1>
              <div className="privacy-meta-row" style={{ marginTop: 8 }}>
                <span className="privacy-meta-item">
                  <strong>Last Updated:</strong> September 20, 2026
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Main Content Card Section */}
      <section className="privacy-content-section">
        <div className="privacy-content-container">
          <div className="privacy-card">
            <article className="privacy-body" style={{ gap: 32 }}>
              {/* 1. Data Controller */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">1. Data Controller:</h2>
                <p className="privacy-text" style={{ marginBottom: 8 }}>
                  This website is operated by Simburg, operated by Kurbatov, registered in Austria (Company Registration Number: 35427674).
                </p>
                <p className="privacy-text" style={{ margin: 0 }}>
                  Contact email: <a href="mailto:info@simburg.com" className="privacy-link">info@simburg.com</a>.
                </p>
              </section>

              {/* 2. Data We Collect */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">2. Data We Collect:</h2>
                <p className="privacy-text" style={{ marginBottom: 8 }}>
                  Details submitted via our contact form (such as your name, email address, and message content).
                </p>
                <p className="privacy-text" style={{ margin: 0 }}>
                  Standard technical server connection data (such as your IP address, browser type, and access logs) collected automatically by our hosting infrastructure.
                </p>
              </section>

              {/* 3. Purpose & Legal Basis */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">3. Purpose &amp; Legal Basis:</h2>
                <p className="privacy-text" style={{ margin: 0 }}>
                  We process your personal information under the GDPR solely to respond to your inquiries, prepare commercial proposals (Art. 6(1)(b) GDPR), and ensure website security and reliable performance (Art. 6(1)(f) GDPR).
                </p>
              </section>

              {/* 4. Third-Party Processors */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">4. Third-Party Processors:</h2>
                <p className="privacy-text" style={{ margin: 0 }}>
                  Your form submissions and network traffic are securely routed via infrastructure providers (such as Web3Forms and our static CDN hosting) directly to our corporate email. We do not sell, rent, or distribute your personal data.
                </p>
              </section>

              {/* 5. Retention */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">5. Retention:</h2>
                <p className="privacy-text" style={{ margin: 0 }}>
                  Inquiry data is retained for up to 24 months to manage business communication, after which it is deleted unless an active contractual relationship is established.
                </p>
              </section>

              {/* 6. Your Rights */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">6. Your Rights:</h2>
                <p className="privacy-text" style={{ margin: 0 }}>
                  Under the GDPR, you have the right to access, rectify, or request the deletion of your personal data at any time. To exercise these rights or submit a request, contact us at <a href="mailto:info@simburg.com" className="privacy-link">info@simburg.com</a>. You also have the right to lodge a complaint with the Austrian Data Protection Authority (Österreichische Datenschutzbehörde).
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
