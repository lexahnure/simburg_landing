import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    companyName: '',
    message: '',
    requireNda: false,
    agreePrivacy: false,
    botcheck: '',
  });
  const [hcaptchaToken, setHcaptchaToken] = useState('');
  const captchaRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [serverError, setServerError] = useState('');

  const onHCaptchaChange = (token) => {
    setHcaptchaToken(token);
    if (serverError) {
      setServerError('');
    }
  };

  const validateEmail = (email) => {
    if (!email || !email.trim()) {
      return 'Company email is required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return 'Please enter a valid email address (e.g., name@company.com).';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    if (name === 'companyEmail' && emailError) {
      setEmailError(validateEmail(val));
    }
    if (serverError) {
      setServerError('');
    }
  };

  const handleEmailBlur = () => {
    if (formData.companyEmail) {
      setEmailError(validateEmail(formData.companyEmail));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    // Honeypot spam trap check
    if (formData.botcheck) {
      setSubmitted(true);
      return;
    }

    if (!formData.agreePrivacy) {
      return;
    }

    const emailErr = validateEmail(formData.companyEmail);
    if (emailErr) {
      setEmailError(emailErr);
      return;
    }

    if (!hcaptchaToken) {
      setServerError('Please complete the captcha verification.');
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = new FormData();
      submissionData.append("access_key", "78773ab4-afac-44da-ac34-6aa5cf26e284");
      submissionData.append("name", `${formData.firstName.trim()} ${formData.lastName.trim()}`);
      submissionData.append("first_name", formData.firstName.trim());
      submissionData.append("last_name", formData.lastName.trim());
      submissionData.append("email", formData.companyEmail.trim());
      submissionData.append("company_name", formData.companyName.trim());
      if (formData.message.trim()) {
        submissionData.append("message", formData.message.trim());
      }
      // Send NDA checkbox value
      submissionData.append("require_nda", formData.requireNda ? "Yes" : "No");
      // Note: agreePrivacy is intentionally NOT appended as requested
      submissionData.append("h-captcha-response", hcaptchaToken);
      submissionData.append("subject", `New Consultation Request: ${formData.firstName.trim()} ${formData.lastName.trim()} (${formData.companyName.trim()})`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        captchaRef.current?.resetCaptcha();
        setHcaptchaToken('');
        setServerError(data.message || 'Submission failed. Please check your inputs and try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setServerError('A network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-wrap">
      {/* 1. Top / Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <ScrollReveal>
              <h1 className="contact-hero-title">Get in Touch</h1>
              <p className="contact-hero-desc">
                Request technical specifications, discuss integration scope, or initiate an NDA-backed architecture review.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Main Content Card Section */}
      <section className="contact-content-section">
        <div className="contact-content-container">
          <div className="contact-main-card">
            {/* Left Column: Consultation Form */}
            <div className="contact-form-col">
              <h2 className="contact-form-title">Request Consultation</h2>

              {submitted ? (
                <div className="contact-success-box">
                  <div className="contact-success-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="#0048A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="contact-success-title">Request Received</h3>
                  <p className="contact-success-desc">
                    Thank you for reaching out. Our engineering team will follow up with you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <input
                    type="hidden"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  {serverError && (
                    <div className="form-server-error" role="alert">
                      {serverError}
                    </div>
                  )}

                  <div className="form-grid-2col">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">First name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">Last name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-group">
                      <label htmlFor="companyEmail" className="form-label">Company email</label>
                      <input
                        type="email"
                        id="companyEmail"
                        name="companyEmail"
                        value={formData.companyEmail}
                        onChange={handleChange}
                        onBlur={handleEmailBlur}
                        required
                        className={`form-input ${emailError ? 'input-error' : ''}`}
                        aria-invalid={!!emailError}
                        aria-describedby={emailError ? 'companyEmail-error' : undefined}
                      />
                      {emailError && (
                        <span id="companyEmail-error" className="form-field-error" role="alert">
                          {emailError}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="companyName" className="form-label">Company name</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="E.g., Target standards (SGP.22 / Release 15), expected subscriber scale, or deployment timeline..."
                      className="form-textarea"
                    />
                  </div>

                  <div className="form-checkbox-row">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="requireNda"
                        checked={formData.requireNda}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span>Require mutual NDA prior to technical discussions</span>
                    </label>
                  </div>

                  <div className="form-checkbox-row">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="agreePrivacy"
                        checked={formData.agreePrivacy}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span>
                        I agree to the processing of my personal data in accordance with the{' '}
                        <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="privacy-link">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>

                  <div className="form-action-row">
                    <div className="form-captcha-wrap">
                      <HCaptcha
                        ref={captchaRef}
                        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                        reCaptchaCompat={false}
                        onVerify={onHCaptchaChange}
                        onExpire={() => setHcaptchaToken('')}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!formData.agreePrivacy || isSubmitting}
                      className="contact-submit-btn"
                    >
                      {isSubmitting ? 'Sending...' : 'Request Consultation'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="contact-sidebar-col">
              {/* Box 1: Built to industry standards */}
              <div className="sidebar-standards-card">
                <h3 className="sidebar-card-title">Built to industry standards</h3>
                <div className="standards-pills-grid">
                  <div className="std-logo-pill">
                    <img src="/uploads/GSMA.png" alt="GSMA" className="std-pill-img" />
                  </div>
                  <div className="std-logo-pill">
                    <img src="/uploads/ETSI.png" alt="ETSI" className="std-pill-img" />
                  </div>
                  <div className="std-logo-pill">
                    <img src="/uploads/globalplatform.svg" alt="GlobalPlatform" className="std-pill-img" />
                  </div>
                  <div className="std-logo-pill">
                    <img src="/uploads/ICAO.png" alt="ICAO" className="std-pill-img" />
                  </div>
                  <div className="std-logo-pill pill-span-2">
                    <img src="/uploads/3GPP.svg" alt="3GPP" className="std-pill-img" />
                  </div>
                </div>
              </div>

              {/* Box 2: European Union Based */}
              <div className="sidebar-eu-card">
                <div className="eu-stars-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <circle cx="12" cy="3" r="1.1" />
                    <circle cx="16.5" cy="4.2" r="1.1" />
                    <circle cx="19.8" cy="7.5" r="1.1" />
                    <circle cx="21" cy="12" r="1.1" />
                    <circle cx="19.8" cy="16.5" r="1.1" />
                    <circle cx="16.5" cy="19.8" r="1.1" />
                    <circle cx="12" cy="21" r="1.1" />
                    <circle cx="7.5" cy="19.8" r="1.1" />
                    <circle cx="4.2" cy="16.5" r="1.1" />
                    <circle cx="3" cy="12" r="1.1" />
                    <circle cx="4.2" cy="7.5" r="1.1" />
                    <circle cx="7.5" cy="4.2" r="1.1" />
                  </svg>
                </div>
                <span className="eu-card-title">European Union Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
