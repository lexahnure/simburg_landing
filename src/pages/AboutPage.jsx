import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="about-page-wrap">
      {/* 1. Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <ScrollReveal>
            <div className="about-hero-text">
              <h1 className="about-hero-title">
                Building the independent software layer for secure connectivity
              </h1>
              <p className="about-hero-desc">
                Simburg was founded by telecom and embedded software engineers to provide operators and device makers with standards-compliant alternatives to closed proprietary ecosystems.
              </p>
              <div className="about-hero-stats">
                <div className="about-hero-stat">
                  <div className="about-hero-stat-value">20+ years</div>
                  <div className="about-hero-stat-label">Founders in telecom</div>
                </div>
                <div className="about-hero-stat">
                  <div className="about-hero-stat-value">Since 2023</div>
                  <div className="about-hero-stat-label">Serving operators and device makers</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Architectural Integrity by Design */}
      <section className="about-integrity-section">
        <div className="about-integrity-container">
          <ScrollReveal>
            <h2 className="about-integrity-title">
              Architectural Integrity by Design
            </h2>
          </ScrollReveal>

          <div className="about-cards-grid">
            {/* Card 1 */}
            <ScrollReveal delay={0}>
              <div className="about-feature-card">
                <div className="feature-card-icon-box">
                  <img src="/uploads/standards.svg" alt="" className="feature-card-icon" />
                </div>
                <h3 className="feature-card-title">
                  Open Standards Over Vendor Lock-In
                </h3>
                <p className="feature-card-desc">
                  Strict adherence to GSMA, 3GPP, and ETSI specifications ensures our products integrate cleanly into existing OSS/BSS without proprietary barriers.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={60}>
              <div className="about-feature-card">
                <div className="feature-card-icon-box">
                  <img src="/uploads/universalcodebase.svg" alt="" className="feature-card-icon" />
                </div>
                <h3 className="feature-card-title">
                  Silicon & Environment Freedom
                </h3>
                <p className="feature-card-desc">
                  We engineer software to run across leading secure microcontrollers (Infineon, Samsung) and deploy across on-premises bare metal or private cloud environments.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delay={120}>
              <div className="about-feature-card">
                <div className="feature-card-icon-box">
                  <img src="/uploads/direct-engineering.svg" alt="" className="feature-card-icon" />
                </div>
                <h3 className="feature-card-title">
                  Direct Engineering Engagement
                </h3>
                <p className="feature-card-desc">
                  No intermediary layers. Our clients collaborate directly with Solution Architects throughout evaluation, integration, and deployment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. No Gaps, No Guesswork */}
      <section className="about-specs-section">
        <div className="about-specs-container">
          <ScrollReveal>
            <div className="about-specs-left">
              <h2 className="about-specs-title">
                No Gaps, No Guesswork
              </h2>
              <p className="about-specs-desc">
                Every product line maps to a named specification below — nothing left to interpretation.
              </p>
            </div>
          </ScrollReveal>

          <div className="about-specs-grid">
            <ScrollReveal delay={0}>
              <div className="spec-card">
                <h3 className="spec-card-title">SIM & Smart Card OS</h3>
                <ul className="spec-list">
                  <li>GlobalPlatform Card Specs</li>
                  <li>3GPP Release 15</li>
                  <li>ISO/IEC 7816</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <div className="spec-card">
                <h3 className="spec-card-title">OTA Card Management</h3>
                <ul className="spec-list">
                  <li>ETSI TS 102 225 / 226</li>
                  <li>3GPP TS 31.115 / 116</li>
                  <li>SCP80 / SCP81</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="spec-card">
                <h3 className="spec-card-title">Remote SIM Provisioning</h3>
                <ul className="spec-list">
                  <li>GSMA SGP.22</li>
                  <li>SGP.31 / SGP.32</li>
                  <li>SAS-SM readiness</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div className="spec-card">
                <h3 className="spec-card-title">Secure Identity</h3>
                <ul className="spec-list">
                  <li>ICAO Doc 9303</li>
                  <li>ISO/IEC 14443</li>
                  <li>SCOSTA</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Researching Next-Generation Form Factors */}
      <section className="about-roadmap-section">
        <div className="about-roadmap-container">
          <ScrollReveal>
            <div className="about-roadmap-card">
              <div className="roadmap-pills-col">
                <div className="roadmap-pill pill-green">
                  <img src="/uploads/payment-applications.svg" alt="" className="roadmap-pill-icon" />
                  <span>Payment Applications</span>
                </div>
                <div className="roadmap-pill pill-blue pill-offset">
                  <img src="/uploads/ble-sim.svg" alt="" className="roadmap-pill-icon" />
                  <span>BLE SIM</span>
                </div>
                <div className="roadmap-pill pill-purple">
                  <img src="/uploads/advanced-cryptography.svg" alt="" className="roadmap-pill-icon" />
                  <span>Advanced Cryptography</span>
                </div>
              </div>

              <div className="roadmap-info-col">
                <h2 className="roadmap-title">
                  Researching Next-Generation Form Factors
                </h2>
                <p className="roadmap-desc">
                  Our engineering roadmap explores the intersection of telecommunications and embedded hardware, including BLE SIM implementations for connected hardware and sovereign payment card operating systems.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
