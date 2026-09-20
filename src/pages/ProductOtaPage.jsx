import React from 'react';
import ProductTemplate from '../components/ProductTemplate';

function OtaSecurityFlowDiagram() {
  return (
    <div className="product-visual-card">
      <div className="diag-flow-row">
        <div className="diag-node">
          <div className="diag-node-title">OTA Center</div>
          <div className="diag-node-sub">Script Dispatch</div>
        </div>

        <div className="diag-connector">
          <span className="diag-connector-label">KIc/KID</span>
          <div className="diag-connector-line" />
        </div>

        <div className="diag-node active-blue">
          <div className="diag-node-title">HSM Cryptography</div>
          <div className="diag-node-sub">Anti-Replay Counter</div>
        </div>

        <div className="diag-connector">
          <span className="diag-connector-label">PoR Ack</span>
          <div className="diag-connector-line" />
        </div>

        <div className="diag-node">
          <div className="diag-node-title">eUICC / SIM</div>
          <div className="diag-node-sub">Verified Execution</div>
        </div>
      </div>
    </div>
  );
}

function OtaChannelsDiagram() {
  return (
    <div className="product-visual-card card-white">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxWidth: 440, margin: '0 auto' }}>
        <div className="diag-node" style={{ textAlign: 'left', padding: '14px 20px' }}>
          <div className="diag-node-title">SCP80 · SMS-PP Channel</div>
          <div className="diag-node-sub">Binary SMS transport · Global footprint for lightweight updates</div>
        </div>
        <div className="diag-node active-blue" style={{ textAlign: 'left', padding: '16px 20px' }}>
          <div className="diag-node-title">SCP81 · PSK-TLS Session</div>
          <div className="diag-node-sub">GlobalPlatform Amendment B · Direct HTTPS high-speed session for large applet payloads</div>
        </div>
      </div>
    </div>
  );
}

function OtaCampaignPipelineDiagram() {
  return (
    <div className="product-visual-card">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, width: '100%', maxWidth: 440, margin: '0 auto' }}>
        <div className="diag-node" style={{ textAlign: 'center', padding: '14px 12px' }}>
          <div className="diag-node-title">1. Cohort Targeting</div>
          <div className="diag-node-sub">BSS / Fleet filter</div>
        </div>
        <div className="diag-node" style={{ textAlign: 'center', padding: '14px 12px' }}>
          <div className="diag-node-title">2. SMSC Throttling</div>
          <div className="diag-node-sub">Rate-limiting queue</div>
        </div>
        <div className="diag-node" style={{ textAlign: 'center', padding: '14px 12px' }}>
          <div className="diag-node-title">3. Retry Engine</div>
          <div className="diag-node-sub">PoR status feedback</div>
        </div>
        <div className="diag-node active-blue" style={{ textAlign: 'center', padding: '14px 12px' }}>
          <div className="diag-node-title">4. Real-time Telemetry</div>
          <div className="diag-node-sub">Live audit metrics</div>
        </div>
      </div>
    </div>
  );
}

export default function ProductOtaPage() {
  const otaData = {
    icon: '/uploads/OTAPLATFORM.svg',
    title: 'OTA Platform',
    description: 'Over-the-air card management at campaign scale — remote SIM and eSIM management for telecom and IoT use cases.',
    features: [
      {
        title: 'Secure Remote Management',
        description: 'Manage files, parameters, keys, and applets across a live installed base. Secured via ETSI and 3GPP standards utilizing KIc/KID cryptographic keysets, counter-based replay protection, and precise proof-of-receipt (PoR).',
        badges: ['ETSI TS 102 225', 'ETSI TS 102 226', '3GPP TS 31.115', '3GPP TS 31.116'],
        visual: <OtaSecurityFlowDiagram />,
      },
      {
        title: 'Advanced Delivery Channels',
        description: 'Engineered for SCP80 (binary SMS) and SCP81 (high-bandwidth operations where the card opens a PSK-TLS admin session per GlobalPlatform Amendment B).',
        badges: ['SCP80', 'SCP81 (PSK-TLS)', 'GlobalPlatform Amd. B'],
        visual: <OtaChannelsDiagram />,
      },
      {
        title: 'Enterprise Campaign Layer',
        description: 'Built for large-scale operations with cohort targeting, scheduling, and intelligent throttling aligned with SMSC capacity. Features automated per-card retry policies driven by PoR status words, resumable long scripts, and real-time execution telemetry.',
        badges: ['SMPP', 'PKCS#11', 'Campaign Scale'],
        visual: <OtaCampaignPipelineDiagram />,
      },
    ],
  };

  return <ProductTemplate {...otaData} />;
}
