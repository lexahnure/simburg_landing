import ProductTemplate from '../components/ProductTemplate';

export default function ProductOtaPage() {
  const otaData = {
    icon: '/uploads/OTAPLATFORM.svg',
    title: 'OTA Platform',
    badgeStatus: 'Coming soon',
    description: 'Over-the-air card management at campaign scale — remote SIM and eSIM management for telecom and IoT use cases.',
    features: [
      {
        title: 'Secure Remote\nManagement',
        description: 'Manage files, parameters, keys, and applets across a live installed base. Secured via ETSI and 3GPP standards utilizing KIc/KID cryptographic keysets, counter-based replay protection, and precise proof-of-receipt (PoR).',
        badges: ['ETSI TS 102 225', 'ETSI TS 102 226', '3GPP TS 31.115', '3GPP TS 31.116'],
      },
      {
        title: 'Advanced Delivery\nChannels',
        description: 'Engineered for SCP80 (binary SMS) and SCP81 (high-bandwidth operations where the card opens a PSK-TLS admin session per GlobalPlatform Amendment B).',
        badges: ['SCP80', 'SCP81 (PSK-TLS)', 'GlobalPlatform Amd. B'],
      },
      {
        title: 'Enterprise Campaign\nLayer',
        description: 'Built for large-scale operations with cohort targeting, scheduling, and intelligent throttling aligned with SMSC capacity. Features automated per-card retry policies driven by PoR status words, resumable long scripts, and real-time execution telemetry.',
        badges: ['SMPP', 'PKCS#11', 'Campaign Scale'],
      },
    ],
  };

  return <ProductTemplate {...otaData} />;
}
