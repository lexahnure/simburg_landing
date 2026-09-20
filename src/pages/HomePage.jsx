import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenText, ScanSearch, FlaskConical, Rocket } from 'lucide-react';
import CanvasHoneycomb from '../components/CanvasHoneycomb';
import ScrollReveal from '../components/ScrollReveal';
import ScrollWordReveal from '../components/ScrollWordReveal';

const START_TABS = [
  'MVNO',
  'IoT provider',
  'Card manufacturer',
  'Automotive',
  'Government',
];

const START_POINTS = {
  'MVNO': {
    title: 'Launching eSIM without running your own stack',
    desc: 'An SM-DP+ under your own brand, integrated into the BSS you already run. Profiles in an open, auditable format.',
    flow: ['Your BSS', 'SM-DP+', 'eUICC'],
    runsOn: 'RSP Solution',
    specs: 'SGP.22 · SAS-SM',
  },
  'IoT provider': {
    title: 'Scalable profile switching for global device fleets',
    desc: 'Manage remote profiles across massive cellular IoT deployments under GSMA SGP.31/SGP.32 without vendor lock-in.',
    flow: ['Device Fleet', 'IoT RSP / eIM', 'eUICC'],
    runsOn: 'RSP Solution · OTA Platform',
    specs: 'GSMA SGP.31 / SGP.32',
  },
  'Card manufacturer': {
    title: 'Native OS deployment across any secure silicon',
    desc: 'Deliver carrier-grade SIM, USIM, and eUICC products built on certified silicon from Infineon and Samsung.',
    flow: ['Chip Silicon', 'Simburg OS', 'Card Issuance'],
    runsOn: 'SIM/eSIM Operating System',
    specs: 'GlobalPlatform · 3GPP Rel 15',
  },
  'Automotive': {
    title: 'Reliable lifecycle management for connected vehicles',
    desc: 'Long-term over-the-air profile provisioning and applet updates built to automotive temperature and endurance grades.',
    flow: ['Connected Vehicle', 'eUICC / M2M', 'Telematics BSS'],
    runsOn: 'RSP Solution · SIM/eSIM OS',
    specs: 'GSMA M2M · SGP.02',
  },
  'Government': {
    title: 'Sovereign electronic identity and travel documents',
    desc: 'Meet stringent national security frameworks for ICAO-compliant ePassports, driver licences, and secure citizen credentials.',
    flow: ['Identity Authority', 'EDS Platform', 'ePassport / eID'],
    runsOn: 'Electronic Documents Solution',
    specs: 'ICAO 9303 · BSI TR-03110',
  },
};

