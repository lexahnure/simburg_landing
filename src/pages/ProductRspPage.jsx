import ProductTemplate from '../components/ProductTemplate';

export default function ProductRspPage() {
  const rspData = {
    icon: '/uploads/RSP.svg',
    title: 'RSP Solution',
    description: 'The operator side of eSIM: SM-DP+, eIM, and Entitlement — secure profile generation, binding, and delivery for consumer and IoT devices.',
    features: [
      {
        title: 'Consumer eSIM\n(GSMA SGP.22)',
        description: "Secure profile generation and binding. Features seamless integration with the operator's BSS (ES2+), LPA communication (ES9+), and end-to-end delivery to the eUICC (ES8+). Profile protection keys are securely managed within an HSM. Fully GSMA SAS-SM certified.",
        badges: ['GSMA SGP.22', 'ES2+', 'ES8+', 'ES9+', 'SAS-SM'],
      },
      {
        title: 'IoT Provisioning\n(SGP.31/SGP.32)',
        description: 'Advanced eIM capabilities for headless devices. Manage profile states — download, enable, disable, and delete — via IPA without requiring user interaction or QR code scanning, fully managed over ESipa.',
        badges: ['GSMA SGP.31', 'GSMA SGP.32', 'ESipa'],
      },
      {
        title: 'Device\nEntitlement\n(GSMA TS.43)',
        description: 'Delivered in collaboration with our strategic partners, this solution bridges operator subscription management with native, on-device activation for handsets, wearables, and tablets.',
        badges: ['GSMA TS.43'],
      },
    ],
  };

  return <ProductTemplate {...rspData} />;
}
