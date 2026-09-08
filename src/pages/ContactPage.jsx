import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    companyName: '',
    message: '',
    requireNda: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyEmail) return;
    setSubmitted(true);
  };

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero Section */}
      <section className="page-hero-section" style={{ padding: '150px 24px 24px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <h1
            className="page-hero-title"
            style={{
              fontSize: 'clamp(30px, 4.6vw, 44px)',
              lineHeight: 1.1,
              color: '#14161A',
              fontWeight: 800,
              margin: '0 0 16px',
              letterSpacing: '-0.025em',
            }}
          >
            Get in Touch
          </h1>
          <p
            className="page-hero-desc"
            style={{
              fontSize: 17.5,
              lineHeight: 1.6,
              color: '#5A5A63',
              margin: 0,
              maxWidth: 680,
            }}
          >
            Request technical specifications, discuss integration scope, or initiate an NDA-backed architecture review.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" style={{ padding: '40px 24px 100px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <ScrollReveal>
            <div
              className="contact-layout-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '2.6fr 1fr',
                gap: 56,
                alignItems: 'start',
              }}
            >
              {/* Form Outer Container */}
              <div className="contact-form-outer" style={{ background: '#DCE9FA', borderRadius: 40, padding: 40 }}>
                <div
                  className="contact-form-inner"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 28,
                    padding: 40,
                    boxShadow: '0 24px 60px -20px rgba(15, 23, 42, 0.15)',
                  }}
                >
                  <h2 style={{ fontSize: 26, fontWeight: 800, color: '#0F172A', margin: '0 0 28px', letterSpacing: '-0.02em' }}>
                    Request Technical Consultation
                  </h2>

                  {submitted ? (
                    <div style={{ padding: '32px 8px', textAlign: 'center' }}>
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: '50%',
                          background: '#EFF6FF',
                          color: '#1C479C',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 16px',
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="#1C479C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h4 style={{ fontSize: 20, fontWeight: 700, color: '#14161A', margin: '0 0 8px' }}>Request received</h4>
                      <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5A5A63', margin: 0 }}>Our team will follow up shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
                        <div>
                          <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#14161A', marginBottom: 8 }}>
                            First name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              boxSizing: 'border-box',
                              padding: '13px 15px',
                              border: '1px solid #E3E3E6',
                              borderRadius: 8,
                              fontSize: 14.5,
                              color: '#14161A',
                              outline: 'none',
                            }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#14161A', marginBottom: 8 }}>
                            Last name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              boxSizing: 'border-box',
                              padding: '13px 15px',
                              border: '1px solid #E3E3E6',
                              borderRadius: 8,
                              fontSize: 14.5,
                              color: '#14161A',
                              outline: 'none',
                            }}
                          />
                        </div>
                      </div>

                      <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
                        <div>
                          <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#14161A', marginBottom: 8 }}>
                            Company email
                          </label>
                          <input
                            type="email"
                            name="companyEmail"
                            value={formData.companyEmail}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              boxSizing: 'border-box',
                              padding: '13px 15px',
                              border: '1px solid #E3E3E6',
                              borderRadius: 8,
                              fontSize: 14.5,
                              color: '#14161A',
                              outline: 'none',
                            }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#14161A', marginBottom: 8 }}>
                            Company name
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              boxSizing: 'border-box',
                              padding: '13px 15px',
                              border: '1px solid #E3E3E6',
                              borderRadius: 8,
                              fontSize: 14.5,
                              color: '#14161A',
                              outline: 'none',
                            }}
                          />
                        </div>
                      </div>

                      <div style={{ marginBottom: 20 }}>
                        <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#14161A', marginBottom: 8 }}>
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="E.g., Target standards (SGP.22 / Release 15), expected subscriber scale, or deployment timeline..."
                          style={{
                            width: '100%',
                            boxSizing: 'border-box',
                            padding: '13px 15px',
                            border: '1px solid #E3E3E6',
                            borderRadius: 8,
                            fontSize: 14.5,
                            color: '#14161A',
                            resize: 'vertical',
                            fontFamily: 'inherit',
                            outline: 'none',
                          }}
                        />
                      </div>

                      <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22, cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          name="requireNda"
                          checked={formData.requireNda}
                          onChange={handleChange}
                          style={{ width: 18, height: 18, accentColor: '#1C479C', cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: 14.5, color: '#14161A', fontWeight: 500 }}>
                          Require mutual NDA prior to technical discussions
                        </span>
                      </label>

                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          background: '#1C479C',
                          color: '#FFFFFF',
                          border: 'none',
                          fontSize: 15.5,
                          fontWeight: 700,
                          padding: '17px 20px',
                          borderRadius: 100,
                          cursor: 'pointer',
                          transition: 'background 0.2s ease',
                        }}
                      >
                        Request Consultation
                      </button>
                      <p style={{ fontSize: 12.5, lineHeight: 1.5, color: '#667085', margin: '14px 0 0' }}>
                        By clicking &quot;Request Consultation&quot;, I acknowledge receipt of the{' '}
                        <a href="#" style={{ color: '#1C479C' }}>
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                  )}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 36, padding: '32px 12px 8px' }}>
                  <img src="/uploads/GSMA.png" alt="GSMA" style={{ height: 26, width: 'auto' }} />
                  <img src="/uploads/ETSI.png" alt="ETSI" style={{ height: 30, width: 'auto' }} />
                  <img src="/uploads/globalplatform.svg" alt="GlobalPlatform" style={{ height: 30, width: 'auto' }} />
                  <img src="/uploads/ICAO.png" alt="ICAO" style={{ height: 34, width: 'auto' }} />
                  <img src="/uploads/3GPP.svg" alt="3GPP" style={{ height: 34, width: 'auto' }} />
                </div>
              </div>

              {/* Contact Sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingTop: 8 }}>
                <div>
                  <h3 style={{ fontSize: 19, fontWeight: 800, color: '#0F172A', margin: '0 0 20px', letterSpacing: '-0.01em' }}>
                    Direct Channels
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 20 }}>
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: '#0F172A' }}>General Information:</span>
                    <a
                      href="mailto:hello@simburg.io"
                      style={{ fontSize: 16, color: '#334155', textDecoration: 'none', transition: 'color 0.15s ease' }}
                    >
                      hello@simburg.io
                    </a>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: '#0F172A' }}>Phone:</span>
                    <span style={{ fontSize: 16, color: '#334155' }}>+380 44 123 4567</span>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: 19, fontWeight: 800, color: '#0F172A', margin: '0 0 20px', letterSpacing: '-0.01em' }}>
                    Office Location
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: '#0F172A' }}>Address:</span>
                    <span style={{ fontSize: 16, color: '#334155' }}>Kyiv, Ukraine</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
