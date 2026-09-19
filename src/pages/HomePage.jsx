import { useRef } from 'react';
import { Link } from 'react-router-dom';
import CanvasHoneycomb from '../components/CanvasHoneycomb';
import ScrollReveal from '../components/ScrollReveal';
import TeamCtaBanner from '../components/TeamCtaBanner';

export default function HomePage() {
  const trackRef = useRef(null);
  const textRef = useRef(null);

  return (
    <div>
      {/* Hero Section Scroll Track */}
      <section
        ref={trackRef}
        id="hero-track"
        className="hero-scroll-track"
      >
        <div className="hero-sticky-viewport">
          <CanvasHoneycomb
            trackRef={trackRef}
            textRef={textRef}
          />
          <div
            className="hero-container"
            style={{
              maxWidth: 1240,
              margin: '0 auto',
              padding: '0 24px',
              width: '100%',
              height: '100%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              zIndex: 10,
              textAlign: 'center',
            }}
          >
            <div
              ref={textRef}
              className="hero-text-wrap"
              style={{
                maxWidth: 840,
                margin: '0 auto',
                pointerEvents: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <h1
                className="hero-title"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  fontFeatureSettings: "'ss02' on, 'ss03' on, 'ss04' on",
                  WebkitFontFeatureSettings: "'ss02' on, 'ss03' on, 'ss04' on",
                  fontSize: 'clamp(34px, 4.8vw, 56px)',
                  lineHeight: 1.1,
                  color: '#FFFFFF',
                  margin: '0 auto 20px',
                  maxWidth: 840,
                  textAlign: 'center',
                }}
              >
                Independent software infrastructure for the full SIM and eSIM lifecycle
              </h1>
              <p
                className="hero-desc"
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 19px)',
                  lineHeight: 1.6,
                  color: '#C6D2ED',
                  margin: '0 auto 34px',
                  maxWidth: 680,
                  textAlign: 'center',
                }}
              >
                Remote SIM provisioning, smart card operating systems and remote lifecycle management. Runs on your infrastructure.
              </p>
              <Link
                to="/contact"
                className="hero-contact-btn"
              >
                Contact Us
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Technology Section */}
      <section id="standards" className="standards-section" style={{ padding: '64px 24px 0', paddingTop: 40, backgroundColor: '#F8FAFC' }}>
        <ScrollReveal>
          <div
            className="partners-bar"
            style={{
              maxWidth: 1240,
              margin: '0 auto',
              background: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 40,
              flexWrap: 'wrap',
              padding: '20px 40px',
              borderRadius: 0,
            }}
          >
            <div
              className="partner-item"
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#1D2939',
                lineHeight: 1.35,
                paddingRight: 40,
                borderRight: '1px solid #E4E7EC',
              }}
            >
              Delivered with leading<br />technology partners
            </div>
            <div
              className="partner-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight: 40,
                borderRight: '1px solid #E4E7EC',
              }}
            >
              <img
                src="/uploads/samsung.svg"
                alt="Samsung"
                style={{ height: 42, width: 'auto', display: 'block' }}
              />
            </div>
            <div
              className="partner-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/uploads/infineon.svg"
                alt="Infineon"
                style={{ height: 42, width: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Products Overview Section */}
      <section id="products" className="products-section" style={{ padding: '100px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <ScrollReveal>
            <div
              className="products-card-wrap"
              style={{
                borderRadius: 32,
                padding: 16,
                backgroundColor: '#DCE9FA',
              }}
            >
              <div
                className="products-header-wrap"
                style={{
                  marginBottom: 44,
                  padding: '8px 16px',
                  maxWidth: 800,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: '#1D4ED8', letterSpacing: '0.05em', marginBottom: 14 }}>
                  PRODUCTS
                </div>
                <h2
                  className="products-section-title"
                  style={{
                    fontSize: 38,
                    fontWeight: 800,
                    color: '#0F172A',
                    margin: '0 0 16px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Solutions for the SIM and eSIM lifecycle
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: '#334155', margin: 0 }}>
                  Profile management, the card operating system, remote updates, and secure identity documents.
                </p>
              </div>

              <div
                className="products-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 12,
                }}
              >
                {/* Product 1 */}
                <Link
                  to="/product-rsp"
                  className="product-item-card"
                  style={{
                    boxSizing: 'border-box',
                    background: '#FFFFFF',
                    borderRadius: 24,
                    padding: '24px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    border: '1.5px solid transparent',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <img src="/uploads/RSP.svg" alt="RSP Solution" style={{ width: 60, height: 60 }} />
                  <div style={{ fontSize: 21, fontWeight: 700, color: '#0F172A', letterSpacing: '-0.01em' }}>
                    RSP Solution
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5A6472', margin: 0, flexGrow: 1 }}>
                    Launch consumer and IoT eSIM services without building profile management in-house.
                  </p>
                  <div
                    className="product-item-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 14.5,
                      fontWeight: 600,
                      color: '#0F172A',
                      border: '1.5px solid #D0D5DD',
                      padding: '10px 18px',
                      borderRadius: 100,
                      width: 'fit-content',
                      transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                    }}
                  >
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>

                {/* Product 2 */}
                <Link
                  to="/product-edoc"
                  className="product-item-card"
                  style={{
                    boxSizing: 'border-box',
                    background: '#FFFFFF',
                    borderRadius: 24,
                    padding: '24px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    border: '1.5px solid transparent',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <img src="/uploads/EDS.svg" alt="Electronic Documents Solution" style={{ width: 60, height: 60 }} />
                  <div style={{ fontSize: 21, fontWeight: 700, color: '#0F172A', letterSpacing: '-0.01em' }}>
                    Electronic Documents Solution
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5A6472', margin: 0, flexGrow: 1 }}>
                    Meet national-scheme security requirements for passports, licences, and vehicle registrations.
                  </p>
                  <div
                    className="product-item-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 14.5,
                      fontWeight: 600,
                      color: '#0F172A',
                      border: '1.5px solid #D0D5DD',
                      padding: '10px 18px',
                      borderRadius: 100,
                      width: 'fit-content',
                      transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                    }}
                  >
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>

                {/* Product 3 */}
                <Link
                  to="/product-sim-os"
                  className="product-item-card"
                  style={{
                    boxSizing: 'border-box',
                    background: '#FFFFFF',
                    borderRadius: 24,
                    padding: '24px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    border: '1.5px solid transparent',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <img src="/uploads/ESIMOS.svg" alt="SIM/eSIM Operating System" style={{ width: 60, height: 60 }} />
                  <div style={{ fontSize: 21, fontWeight: 700, color: '#0F172A', letterSpacing: '-0.01em' }}>
                    SIM/eSIM Operating System
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5A6472', margin: 0, flexGrow: 1 }}>
                    One card OS across your fleet, from legacy SIM estates to next-generation eUICC.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      className="product-item-btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        fontSize: 14.5,
                        fontWeight: 600,
                        color: '#0F172A',
                        border: '1.5px solid #D0D5DD',
                        padding: '10px 18px',
                        borderRadius: 100,
                        width: 'fit-content',
                        transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      Details
                    </div>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#98A2B3',
                        background: '#F1F2F4',
                        padding: '6px 14px',
                        borderRadius: 100,
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>
                </Link>

                {/* Product 4 */}
                <Link
                  to="/product-ota"
                  className="product-item-card"
                  style={{
                    boxSizing: 'border-box',
                    background: '#FFFFFF',
                    borderRadius: 24,
                    padding: '24px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    border: '1.5px solid transparent',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <img src="/uploads/OTAPLATFORM.svg" alt="OTA Platform" style={{ width: 60, height: 60 }} />
                  <div style={{ fontSize: 21, fontWeight: 700, color: '#0F172A', letterSpacing: '-0.01em' }}>
                    OTA Platform
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5A6472', margin: 0, flexGrow: 1 }}>
                    Update and manage an entire installed base remotely, without truck rolls or card reissuance.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      className="product-item-btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        fontSize: 14.5,
                        fontWeight: 600,
                        color: '#0F172A',
                        border: '1.5px solid #D0D5DD',
                        padding: '10px 18px',
                        borderRadius: 100,
                        width: 'fit-content',
                        transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      Details
                    </div>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#98A2B3',
                        background: '#F1F2F4',
                        padding: '6px 14px',
                        borderRadius: 100,
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits / Why Simburg */}
      <section
        className="benefits-section"
        style={{
          padding: '100px 24px',
          borderTop: '1px solid #F0F0F2',
          backgroundColor: '#F8FAFC',
        }}
      >
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ maxWidth: 640, margin: '0 auto 40px', textAlign: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1C479C', marginBottom: 14 }}>
                Why Simburg
              </div>
              <h2
                className="benefits-section-title"
                style={{
                  fontSize: 38,
                  fontWeight: 700,
                  color: '#14161A',
                  margin: 0,
                  letterSpacing: '-0.025em',
                }}
              >
                Built on open standards,<br />not closed formats
              </h2>
            </div>
          </ScrollReveal>

          <div
            className="benefits-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
            }}
          >
            {[
              {
                icon: '/uploads/lifecycle.svg',
                title: 'Full profile-to-card lifecycle',
                desc: 'RSP, the SIM/eSIM operating system, and OTA management cover profile generation, the card runtime, and remote updates under one architecture.',
                delay: 0,
              },
              {
                icon: '/uploads/oneplatform.svg',
                title: 'Consumer and IoT, one platform',
                desc: 'Consumer eSIM under GSMA SGP.22 and headless IoT provisioning under SGP.31/SGP.32 run on the same RSP infrastructure.',
                delay: 60,
              },
              {
                icon: '/uploads/hsmkey.svg',
                title: 'HSM-backed key security',
                desc: 'Profile protection keys and OTA cryptographic keysets (KIc/KID) are managed within an HSM, with counter-based replay protection and proof-of-receipt on every operation.',
                delay: 120,
              },
              {
                icon: '/uploads/otascale.svg',
                title: 'Campaign-scale OTA operations',
                desc: 'Cohort targeting, scheduling, and throttling aligned to SMSC capacity, with automated retry policies and full APDU audit trails for large installed bases.',
                delay: 180,
              },
              {
                icon: '/uploads/universalcodebase.svg',
                title: 'One codebase, SIM to eUICC',
                desc: 'The same native card OS codebase extends from classic SIM (3GPP Release 15, with Release 9 legacy support) into an ISD-R/ECASD eUICC architecture.',
                delay: 240,
              },
              {
                icon: '/uploads/standards.svg',
                title: 'Standards over proprietary formats',
                desc: 'Every product is built against GSMA, ETSI, 3GPP, GlobalPlatform, and ICAO specifications, keeping integrations open and auditable rather than tied to a single vendor\'s format.',
                delay: 300,
              },
            ].map((b, idx) => (
              <ScrollReveal key={idx} delay={b.delay}>
                <div
                  className="benefit-card"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 20,
                    padding: 32,
                    clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <img src={b.icon} alt="" style={{ width: 48, height: 48 }} />
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: '#14161A', marginBottom: 10, letterSpacing: '-0.01em' }}>
                    {b.title}
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A5A63', margin: 0 }}>
                    {b.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section" style={{ padding: '100px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <ScrollReveal>
            <div
              className="about-preview-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '5fr 3fr',
                gap: 40,
                alignItems: 'center',
              }}
            >
              <div className="about-preview-text" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <h3 style={{ fontSize: 28, fontWeight: 700, color: '#1C479C', margin: 0, lineHeight: 1.25 }}>
                  Simburg
                </h3>
                <p style={{ fontSize: 28, lineHeight: 1.25, color: '#1C479C', margin: 0, fontWeight: 500 }}>
                  We develop standalone software components for telecommunications and secure digital identity. Our engineering approach prioritizes full compliance with international standards, enabling network operators, IoT providers, and card manufacturers to deploy specialized services without building from scratch.
                </p>
                <Link
                  to="/about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'transparent',
                    color: '#003E83',
                    fontSize: 16,
                    fontWeight: 700,
                    padding: '14px 30px',
                    borderRadius: 100,
                    width: 'fit-content',
                    marginTop: 8,
                    border: '1.5px solid #003E83',
                    transition: 'background 0.2s ease, color 0.2s ease',
                  }}
                >
                  Get know more
                </Link>
              </div>

              <div className="about-preview-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/uploads/hexa_about.png" alt="Simburg Technology" style={{ width: '100%', maxWidth: 440, height: 'auto' }} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner Section */}
      <TeamCtaBanner sectionPadding="0 24px 100px" />
    </div>
  );
}
