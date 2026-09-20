import React from 'react';
import ProductTemplate from '../components/ProductTemplate';

function NativeOsStackDiagram() {
  return (
    <div className="product-visual-card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 440, margin: '0 auto' }}>
        <div className="diag-node" style={{ textAlign: 'left', padding: '14px 20px' }}>
          <div className="diag-node-title">Application Layer</div>
          <div className="diag-node-sub">USIM · USAT Toolkit · 3GPP TS 31.102 / 31.111</div>
        </div>
        <div className="diag-node active-blue" style={{ textAlign: 'left', padding: '16px 20px' }}>
          <div className="diag-node-title">Simburg Native OS Core</div>
          <div className="diag-node-sub">High-performance runtime · Certified Infineon & Samsung Silicon</div>
        </div>
        <div className="diag-node" style={{ textAlign: 'left', padding: '14px 20px' }}>
          <div className="diag-node-title">Interface & Physical Layer</div>
          <div className="diag-node-sub">ETSI TS 102 221 · ISO/IEC 7816 Contact & 14443 Contactless</div>
        </div>
      </div>
    </div>
  );
}

function EuiccDomainDiagram() {
  return (
    <div className="product-visual-card card-white">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxWidth: 440, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <div className="diag-node" style={{ flex: 1, padding: '12px 14px' }}>
            <div className="diag-node-title">ISD-P (Profile A)</div>
            <div className="diag-node-sub">MNO 1 Credentials</div>
          </div>
          <div className="diag-node" style={{ flex: 1, padding: '12px 14px' }}>
            <div className="diag-node-title">ISD-P (Profile B)</div>
            <div className="diag-node-sub">MNO 2 Credentials</div>
          </div>
        </div>

        <div className="diag-node active-blue" style={{ textAlign: 'center', padding: '16px 20px' }}>
          <div className="diag-node-title">ISD-R & ECASD Security Domain</div>
          <div className="diag-node-sub">Profile Lifecycle · SGP.22 Interoperable Package Processing</div>
        </div>

        <div className="diag-node" style={{ textAlign: 'center', padding: '12px 18px' }}>
          <div className="diag-node-title">Certified Hardware Silicon</div>
          <div className="diag-node-sub">Hardware Root of Trust · Asymmetric Crypto Coprocessor</div>
        </div>
      </div>
    </div>
  );
}

function LegacySupportDiagram() {
  return (
    <div className="product-visual-card">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, width: '100%', maxWidth: 440, margin: '0 auto' }}>
        <div className="diag-node" style={{ textAlign: 'center', padding: '16px 14px' }}>
          <div className="diag-node-title">2G / 3G Legacy</div>
          <div className="diag-node-sub">Release 9 baseline</div>
        </div>
        <div className="diag-node" style={{ textAlign: 'center', padding: '16px 14px' }}>
          <div className="diag-node-title">4G / 5G Modern</div>
          <div className="diag-node-sub">Release 15 USIM</div>
        </div>
        <div className="diag-node active-blue" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '16px 20px' }}>
          <div className="diag-node-title">Unified Carrier Firmware</div>
          <div className="diag-node-sub">Full backward compatibility across all live network generations</div>
        </div>
      </div>
    </div>
  );
}

export default function ProductSimOsPage() {
  const simOsData = {
    icon: '/uploads/ESIMOS.svg',
    title: 'SIM/eSIM Operating System',
    description: 'Support for modern industry standards and GlobalPlatform, from classic SIM through to eUICC.',
    features: [
      {
        title: 'Proprietary Native OS (3GPP Release 15)',
        description: 'A robust card operating system written from the ground up and deployed on certified secure microcontrollers. Fully implements the ETSI TS 102 221 UICC–terminal interface, TS 102 223 card application toolkit, alongside the 3GPP TS 31.101/31.102 USIM and TS 31.111 USAT application layers. Includes all authentication algorithms, file system structuring, and remote-management channels required for modern MNO deployments.',
        badges: ['ETSI TS 102 221', 'ETSI TS 102 223', '3GPP TS 31.101', '3GPP TS 31.102', '3GPP TS 31.111', 'Release 15'],
        visual: <NativeOsStackDiagram />,
      },
      {
        title: 'Seamless eUICC Extension',
        description: 'The same proven codebase directly extends into the eSIM domain. Built on an ISD-R/ECASD architecture, it supports GSMA SGP.22-interoperable profile packages, enabling smooth rollouts for both consumer and IoT deployments.',
        badges: ['GSMA SGP.22', 'ISD-R', 'ECASD'],
        visual: <EuiccDomainDiagram />,
      },
      {
        title: 'Legacy Support (3GPP Release 9)',
        description: 'A dedicated 3GPP Release 9 baseline remains actively available to ensure seamless operation within legacy network estates.',
        badges: ['3GPP Release 9', 'Legacy Estates'],
        visual: <LegacySupportDiagram />,
      },
    ],
  };

  return <ProductTemplate {...simOsData} />;
}
