import React from 'react';
import ProductTemplate from '../components/ProductTemplate';

function GovApplicationsDiagram() {
  return (
    <div className="product-visual-card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          <div className="diag-node" style={{ padding: '10px 8px' }}>
            <div className="diag-node-title" style={{ fontSize: 12 }}>ePassport</div>
            <div className="diag-node-sub" style={{ fontSize: 10 }}>ICAO 9303</div>
          </div>
          <div className="diag-node" style={{ padding: '10px 8px' }}>
            <div className="diag-node-title" style={{ fontSize: 12 }}>eDL</div>
            <div className="diag-node-sub" style={{ fontSize: 10 }}>Driving Licence</div>
          </div>
          <div className="diag-node" style={{ padding: '10px 8px' }}>
            <div className="diag-node-title" style={{ fontSize: 12 }}>eVR</div>
            <div className="diag-node-sub" style={{ fontSize: 10 }}>Vehicle Reg</div>
          </div>
        </div>

        <div className="diag-node active-blue" style={{ textAlign: 'center', padding: '14px 18px' }}>
          <div className="diag-node-title">SCOSTA OS Core</div>
          <div className="diag-node-sub">ISO/IEC 7816-4 Command & File Structures</div>
        </div>

        <div className="diag-node" style={{ textAlign: 'center', padding: '12px 18px' }}>
          <div className="diag-node-title">Dual Interface Controller</div>
          <div className="diag-node-sub">ISO/IEC 7816 Contact & ISO/IEC 14443 Contactless</div>
        </div>
      </div>
    </div>
  );
}

function SecurityDataDiagram() {
  return (
    <div className="product-visual-card card-white">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxWidth: 440, margin: '0 auto' }}>
        <div className="diag-matrix-header">Logical Data Structure (LDS) Groups</div>
        <div className="diag-matrix-pills-row">
          <span className="diag-state-pill pill-blue">DG1 (MRZ Data)</span>
          <span className="diag-state-pill pill-cyan">DG2 (Biometric Facial)</span>
          <span className="diag-state-pill pill-green">DG3 (Fingerprints)</span>
          <span className="diag-state-pill">DG14 (Chip Auth)</span>
        </div>
        <div className="diag-node active-blue" style={{ textAlign: 'center', padding: '14px 18px', marginTop: 4 }}>
          <div className="diag-node-title">Cryptographic Access Control</div>
          <div className="diag-node-sub">PACE · BAC · EAC (Extended Access Control) · Active Authentication</div>
        </div>
      </div>
    </div>
  );
}

function LifecyclePipelineDiagram() {
  return (
    <div className="product-visual-card">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, width: '100%', maxWidth: 440, margin: '0 auto' }}>
        <div className="diag-node" style={{ textAlign: 'center', padding: '14px 10px' }}>
          <div className="diag-node-title">1. Pre-Perso</div>
          <div className="diag-node-sub">Silicon initialization</div>
        </div>
        <div className="diag-node" style={{ textAlign: 'center', padding: '14px 10px' }}>
          <div className="diag-node-title">2. Personalisation</div>
          <div className="diag-node-sub">LDS & key injection</div>
        </div>
        <div className="diag-node active-blue" style={{ textAlign: 'center', padding: '14px 10px' }}>
          <div className="diag-node-title">3. Issuance</div>
          <div className="diag-node-sub">Active citizen validity</div>
        </div>
        <div className="diag-node" style={{ textAlign: 'center', padding: '14px 10px' }}>
          <div className="diag-node-title">4. Revocation</div>
          <div className="diag-node-sub">CRL & expiry lock</div>
        </div>
      </div>
    </div>
  );
}

function NationalSchemesDiagram() {
  return (
    <div className="product-visual-card card-white">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 440, margin: '0 auto' }}>
        <div className="diag-node active-blue" style={{ textAlign: 'left', padding: '16px 20px' }}>
          <div className="diag-node-title">National Scheme Integrators</div>
          <div className="diag-node-sub">State security compliance · Audit-grade issuance architecture</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div className="diag-node" style={{ flex: 1, textAlign: 'center', padding: '14px 12px' }}>
            <div className="diag-node-title">State Printing Works</div>
            <div className="diag-node-sub">Document Production</div>
          </div>
          <div className="diag-node" style={{ flex: 1, textAlign: 'center', padding: '14px 12px' }}>
            <div className="diag-node-title">National Mints</div>
            <div className="diag-node-sub">Certified Secure Silicon</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductEdocPage() {
  const edocData = {
    icon: '/uploads/EDS.svg',
    title: 'Electronic Documents Solution',
    description: 'Chip software for electronic identity — government-grade applications for ePassports, driving licences, and vehicle registrations.',
    features: [
      {
        title: 'Government-Grade Applications',
        description: 'Robust operating system and on-chip applications engineered for ePassports, electronic driving licences (eDL), and electronic vehicle registrations (eVR). Compliant with the SCOSTA specification, utilizing ISO/IEC 7816-4 command and file structures over contact (ISO/IEC 7816-3) and contactless (ISO/IEC 14443) interfaces.',
        badges: ['SCOSTA', 'ISO/IEC 7816-4', 'ISO/IEC 7816-3', 'ISO/IEC 14443'],
        visual: <GovApplicationsDiagram />,
      },
      {
        title: 'Advanced Security & Data Structure',
        description: 'Features a hardened file system with per-data-group access conditions. Fully implements ICAO Doc 9303 authentication and access control mechanisms, carrying a standardized Logical Data Structure (LDS) for travel documents.',
        badges: ['ICAO Doc 9303', 'LDS'],
        visual: <SecurityDataDiagram />,
      },
      {
        title: 'Strict Document Lifecycle',
        description: "Enforces a secure operational lifecycle from pre-personalisation and personalisation to issuance and revocation. Deployed on certified secure microcontrollers to anchor the finished document's security directly in the silicon.",
        badges: ['Certified Silicon', 'Secure Lifecycle'],
        visual: <LifecyclePipelineDiagram />,
      },
      {
        title: 'Built for National Schemes',
        description: 'Purpose-built to meet the uncompromising security and compliance requirements of state printing works, mints, and national-scheme integrators.',
        badges: ['State Schemes', 'E-Gov Ready'],
        visual: <NationalSchemesDiagram />,
      },
    ],
  };

  return <ProductTemplate {...edocData} />;
}
