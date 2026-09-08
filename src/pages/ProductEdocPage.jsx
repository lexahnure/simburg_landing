import ProductTemplate from '../components/ProductTemplate';

export default function ProductEdocPage() {
  const edocData = {
    icon: '/uploads/EDS.svg',
    title: 'Electronic Documents Solution',
    description: 'Chip software for electronic identity — government-grade applications for ePassports, driving licences, and vehicle registrations.',
    features: [
      {
        title: 'Government-Grade\nApplications',
        description: 'Robust operating system and on-chip applications engineered for ePassports, electronic driving licences (eDL), and electronic vehicle registrations (eVR). Compliant with the SCOSTA specification, utilizing ISO/IEC 7816-4 command and file structures over contact (ISO/IEC 7816-3) and contactless (ISO/IEC 14443) interfaces.',
        badges: ['SCOSTA', 'ISO/IEC 7816-4', 'ISO/IEC 7816-3', 'ISO/IEC 14443'],
      },
      {
        title: 'Advanced Security\n& Data Structure',
        description: 'Features a hardened file system with per-data-group access conditions. Fully implements ICAO Doc 9303 authentication and access control mechanisms, carrying a standardized Logical Data Structure (LDS) for travel documents.',
        badges: ['ICAO Doc 9303', 'LDS'],
      },
      {
        title: 'Strict Document\nLifecycle',
        description: "Enforces a secure operational lifecycle from pre-personalisation and personalisation to issuance and revocation. Deployed on certified secure microcontrollers to anchor the finished document's security directly in the silicon.",
        badges: ['Certified Silicon', 'Secure Lifecycle'],
      },
      {
        title: 'Built for National\nSchemes',
        description: 'Purpose-built to meet the uncompromising security and compliance requirements of state printing works, mints, and national-scheme integrators.',
        badges: ['State Schemes', 'E-Gov Ready'],
      },
    ],
  };

  return <ProductTemplate {...edocData} />;
}
