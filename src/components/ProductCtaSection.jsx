import { useState } from 'react';

export default function ProductCtaSection({
  badge = 'GET IN TOUCH',
  title = 'See our solution in action',
  description = 'Request a demo to walk through our platform and deployment options with our engineering team.',
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    companyName: '',
    message: '',
    phone_confirm: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phone_confirm) {
      setSubmitted(true);
      return;
    }
    if (!formData.companyEmail) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="product-cta-section" style={{ padding: '100px 24px', backgroundColor: '#DCE9FA' }}>
      <div
        className="product-cta-grid"
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          borderRadius: 40,
          padding: 12,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.85fr) minmax(320px, 1fr)',
          gap: 0,
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <div className="product-cta-info" style={{ padding: 40 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#1D4ED8', letterSpacing: '0.05em', marginBottom: 14 }}>
            {badge}
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#0F172A', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            {title}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: '#334155', margin: 0, maxWidth: 420 }}>
            {description}
          </p>
        </div>

        <div
          className="product-cta-form"
          style={{
            background: '#FFFFFF',
            borderRadius: 28,
            padding: '40px 32px',
            boxShadow: '0 24px 60px -20px rgba(15, 23, 42, 0.2)',
          }}
        >
          {submitted ? (
            <div style={{ padding: '32px 8px', textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#EFF6FF', color: '#1C479C', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#1C479C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 style={{ fontSize: 20, fontWeight: 700, color: '#14161A', margin: '0 0 8px' }}>Request received</h4>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5A5A63', margin: 0 }}>Our team will follow up shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="phone_confirm"
                value={formData.phone_confirm}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
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

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#14161A', marginBottom: 8 }}>
                  Company email
                </label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  placeholder="name@company.com"
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

              <div style={{ marginBottom: 16 }}>
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

              <div style={{ marginBottom: 22 }}>
                <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#14161A', marginBottom: 8 }}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '13px 15px',
                    border: '1px solid #E3E3E6',
                    borderRadius: 8,
                    fontSize: 14.5,
                    color: '#14161A',
                    resize: 'vertical',
                    outline: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#1C479C',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: 15,
                  fontWeight: 700,
                  padding: '16px 20px',
                  borderRadius: 100,
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}
              >
                Request a demo
              </button>
              <p style={{ fontSize: 12.5, lineHeight: 1.5, color: '#667085', margin: '14px 0 0', textAlign: 'center' }}>
                By clicking &quot;Request a demo&quot;, I acknowledge receipt of the <a href="#" style={{ color: '#1C479C' }}>Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
