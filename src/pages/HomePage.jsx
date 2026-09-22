import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
    type: 'mvno',
    title: 'Launching eSIM without running your own stack',
    desc: 'An SM-DP+ under your own brand, integrated into the BSS you already run. Profiles in an open, auditable format.',
    meta: [
      { label: 'RUNS ON', value: 'RSP Solution' },
      { label: 'SPECS', value: 'SGP.22 · SAS-SM' },
    ],
    linkText: 'See the RSP integration scope ›',
    linkUrl: '/product-rsp',
  },
  'IoT provider': {
    type: 'iot',
    title: 'Devices that ship before the network is chosen',
    desc: 'Profiles loaded and switched over SGP.31 and SGP.32. No QR codes, no field visits, no user interaction.',
    meta: [
      { label: 'RUNS ON', value: 'RSP Solution   OTA Platform' },
      { label: 'SPECS', value: 'SGP.31 / SGP.32 · ESipa' },
    ],
    linkText: 'See how IoT provisioning works ›',
    linkUrl: '/product-rsp',
  },
  'Card manufacturer': {
    type: 'card',
    title: 'One OS across the whole product range',
    desc: 'From prepaid SIM to eUICC on a single codebase. Legacy estates stay supported while new products ship.',
    meta: [
      { label: 'RUNS ON', value: 'SIM/eSIM OS' },
      { label: 'SPECS', value: '3GPP Rel 15 · Rel 9 legacy' },
    ],
    linkText: 'See the card OS architecture ›',
    linkUrl: '/product-sim-os',
  },
  'Automotive': {
    type: 'automotive',
    title: 'Vehicles built once, activated per market',
    desc: 'The eUICC is soldered during manufacturing. The profile is loaded remotely in the country where the vehicle is sold.',
    meta: [
      { label: 'RUNS ON', value: 'RSP Solution   SIM/eSIM OS' },
      { label: 'SPECS', value: 'SGP.22 · SGP.32' },
    ],
    linkText: 'See the RSP integration scope ›',
    linkUrl: '/product-rsp',
  },
  'Government': {
    type: 'government',
    title: 'National schemes on infrastructure you control',
    desc: 'Passports, driving licences and vehicle registrations, built against the specifications the scheme is audited on.',
    meta: [
      { label: 'RUNS ON', value: 'eDocuments Solution' },
      { label: 'DEPLOYMENT', value: 'On-premises · your keys' },
    ],
    linkText: 'See the eDocuments scope ›',
    linkUrl: '/product-edoc',
  },
};

