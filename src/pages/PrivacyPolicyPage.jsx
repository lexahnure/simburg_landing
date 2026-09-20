import React from 'react';
import { Link } from 'react-router-dom';
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
              <h1 className="privacy-hero-title">Privacy Policy</h1>
              <p className="privacy-hero-desc">
                How Simburg collects, protects, and handles personal and technical data in strict compliance with the General Data Protection Regulation (GDPR) and European Union telecommunications standards.
              </p>
              <div className="privacy-meta-row">
                <span className="privacy-meta-item">
                  <strong>Effective Date:</strong> March 2026
                </span>
                <span className="privacy-meta-separator">•</span>
                <span className="privacy-meta-item">
                  <strong>Jurisdiction:</strong> European Union
                </span>
                <span className="privacy-meta-separator">•</span>
                <span className="privacy-meta-item">
                  <strong>Standard:</strong> Regulation (EU) 2016/679 (GDPR)
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
            {/* Quick Summary Box */}
            <div className="privacy-highlight-box">
              <div className="privacy-highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#1C479C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" stroke="#1C479C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="privacy-highlight-text">
                <h2 className="privacy-highlight-title">Privacy by Design &amp; EU Data Sovereignty</h2>
                <p className="privacy-highlight-desc">
                  Simburg operates under European Union privacy laws. We do not sell personal data, do not run third-party advertising trackers, and process business inquiries strictly for technical architecture evaluation, mutual NDA fulfillment, and standards-compliant communications.
                </p>
              </div>
            </div>

            <article className="privacy-body">
              {/* Section 1 */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">1. Data Controller Identification</h2>
                <p className="privacy-text">
                  This Privacy Policy applies to the processing of personal data by <strong>Simburg</strong> («we», «our», or «us») as the Data Controller in accordance with Article 4(7) of the EU General Data Protection Regulation (GDPR).
                </p>
                <div className="privacy-info-table">
                  <div className="privacy-info-row">
                    <span className="privacy-info-label">Entity</span>
                    <span className="privacy-info-value">Simburg Telecom Solutions</span>
                  </div>
                  <div className="privacy-info-row">
                    <span className="privacy-info-label">Location</span>
                    <span className="privacy-info-value">European Union</span>
                  </div>
                  <div className="privacy-info-row">
                    <span className="privacy-info-label">Privacy &amp; DPO Inquiries</span>
                    <span className="privacy-info-value">
                      <a href="mailto:privacy@simburg.com" className="privacy-link">privacy@simburg.com</a>
                    </span>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">2. Principles of Data Processing</h2>
                <p className="privacy-text">
                  In accordance with Article 5 of the GDPR, all personal data handled by Simburg is:
                </p>
                <ul className="privacy-list">
                  <li><strong>Lawful, fair, and transparent:</strong> Processed legitimately with clear purpose and explicit consent where required.</li>
                  <li><strong>Purpose-limited:</strong> Collected solely for technical evaluation, pre-contractual discussions, and commercial agreements.</li>
                  <li><strong>Data-minimized:</strong> Restricted strictly to what is necessary for telecommunications software evaluation.</li>
                  <li><strong>Accurate:</strong> Maintained and promptly updated or rectified upon request.</li>
                  <li><strong>Storage-limited:</strong> Retained only for as long as necessary for the intended purpose or statutory requirements.</li>
                  <li><strong>Integrity and confidential:</strong> Protected by industry-grade encryption, access controls, and security standards.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">3. Categories of Information We Collect</h2>
                <p className="privacy-text">
                  We collect and process the following categories of data when you interact with our website or submit inquiries:
                </p>

                <h3 className="privacy-subheading">A. Business Inquiry &amp; Consultation Information</h3>
                <p className="privacy-text">
                  When you submit our contact or consultation form, we collect:
                </p>
                <ul className="privacy-list">
                  <li><strong>Identification data:</strong> First name, last name, business position or title.</li>
                  <li><strong>Contact details:</strong> Corporate email address, company name, telephone number (if provided).</li>
                  <li><strong>Project &amp; Technical scope:</strong> Message content, deployment requirements, target telecom standards (e.g. SGP.22, Release 15), expected subscriber scale, and NDA requests.</li>
                </ul>

                <h3 className="privacy-subheading">B. Technical Server Logs &amp; Security Telemetry</h3>
                <p className="privacy-text">
                  When accessing our web properties, our EU-hosted infrastructure logs standard diagnostic data essential for service uptime, intrusion prevention, and DDoS mitigation:
                </p>
                <ul className="privacy-list">
                  <li>IP address (anonymized or retained briefly for security rate-limiting).</li>
                  <li>Browser type, user-agent, operating system, and TLS protocol version.</li>
                  <li>Timestamp, requested URL path, and HTTP response code.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">4. Legal Bases for Processing (GDPR Art. 6)</h2>
                <p className="privacy-text">
                  We process personal data only when an applicable legal basis under Article 6(1) of the GDPR exists:
                </p>
                <ul className="privacy-list">
                  <li>
                    <strong>Pre-contractual measures (Art. 6(1)(b)):</strong> To respond to your requests for technical specifications, evaluate RFP documentation, and prepare commercial licensing proposals.
                  </li>
                  <li>
                    <strong>Consent (Art. 6(1)(a)):</strong> Provided explicitly via our consultation form checkbox prior to transmitting personal data and technical details.
                  </li>
                  <li>
                    <strong>Legitimate interests (Art. 6(1)(f)):</strong> Maintaining infrastructure stability, network security, and preventing cyber threats against our telecommunications management systems.
                  </li>
                  <li>
                    <strong>Legal compliance (Art. 6(1)(c)):</strong> Fulfilling European Union statutory accounting, export compliance, or regulatory obligations.
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">5. Purpose of Data Processing</h2>
                <p className="privacy-text">
                  We use the information collected specifically to:
                </p>
                <ul className="privacy-list">
                  <li>Facilitate direct engineering discussions between your technical team and Simburg Solution Architects.</li>
                  <li>Execute mutual Non-Disclosure Agreements (NDAs) before reviewing sensitive network topology or key ceremony specifications.</li>
                  <li>Provide software documentation, SAS-SM readiness frameworks, and RSP integration roadmaps.</li>
                  <li>Ensure the continuous security, availability, and optimal performance of our digital channels.</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">6. Data Storage, Location &amp; Security</h2>
                <p className="privacy-text">
                  Simburg enforces rigorous technical and organizational measures (TOMs) under Article 32 of the GDPR:
                </p>
                <ul className="privacy-list">
                  <li><strong>EU Data Residency:</strong> All primary systems, databases, and backup facilities are situated within European Union member states.</li>
                  <li><strong>Encryption:</strong> Data in transit is secured with TLS 1.3 encryption. At-rest storage is encrypted with industry-standard AES-256 protocols.</li>
                  <li><strong>Access Control:</strong> Personal and technical inquiry data is accessible solely by vetted engineering and compliance personnel under strict need-to-know permissions.</li>
                  <li><strong>Zero Third-Party Advertising:</strong> We do not deploy behavioral ad trackers, pixel tags, or cross-site tracking scripts.</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">7. Data Sharing &amp; Third Parties</h2>
                <p className="privacy-text">
                  <strong>We do not sell, rent, or trade your personal data.</strong> Information is shared only with trusted technical sub-processors essential for infrastructure operations (such as EU-based cloud hosting and secure transactional mail relays) bound by stringent Data Processing Agreements (DPAs) compliant with GDPR Article 28.
                </p>
              </section>

              {/* Section 8 */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">8. Data Retention</h2>
                <p className="privacy-text">
                  We retain personal inquiry data only for as long as needed to fulfill the consultation, maintain ongoing commercial dialogues, or comply with statutory retention requirements (such as corporate record-keeping laws). When data is no longer necessary, it is securely deleted or anonymized.
                </p>
              </section>

              {/* Section 9 */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">9. Your Data Subject Rights (GDPR)</h2>
                <p className="privacy-text">
                  As an EU data subject, you hold comprehensive rights regarding your personal information:
                </p>
                <div className="privacy-rights-grid">
                  <div className="privacy-right-card">
                    <h3 className="privacy-right-name">Right of Access (Art. 15)</h3>
                    <p className="privacy-right-desc">Obtain confirmation of whether your data is processed and receive a copy of your personal records.</p>
                  </div>
                  <div className="privacy-right-card">
                    <h3 className="privacy-right-name">Right to Rectification (Art. 16)</h3>
                    <p className="privacy-right-desc">Request prompt correction of inaccurate or incomplete personal information.</p>
                  </div>
                  <div className="privacy-right-card">
                    <h3 className="privacy-right-name">Right to Erasure (Art. 17)</h3>
                    <p className="privacy-right-desc">Request the deletion of personal data when it is no longer needed for its original purpose.</p>
                  </div>
                  <div className="privacy-right-card">
                    <h3 className="privacy-right-name">Right to Restriction (Art. 18)</h3>
                    <p className="privacy-right-desc">Restrict the processing of data under specific contested legal conditions.</p>
                  </div>
                  <div className="privacy-right-card">
                    <h3 className="privacy-right-name">Right to Portability (Art. 20)</h3>
                    <p className="privacy-right-desc">Receive your data in a structured, commonly used, and machine-readable format.</p>
                  </div>
                  <div className="privacy-right-card">
                    <h3 className="privacy-right-name">Right to Object (Art. 21)</h3>
                    <p className="privacy-right-desc">Object to processing based on legitimate interests or direct communications at any time.</p>
                  </div>
                </div>
                <p className="privacy-text privacy-contact-prompt">
                  To exercise any of these rights, please email our team at{' '}
                  <a href="mailto:privacy@simburg.com" className="privacy-link">privacy@simburg.com</a>. We will respond within 30 days without undue delay.
                </p>
              </section>

              {/* Section 10 */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">10. Supervisory Authority</h2>
                <p className="privacy-text">
                  You have the right to lodge a complaint with an official European Union Data Protection Authority (DPA) in your member state of habitual residence, place of work, or place of an alleged infringement if you believe that our processing of personal data infringes the GDPR.
                </p>
              </section>

              {/* Section 11 */}
              <section className="privacy-section">
                <h2 className="privacy-section-title">11. Updates to this Policy</h2>
                <p className="privacy-text">
                  We may periodically revise this Privacy Policy to reflect updates in regulatory requirements, technical architecture, or organizational procedures. The latest version will always be maintained on this page with its effective date.
                </p>
              </section>
            </article>

            {/* Bottom Contact Box */}
            <div className="privacy-footer-cta">
              <div className="privacy-cta-text">
                <h3 className="privacy-cta-title">Have technical or architectural compliance questions?</h3>
                <p className="privacy-cta-desc">
                  Our Solution Architects and compliance team are available to discuss technical requirements under a mutual NDA.
                </p>
              </div>
              <Link to="/contact" className="privacy-cta-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
