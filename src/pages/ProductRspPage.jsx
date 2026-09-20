import React from 'react';
import ProductTemplate from '../components/ProductTemplate';

function ConsumerEsimDiagram() {
  return (
    <div className="product-visual-card">
      <div className="diag-flow-row">
        {/* Box 1: Operator BSS */}
        <div className="diag-node">
          <div className="diag-node-title">Operator BSS</div>
          <div className="diag-node-sub">Orders profile</div>
        </div>

        {/* Arrow: ES2+ */}
        <div className="diag-connector">
          <span className="diag-connector-label">ES2+</span>
          <div className="diag-connector-line" />
        </div>

        {/* Box 2: SM-DP+ (Active Blue) */}
        <div className="diag-node active-blue">
          <div className="diag-node-title">SM-DP+</div>
          <div className="diag-node-sub">Generates profile</div>
        </div>

        {/* Arrow: ES8+ */}
        <div className="diag-connector">
          <span className="diag-connector-label">ES8+</span>
          <div className="diag-connector-line" />
        </div>

        {/* Box 3: eUICC */}
        <div className="diag-node">
          <div className="diag-node-title">eUICC</div>
          <div className="diag-node-sub">Stores profile</div>
        </div>
      </div>

      {/* Vertical Branch from SM-DP+ down to LPA */}
      <div className="diag-flow-branch">
        <div className="diag-branch-line-wrap">
          <div className="diag-branch-line-v" />
          <span className="diag-branch-label">ES9+</span>
        </div>
        <div className="diag-node">
          <div className="diag-node-title">LPA (device)</div>
          <div className="diag-node-sub">User enrollment</div>
        </div>
      </div>
    </div>
  );
}

function IotProvisioningDiagram() {
  return (
    <div className="product-visual-card card-white">
      <div className="diag-matrix-section">
        <div className="diag-matrix-header">IN THE SM-DP+ · your side</div>
        <div className="diag-matrix-pills-row">
          <span className="diag-state-pill">Available</span>
          <span className="diag-state-pill pill-blue">Allocated</span>
          <span className="diag-state-pill pill-cyan">Linked</span>
          <span className="diag-state-pill">Confirmed</span>
          <span className="diag-state-pill pill-green">Released</span>
        </div>
        <div className="diag-matrix-pills-row">
          <span className="diag-state-pill pill-red">Error</span>
          <span className="diag-state-pill pill-muted">Unavailable</span>
          <span className="diag-state-note">- operational states, visible to support</span>
        </div>
      </div>

      <div className="diag-matrix-divider">
        <span className="diag-matrix-divider-label">ES8+ · delivery</span>
      </div>

      <div className="diag-matrix-section">
        <div className="diag-matrix-header">ON THE eUICC · the device</div>
        <div className="diag-matrix-pills-row">
          <span className="diag-state-pill pill-lime">Downloaded</span>
          <span className="diag-state-pill">Installed</span>
          <span className="diag-state-pill pill-green">Enabled</span>
          <span className="diag-state-pill pill-muted">Disabled</span>
          <span className="diag-state-pill pill-muted">Deleted</span>
        </div>
      </div>
    </div>
  );
}

function DeviceEntitlementDiagram() {
  return (
    <div className="product-visual-card">
      <div className="diag-entitle-row">
        {/* Node 1: Device */}
        <div className="diag-node">
          <div className="diag-node-title">Device</div>
          <div className="diag-node-sub">watch / tablet / handset</div>
        </div>

        {/* Connectors 1 */}
        <div className="diag-entitle-arrows">
          <div className="diag-arrow-item">
            <span className="diag-arrow-text">may I activate?</span>
            <div className="diag-arrow-line" />
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none"><path d="M1 1l4 3-4 3" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="diag-arrow-item">
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none"><path d="M5 1L1 4l4 3" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div className="diag-arrow-line dashed" />
            <span className="diag-arrow-text">activate</span>
          </div>
        </div>

        {/* Node 2: Entitlement Server (Active Blue) */}
        <div className="diag-node active-blue">
          <div className="diag-node-title">Entitlement Server</div>
          <div className="diag-node-sub">Simburg</div>
        </div>

        {/* Connectors 2 */}
        <div className="diag-entitle-arrows">
          <div className="diag-arrow-item">
            <span className="diag-arrow-text">check entitlement</span>
            <div className="diag-arrow-line" />
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none"><path d="M1 1l4 3-4 3" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="diag-arrow-item">
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none"><path d="M5 1L1 4l4 3" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div className="diag-arrow-line dashed" />
            <span className="diag-arrow-text">plan allows it</span>
          </div>
        </div>

        {/* Node 3: Operator BSS */}
        <div className="diag-node">
          <div className="diag-node-title">Operator BSS</div>
          <div className="diag-node-sub">subscription data</div>
        </div>
      </div>
    </div>
  );
}

export default function ProductRspPage() {
  const rspData = {
    icon: '/uploads/RSP.svg',
    title: 'RSP Solution',
    description: 'The operator side of eSIM: SM-DP+, eIM, and Entitlement — secure profile generation, binding, and delivery for consumer and IoT devices.',
    features: [
      {
        title: 'Consumer eSIM (GSMA SGP.22)',
        description: "Secure profile generation and binding. Features seamless integration with the operator's BSS (ES2+), LPA communication (ES9+), and end-to-end delivery to the eUICC (ES8+). Profile protection keys are securely managed within an HSM. Fully GSMA SAS-SM certified.",
        badges: ['GSMA SGP.22', 'ES2+', 'ES8+', 'ES9+', 'SAS-SM'],
        visual: <ConsumerEsimDiagram />,
      },
      {
        title: 'IoT Provisioning (SGP.31/SGP.32)',
        description: 'Advanced eIM capabilities for headless devices. Profiles move through the full state model, from allocation in the SM-DP+ to installation and activation on the eUICC, all driven over ESipa without user interaction or QR code scanning.',
        badges: ['GSMA SGP.31', 'GSMA SGP.32', 'ESipa'],
        visual: <IotProvisioningDiagram />,
      },
      {
        title: 'Device Entitlement (GSMA TS.43)',
        description: 'When a device asks to activate a watch, a tablet or a secondary line, it checks entitlement with the operator before anything happens. Simburg provides that server, integrated into the subscription data you already hold, for handsets, wearables and tablets.',
        badges: ['GSMA TS.43'],
        visual: <DeviceEntitlementDiagram />,
      },
    ],
  };

  return <ProductTemplate {...rspData} />;
}
