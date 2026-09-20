import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    if (!formData.companyEmail || !formData.agreePrivacy) return;
    setSubmitted(true);
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
                        required
                        className="form-input"
                      />
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
                        required
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
                    <button type="submit" className="contact-submit-btn">
                      Request Consultation
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
