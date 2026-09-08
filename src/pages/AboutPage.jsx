import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import TeamCtaBanner from '../components/TeamCtaBanner';

export default function AboutPage() {
  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Page Hero Section */}
      <section
        className="page-hero-section"
        style={{
          padding: "160px 24px 90px",
          position: "relative",
          overflow: "hidden",
          background: "#EFF6FF",
        }}
      >
        <svg
          viewBox="0 0 1024 331"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.5 }}
        >
          <line x1="-255" y1="-408.5" x2="-255" y2="-244.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="-255" y1="-244.5" x2="-397" y2="-162.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="29" y1="-408.5" x2="29" y2="-244.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="29" y1="-244.5" x2="-113" y2="-162.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="-113" y1="-162.5" x2="-255" y2="-244.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="313" y1="-408.5" x2="313" y2="-244.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="313" y1="-244.5" x2="171" y2="-162.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="171" y1="-162.5" x2="29" y2="-244.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="597" y1="-408.5" x2="597" y2="-244.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="597" y1="-244.5" x2="455" y2="-162.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="455" y1="-162.5" x2="313" y2="-244.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="881" y1="-408.5" x2="881" y2="-244.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="881" y1="-244.5" x2="739" y2="-162.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="739" y1="-162.5" x2="597" y2="-244.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1165" y1="-408.5" x2="1165" y2="-244.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1165" y1="-244.5" x2="1023" y2="-162.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1023" y1="-162.5" x2="881" y2="-244.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1449" y1="-244.5" x2="1307" y2="-162.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1307" y1="-162.5" x2="1165" y2="-244.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="-113" y1="-162.5" x2="-113" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="-113" y1="1.5" x2="-255" y2="83.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="-255" y1="83.5" x2="-397" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="171" y1="-162.5" x2="171" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="171" y1="1.5" x2="29" y2="83.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="29" y1="83.5" x2="-113" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="455" y1="-162.5" x2="455" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="455" y1="1.5" x2="313" y2="83.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="313" y1="83.5" x2="171" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="739" y1="-162.5" x2="739" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="739" y1="1.5" x2="597" y2="83.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="597" y1="83.5" x2="455" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1023" y1="-162.5" x2="1023" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1023" y1="1.5" x2="881" y2="83.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="881" y1="83.5" x2="739" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1307" y1="-162.5" x2="1307" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1307" y1="1.5" x2="1165" y2="83.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1165" y1="83.5" x2="1023" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1449" y1="83.5" x2="1307" y2="1.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="-255" y1="83.5" x2="-255" y2="247.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="-255" y1="247.5" x2="-397" y2="329.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="29" y1="83.5" x2="29" y2="247.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="29" y1="247.5" x2="-113" y2="329.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="-113" y1="329.5" x2="-255" y2="247.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="313" y1="83.5" x2="313" y2="247.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="313" y1="247.5" x2="171" y2="329.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="171" y1="329.5" x2="29" y2="247.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="597" y1="83.5" x2="597" y2="247.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="597" y1="247.5" x2="455" y2="329.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="455" y1="329.5" x2="313" y2="247.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="881" y1="83.5" x2="881" y2="247.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="881" y1="247.5" x2="739" y2="329.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="739" y1="329.5" x2="597" y2="247.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1165" y1="83.5" x2="1165" y2="247.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1165" y1="247.5" x2="1023" y2="329.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1023" y1="329.5" x2="881" y2="247.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1449" y1="247.5" x2="1307" y2="329.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1307" y1="329.5" x2="1165" y2="247.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="-113" y1="329.5" x2="-113" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="-113" y1="493.5" x2="-255" y2="575.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="-255" y1="575.5" x2="-397" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="171" y1="329.5" x2="171" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="171" y1="493.5" x2="29" y2="575.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="29" y1="575.5" x2="-113" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="455" y1="329.5" x2="455" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="455" y1="493.5" x2="313" y2="575.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="313" y1="575.5" x2="171" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="739" y1="329.5" x2="739" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="739" y1="493.5" x2="597" y2="575.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="597" y1="575.5" x2="455" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1023" y1="329.5" x2="1023" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1023" y1="493.5" x2="881" y2="575.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="881" y1="575.5" x2="739" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1307" y1="329.5" x2="1307" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1307" y1="493.5" x2="1165" y2="575.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1165" y1="575.5" x2="1023" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1449" y1="575.5" x2="1307" y2="493.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="-255" y1="575.5" x2="-255" y2="739.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="29" y1="575.5" x2="29" y2="739.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="313" y1="575.5" x2="313" y2="739.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="597" y1="575.5" x2="597" y2="739.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="881" y1="575.5" x2="881" y2="739.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <line x1="1165" y1="575.5" x2="1165" y2="739.5" stroke="#D7E3F5" strokeWidth="1.5" />
          <circle cx="-255" cy="-80.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="29" cy="-80.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="313" cy="-80.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="597" cy="-80.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="881" cy="-80.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="1165" cy="-80.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="-113" cy="165.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="171" cy="165.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="455" cy="165.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="739" cy="165.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="1023" cy="165.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="1307" cy="165.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="-255" cy="411.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="29" cy="411.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="313" cy="411.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="597" cy="411.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="881" cy="411.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
          <circle cx="1165" cy="411.5" r="141.5" stroke="#D7E3F5" strokeWidth="1.5" fill="none" />
        </svg>

        <ScrollReveal>
          <div
            className="about-hero-grid"
            style={{
              maxWidth: 1240,
              margin: "0 auto",
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div className="about-hero-text">
              <h1
                className="page-hero-title"
                style={{
                  fontSize: "clamp(32px, 3.6vw, 44px)",
                  lineHeight: 1.15,
                  color: "#0F172A",
                  fontWeight: 800,
                  margin: "0 0 20px",
                  letterSpacing: "-0.025em",
                  maxWidth: 520,
                }}
              >
                Building the independent software layer for secure connectivity
              </h1>
              <p
                className="page-hero-desc"
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "#5A6472",
                  margin: 0,
                  maxWidth: 480,
                }}
              >
                Simburg was founded by telecom and embedded software engineers to provide operators and device makers
                with carrier-grade, standards-compliant alternatives to closed proprietary ecosystems.
              </p>
            </div>
            <div
              className="about-hero-logo-wrap"
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img
                src="/uploads/logo_simburg.svg"
                alt="Simburg Logo"
                className="about-hero-logo"
                style={{ height: 'clamp(68px, 6.2vw, 92px)', width: "auto", maxWidth: '100%', display: "block" }}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Pillars Section */}
      <section className="pillars-section" style={{ padding: '100px 24px 100px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: '#0F172A', margin: '0 0 40px', letterSpacing: '-0.02em' }}>
            Architectural Integrity by Design
          </h2>
          <ScrollReveal>
            <div
              className="pillars-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 20,
              }}
            >
              <div
                className="pillar-card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E4E7EC',
                  borderRadius: 20,
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <img src="/uploads/standards.svg" alt="Open Standards" style={{ width: 44, height: 44, objectFit: 'contain', display: 'block' }} />
                </div>
                <div style={{ fontSize: 19, fontWeight: 700, color: '#14161A', letterSpacing: '-0.01em' }}>
                  Open Standards Over Vendor Lock-In
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: '#5A6472', margin: 0 }}>
                  Strict adherence to GSMA, 3GPP, and ETSI specifications ensures our products integrate cleanly into
                  existing OSS/BSS without proprietary barriers.
                </p>
              </div>

              <div
                className="pillar-card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E4E7EC',
                  borderRadius: 20,
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <img src="/uploads/universalcodebase.svg" alt="Silicon & Environment Freedom" style={{ width: 44, height: 44, objectFit: 'contain', display: 'block' }} />
                </div>
                <div style={{ fontSize: 19, fontWeight: 700, color: '#14161A', letterSpacing: '-0.01em' }}>
                  Silicon &amp; Environment Freedom
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: '#5A6472', margin: 0 }}>
                  We engineer software to run across leading secure microcontrollers (Infineon, Samsung) and deploy
                  across on-premises bare metal or private cloud environments.
                </p>
              </div>

              <div
                className="pillar-card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E4E7EC',
                  borderRadius: 20,
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <img src="/uploads/direct-engineering.svg" alt="Direct Engineering Engagement" style={{ width: 44, height: 44, objectFit: 'contain', display: 'block' }} />
                </div>
                <div style={{ fontSize: 19, fontWeight: 700, color: '#14161A', letterSpacing: '-0.01em' }}>
                  Direct Engineering Engagement
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: '#5A6472', margin: 0 }}>
                  No intermediary layers. Our clients collaborate directly with Solution Architects throughout evaluation,
                  integration, and deployment.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Standards Alignment Matrix */}
      <section className="matrix-section" style={{ padding: '90px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <ScrollReveal>
            <div
              className="matrix-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.3fr 1fr 1fr',
                gap: '44px 48px',
              }}
            >
              <div className="matrix-lead" style={{ gridRow: 'span 2' }}>
                <h2 style={{ fontSize: 36, fontWeight: 800, color: '#0F172A', margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                  Standards Alignment Framework
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#5A6472', margin: 0 }}>
                  Strict adherence to GSMA, 3GPP, and ETSI specifications ensures our products integrate cleanly into
                  existing OSS/BSS without proprietary barriers.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#0F172A', margin: '0 0 14px' }}>
                  Remote SIM Provisioning
                </h3>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li style={{ fontSize: 15.5, color: '#334155' }}>GSMA SGP.22</li>
                  <li style={{ fontSize: 15.5, color: '#334155' }}>SGP.31 / SGP.32</li>
                  <li style={{ fontSize: 15.5, color: '#334155' }}>SAS-SM readiness</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#0F172A', margin: '0 0 14px' }}>
                  SIM &amp; Smart Card OS
                </h3>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li style={{ fontSize: 15.5, color: '#334155' }}>GlobalPlatform Card Specs</li>
                  <li style={{ fontSize: 15.5, color: '#334155' }}>3GPP Release 15</li>
                  <li style={{ fontSize: 15.5, color: '#334155' }}>ISO/IEC 7816</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#0F172A', margin: '0 0 14px' }}>
                  OTA Card Management
                </h3>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li style={{ fontSize: 15.5, color: '#334155' }}>ETSI TS 102 225 / 226</li>
                  <li style={{ fontSize: 15.5, color: '#334155' }}>3GPP TS 31.115 / 116</li>
                  <li style={{ fontSize: 15.5, color: '#334155' }}>SCP80 / SCP81</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#0F172A', margin: '0 0 14px' }}>
                  Secure Identity
                </h3>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li style={{ fontSize: 15.5, color: '#334155' }}>ICAO Doc 9303</li>
                  <li style={{ fontSize: 15.5, color: '#334155' }}>ISO/IEC 14443</li>
                  <li style={{ fontSize: 15.5, color: '#334155' }}>SCOSTA</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* R&D Innovation Roadmap */}
      <section className="rnd-section" style={{ padding: '90px 24px 0', background: '#FFFFFF' }}>
        <ScrollReveal>
          <div
            className="rnd-grid"
            style={{
              maxWidth: 1240,
              margin: '0 auto',
              border: '1px solid #E4E7EC',
              borderRadius: 28,
              padding: 52,
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: 40,
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1C479C', letterSpacing: '0.05em', marginBottom: 14 }}>
                INNOVATION ROADMAP
              </div>
              <h3 style={{ fontSize: 32, fontWeight: 800, color: '#0F172A', margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Researching Next-Generation Form Factors
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: '#5A6472', margin: 0 }}>
                Our engineering roadmap explores the intersection of telecommunications and embedded hardware,
                including BLE SIM implementations for connected hardware and sovereign payment card operating systems.
              </p>
            </div>
            <div className="rnd-badges" style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
              <span
                className="rnd-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#EAF1FD',
                  color: '#0F172A',
                  fontSize: 14,
                  fontWeight: 600,
                  padding: '10px 18px',
                  borderRadius: 100,
                  marginLeft: 0,
                }}
              >
                <img src="/uploads/bluetooth.svg" alt="" style={{ width: 18, height: 18, flexShrink: 0, display: 'block' }} />
                BLE SIM
              </span>
              <span
                className="rnd-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#EAF1FD',
                  color: '#0F172A',
                  fontSize: 14,
                  fontWeight: 600,
                  padding: '10px 18px',
                  borderRadius: 100,
                  marginLeft: 70,
                }}
              >
                <img src="/uploads/key-square.svg" alt="" style={{ width: 18, height: 18, flexShrink: 0, display: 'block' }} />
                Advanced Cryptography
              </span>
              <span
                className="rnd-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#EAF1FD',
                  color: '#0F172A',
                  fontSize: 14,
                  fontWeight: 600,
                  padding: '10px 18px',
                  borderRadius: 100,
                  marginLeft: 110,
                }}
              >
                <img src="/uploads/credit-card-reader.svg" alt="" style={{ width: 18, height: 18, flexShrink: 0, display: 'block' }} />
                Payment Applications
              </span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Banner Section */}
      <TeamCtaBanner sectionPadding="90px 24px 120px" />
    </div>
  );
}