const renderStartDiagram = (point) => {
  switch (point.type) {
    case 'mvno':
      return (
        <div className="start-diagram-flow">
          <div className="flow-node">Your BSS</div>
          <div className="flow-arrow" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flow-node flow-node-active">SM-DP+</div>
          <div className="flow-arrow" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flow-node">eUICC</div>
        </div>
      );
    case 'iot':
      return (
        <div className="start-iot-wrap">
          <div className="start-iot-flow">
            <div className="start-badge badge-lime">Downloaded</div>
            <div className="flow-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="start-badge badge-emerald">Enabled</div>
            <div className="flow-arrow flow-arrow-bidirectional" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 8h10M13 4l4 4-4 4M17 16H7M11 20l-4-4 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="start-badge badge-muted">Disabled</div>
            <div className="flow-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="start-badge badge-white">Deleted</div>
          </div>
          <p className="start-diagram-caption">every transition driven remotely by the eIM</p>
        </div>
      );
    case 'card':
      return (
        <div className="start-stack-diagram">
          <div className="stack-box">Your applets</div>
          <div className="stack-box stack-box-active">Simburg card OS</div>
          <div className="stack-box">Secure element</div>
        </div>
      );
    case 'automotive':
      return (
        <div className="start-timeline-wrap">
          <div className="start-timeline-track">
            <div className="timeline-point">
              <span className="timeline-dot" />
              <span className="timeline-label">Factory</span>
            </div>
            <div className="timeline-point">
              <span className="timeline-dot" />
              <span className="timeline-label">Shipped</span>
            </div>
            <div className="timeline-point point-active">
              <span className="timeline-dot dot-active" />
              <span className="timeline-label">Activated</span>
            </div>
            <div className="timeline-arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className="start-diagram-caption">eUICC soldered at build, market chosen at delivery</p>
        </div>
      );
    case 'government':
      return (
        <div className="start-specs-wrap">
          <div className="specs-header">IMPLEMENTED SPECIFICATIONS</div>
          <div className="specs-list">
            <div className="spec-row">
              <span className="spec-name">ICAO Doc 9303</span>
              <span className="spec-desc">travel documents</span>
            </div>
            <div className="spec-row">
              <span className="spec-name">ISO/IEC 14443</span>
              <span className="spec-desc">contactless</span>
            </div>
            <div className="spec-row">
              <span className="spec-name">ISO/IEC 7816</span>
              <span className="spec-desc">contact cards</span>
            </div>
            <div className="spec-row">
              <span className="spec-name">SCOSTA</span>
              <span className="spec-desc">national scheme</span>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default function HomePage() {
  const trackRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const standardsRef = useRef(null);
  const engagementListRef = useRef(null);
  const [activeTab, setActiveTab] = useState('MVNO');
  const [activeEngagementStep, setActiveEngagementStep] = useState(-1);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (!engagementListRef.current) return;
      const list = engagementListRef.current;
      const items = list.querySelectorAll('.engagement-item');
      if (!items || items.length === 0) return;

      const vh = window.innerHeight || document.documentElement.clientHeight;
      const listRect = list.getBoundingClientRect();

      // If list is completely below or far above viewport, no active item
      if (listRect.top > vh * 0.75 || listRect.bottom < vh * 0.20) {
        setActiveEngagementStep(-1);
        return;
      }

      // Reading focus line at 50% of viewport
      const focusY = vh * 0.50;

      let closestIdx = 0;
      let minDistance = Infinity;

      items.forEach((item, idx) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const dist = Math.abs(itemCenter - focusY);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });

      setActiveEngagementStep(closestIdx);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

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


      {/* 2. Partners & Clients Section */}
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
                  href="https://semiconductor.samsung.com/"
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
              <div className="partner-logo-item">
                <a
                  href="https://elitnet.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo-link"
                >
                  <img
                    src="/uploads/elitnet.png"
                    alt="Elit Net"
                    className="partner-logo-img elit-net"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="clients-row">
            <div className="partners-lead-col">
              <p className="partners-lead">
                In production with
              </p>
            </div>
            <div className="partners-logos-col">
              <div className="partner-logo-item">
                <a
                  href="https://www.sensorise.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo-link"
                >
                  <img
                    src="/uploads/sensorise.png"
                    alt="Sensorise"
                    className="partner-logo-img client-logo-img"
                  />
                </a>
              </div>
              <div className="partner-logo-item">
                <a
                  href="https://vadesgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo-link"
                >
                  <img
                    src="/uploads/vades.png"
                    alt="Vades Smart Card"
                    className="partner-logo-img client-logo-img"
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
                {renderStartDiagram(currentStart)}
              </div>

              <div className="start-content">
                <h3 className="start-content-title">{currentStart.title}</h3>
                <p className="start-content-desc">{currentStart.desc}</p>
                <div className="start-meta-row">
                  {currentStart.meta.map((item) => (
                    <div className="start-meta-item" key={item.label}>
                      <span className="start-meta-label">{item.label}</span>
                      <span className="start-meta-value">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="start-link-wrap">
                  <Link to={currentStart.linkUrl} className="start-link-btn">
                    {currentStart.linkText}
                  </Link>
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
            <div className="engagement-list" ref={engagementListRef}>
              {/* Row 1: Documentation */}
              <div className={`engagement-item ${activeEngagementStep === 0 ? 'active' : ''}`}>
                <span className="engagement-number">1.</span>
                <div className="engagement-text">
                  <h3 className="engagement-item-title">Documentation</h3>
                  <p className="engagement-item-desc">
                    Specs and interface definitions, under NDA if you need one
                  </p>
                </div>
              </div>

              {/* Row 2: Architecture review */}
              <div className={`engagement-item ${activeEngagementStep === 1 ? 'active' : ''}`}>
                <span className="engagement-number">2.</span>
                <div className="engagement-text">
                  <h3 className="engagement-item-title">Architecture review</h3>
                  <p className="engagement-item-desc">
                    We map the integration against the systems you run
                  </p>
                </div>
              </div>

              {/* Row 3: Pilot */}
              <div className={`engagement-item ${activeEngagementStep === 2 ? 'active' : ''}`}>
                <span className="engagement-number">3.</span>
                <div className="engagement-text">
                  <h3 className="engagement-item-title">Pilot</h3>
                  <p className="engagement-item-desc">
                    A working deployment on your infrastructure
                  </p>
                </div>
              </div>

              {/* Row 4: Production */}
              <div className={`engagement-item ${activeEngagementStep === 3 ? 'active' : ''}`}>
                <span className="engagement-number">4.</span>
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