export default function HomePage() {
  const trackRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const standardsRef = useRef(null);
  const [activeTab, setActiveTab] = useState('MVNO');

  const currentStart = START_POINTS[activeTab] || START_POINTS['MVNO'];

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
            btnRef={btnRef}
            standardsRef={standardsRef}
          />
          <div className="hero-container">
            <div ref={textRef} className="hero-text-wrap">
              <h1 className="hero-title">
                Independent software infrastructure for the full SIM and eSIM lifecycle
              </h1>
              <p className="hero-desc">
                Remote SIM provisioning, smart card operating systems and remote lifecycle management. Runs on your infrastructure.
              </p>
              <Link
                ref={btnRef}
                to="/contact"
                className="hero-contact-btn"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* 2. Partners Section */}
      <section
        ref={standardsRef}
        id="standards"
        className="standards-section"
      >
        <ScrollReveal>
          <div className="partners-card">
            <div className="partners-lead-col">
              <p className="partners-lead">
                Delivered with leading technology partners
              </p>
            </div>
            <div className="partners-logos-col">
              <div className="partner-logo-item">
                <a
                  href="https://www.samsung.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo-link"
                >
                  <img
                    src="/uploads/samsung.svg"
                    alt="Samsung"
                    className="partner-logo-img"
                  />
                </a>
              </div>
              <div className="partner-logo-item">
                <a
                  href="https://www.infineon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo-link"
                >
                  <img
                    src="/uploads/infineon.svg"
                    alt="Infineon"
                    className="partner-logo-img"
                  />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. The Cost of the Vendor You Already Have */}
      <section className="cost-section">
        <div className="cost-container">
          <ScrollReveal>
            <div className="cost-grid">
              <div className="cost-left">
                <h2 className="cost-title">
                  The cost of the vendor you already have
                </h2>
                <p className="cost-desc">
                  Per-profile fees that grow with your base. Profile formats you cannot read without the vendor. Release cycles set by someone else. Leaving costs as much as the original project, so most operators stay.
                </p>
              </div>

              <div className="cost-cards-wrap">
                <div className="cost-card-item card-1">
                  <div className="cost-card cost-card-1">
                    <h3 className="cost-card-title">
                      Pricing that scales against you
                    </h3>
                    <p className="cost-card-desc">
                      Every new subscriber adds a line to someone else's invoice
                    </p>
                  </div>
                </div>

                <div className="cost-card-item card-2">
                  <div className="cost-card cost-card-2">
                    <h3 className="cost-card-title">
                      Formats you do not control
                    </h3>
                    <p className="cost-card-desc">
                      Proprietary profiles turn a vendor change into a migration project
                    </p>
                  </div>
                </div>

                <div className="cost-card-item card-3">
                  <div className="cost-card cost-card-3">
                    <h3 className="cost-card-title">
                      Roadmap you do not set
                    </h3>
                    <p className="cost-card-desc">
                      New applets and market features wait for their release cycle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Solutions for the SIM and eSIM lifecycle */}
      <section id="products" className="solutions-section">
        <div className="solutions-container">
          <ScrollReveal>
            <h2 className="solutions-title">
              Solutions for the SIM and eSIM lifecycle
            </h2>
          </ScrollReveal>

          <div className="solutions-grid">
            {/* Card 1: RSP Solution */}
            <ScrollReveal delay={0}>
              <Link to="/product-rsp" className="sol-card">
                <div className="sol-icon-box">
                  <img src="/uploads/RSP.svg" alt="RSP Solution" />
                </div>
                <h3 className="sol-card-title">RSP Solution</h3>
                <p className="sol-card-desc">
                  Launch consumer and IoT eSIM services. Your own SM-DP+, under your brand, with profiles in a format you can read.
                </p>
                <div className="sol-card-action">
                  <span className="sol-arrow-btn" aria-label="Learn more about RSP Solution">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Card 2: SIM/eSIM Operating System */}
            <ScrollReveal delay={60}>
              <Link to="/product-sim-os" className="sol-card">
                <div className="sol-icon-box">
                  <img src="/uploads/ESIMOS.svg" alt="SIM/eSIM Operating System" />
                </div>
                <h3 className="sol-card-title">SIM/eSIM Operating System</h3>
                <p className="sol-card-desc">
                  One card OS across your fleet, from legacy SIM estates to next-generation eUICC.
                </p>
                <div className="sol-card-action">
                  <span className="sol-arrow-btn" aria-label="Learn more about SIM/eSIM Operating System">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Card 3: OTA Platform */}
            <ScrollReveal delay={120}>
              <Link to="/product-ota" className="sol-card">
                <div className="sol-icon-box">
                  <img src="/uploads/OTAPLATFORM.svg" alt="OTA Platform" />
                </div>
                <h3 className="sol-card-title">OTA Platform</h3>
                <p className="sol-card-desc">
                  Update and manage an entire installed base remotely, without truck rolls or card reissuance.
                </p>
                <div className="sol-card-action">
                  <span className="sol-arrow-btn" aria-label="Learn more about OTA Platform">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Card 4: Electronic Documents Solution */}
            <ScrollReveal delay={180}>
              <Link to="/product-edoc" className="sol-card">
                <div className="sol-icon-box">
                  <img src="/uploads/EDS.svg" alt="Electronic Documents Solution" />
                </div>
                <h3 className="sol-card-title">Electronic Documents Solution</h3>
                <p className="sol-card-desc">
                  Meet national-scheme security requirements for passports, licences, and vehicle registrations.
                </p>
                <div className="sol-card-action">
                  <span className="sol-arrow-btn" aria-label="Learn more about Electronic Documents Solution">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Start from where you are */}
      <section className="start-section">
        <div className="start-container">
          <ScrollReveal>
            <div className="start-header">
              <h2 className="start-title">Start from where you are</h2>
              <p className="start-desc">
                Five common starting points. Most projects begin as one of these.
              </p>
            </div>

            {/* Tabs */}
            <div className="start-tabs">
              {START_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`start-tab-btn ${activeTab === tab ? 'active' : ''}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Display Card */}
            <div className="start-card">
              <div className="start-diagram-panel">
                <div className="start-diagram-flow">
                  {currentStart.flow.map((node, i) => (
                    <React.Fragment key={node}>
                      <div className="flow-node">{node}</div>
                      {i < currentStart.flow.length - 1 && (
                        <div className="flow-arrow" aria-hidden="true">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M5 12h14M13 6l6 6-6 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="start-content">
                <h3 className="start-content-title">{currentStart.title}</h3>
                <p className="start-content-desc">{currentStart.desc}</p>
                <div className="start-meta-row">
                  <div className="start-meta-item">
                    <span className="start-meta-label">RUNS ON</span>
                    <span className="start-meta-value">{currentStart.runsOn}</span>
                  </div>
                  <div className="start-meta-item">
                    <span className="start-meta-label">SPECS</span>
                    <span className="start-meta-value">{currentStart.specs}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Engineered on open standards, built to operate at scale */}
      <section className="standards-operate-section">
        <div className="standards-operate-container">
          <ScrollReveal>
            <div className="standards-operate-left">
              <h2 className="standards-operate-title">
                Engineered on open standards, built to operate at scale
              </h2>
            </div>
          </ScrollReveal>

          <div className="standards-operate-grid">
            <ScrollReveal delay={0}>
              <div className="operate-card">
                <img
                  src="/uploads/lifecycle.svg"
                  alt=""
                  className="operate-card-icon"
                />
                <h3 className="operate-card-title">
                  Full profile-to-card lifecycle
                </h3>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={50}>
              <div className="operate-card">
                <img
                  src="/uploads/oneplatform.svg"
                  alt=""
                  className="operate-card-icon"
                />
                <h3 className="operate-card-title">
                  Consumer and IoT, one platform
                </h3>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="operate-card">
                <img
                  src="/uploads/hsmkey.svg"
                  alt=""
                  className="operate-card-icon"
                />
                <h3 className="operate-card-title">
                  HSM-backed key security
                </h3>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="operate-card">
                <img
                  src="/uploads/otascale.svg"
                  alt=""
                  className="operate-card-icon"
                />
                <h3 className="operate-card-title">
                  Campaign-scale OTA operations
                </h3>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="operate-card">
                <img
                  src="/uploads/standards.svg"
                  alt=""
                  className="operate-card-icon"
                />
                <h3 className="operate-card-title">
                  Standards over proprietary formats
                </h3>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. How an engagement starts (Lucide icons) */}
      <section className="engagement-section">
        <div className="engagement-container">
          <ScrollReveal>
            <div className="engagement-left">
              <h2 className="engagement-title">
                How an engagement starts
              </h2>
              <p className="engagement-subtitle">
                No procurement cycle before the technical conversation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <div className="engagement-list">
              {/* Row 1: Documentation */}
              <div className="engagement-item">
                <div className="engagement-icon-wrap">
                  <BookOpenText size={28} strokeWidth={1.8} />
                </div>
                <div className="engagement-text">
                  <h3 className="engagement-item-title">Documentation</h3>
                  <p className="engagement-item-desc">
                    Specs and interface definitions, under NDA if you need one
                  </p>
                </div>
              </div>

              {/* Row 2: Architecture review */}
              <div className="engagement-item">
                <div className="engagement-icon-wrap">
                  <ScanSearch size={28} strokeWidth={1.8} />
                </div>
                <div className="engagement-text">
                  <h3 className="engagement-item-title">Architecture review</h3>
                  <p className="engagement-item-desc">
                    We map the integration against the systems you run
                  </p>
                </div>
              </div>

              {/* Row 3: Pilot */}
              <div className="engagement-item">
                <div className="engagement-icon-wrap">
                  <FlaskConical size={28} strokeWidth={1.8} />
                </div>
                <div className="engagement-text">
                  <h3 className="engagement-item-title">Pilot</h3>
                  <p className="engagement-item-desc">
                    A working deployment on your infrastructure
                  </p>
                </div>
              </div>

              {/* Row 4: Production */}
              <div className="engagement-item">
                <div className="engagement-icon-wrap">
                  <Rocket size={28} strokeWidth={1.8} />
                </div>
                <div className="engagement-text">
                  <h3 className="engagement-item-title">Production</h3>
                  <p className="engagement-item-desc">
                    Runs in your environment: on-premises bare metal or private cloud.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Statement / Manifesto */}
      <section className="statement-section">
        <div className="statement-container">
          <div className="statement-text">
            <ScrollWordReveal text="We develop standalone software components for telecommunications and secure digital identity. Network operators, IoT providers and card manufacturers use them to deploy specialised services without building from scratch." />
          </div>
        </div>
      </section>

      {/* 9. Get in Touch */}
      <section className="get-touch-section">
        <div className="get-touch-container">
          <ScrollReveal>
            <div className="get-touch-card">
              <h2 className="get-touch-title">Get in Touch</h2>
              <p className="get-touch-desc">
                Contact our engineering team to review detailed technical documentation, interface definitions, or evaluation terms.
              </p>
              <Link to="/contact" className="get-touch-btn">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
