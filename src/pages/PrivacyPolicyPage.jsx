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
              <span className="privacy-hero-badge">Legal &amp; Compliance</span>
              <h1 className="privacy-hero-title">Privacy Notice</h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Main Content Card Section */}
      <section className="privacy-content-section">
        <div className="privacy-content-container">
          <div className="privacy-card">
            <article className="privacy-body" style={{ gap: 20 }}>
              <p className="privacy-text" style={{ fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                This website is operated by [Company Name], registered in [Country], [Company Registration Number].<br />
                Contact: <a href="mailto:email@company.com" className="privacy-link">[email@company.com]</a>.
              </p>

              <p className="privacy-text" style={{ fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                When you browse this site or submit an inquiry through our contact form, we collect only necessary information (such as your name, email, and technical connection data like IP address) solely to respond to your request and ensure secure website performance. We do not sell or disclose your data to unauthorized third parties.
              </p>

              <p className="privacy-text" style={{ fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                To request access to or deletion of your personal data under GDPR, please reach out to us at <a href="mailto:email@company.com" className="privacy-link">[email@company.com]</a>.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
