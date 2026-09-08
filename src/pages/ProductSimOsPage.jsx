import ProductTemplate from '../components/ProductTemplate';

export default function ProductSimOsPage() {
  const simOsData = {
    icon: '/uploads/ESIMOS.svg',
    title: 'SIM/eSIM Operating System',
    description: 'Support for modern industry standards and GlobalPlatform, from classic SIM through to eUICC.',
    features: [
      {
        title: 'Proprietary Native OS\n(3GPP Release 15)',
        description: 'A robust card operating system written from the ground up and deployed on certified secure microcontrollers. Fully implements the ETSI TS 102 221 UICC–terminal interface, TS 102 223 card application toolkit, alongside the 3GPP TS 31.101/31.102 USIM and TS 31.111 USAT application layers. Includes all authentication algorithms, file system structuring, and remote-management channels required for modern MNO deployments.',
        badges: ['ETSI TS 102 221', 'ETSI TS 102 223', '3GPP TS 31.101', '3GPP TS 31.102', '3GPP TS 31.111', 'Release 15'],
      },
      {
        title: 'Seamless eUICC\nExtension',
        badgeStatus: 'Coming soon',
        description: 'The same proven codebase directly extends into the eSIM domain. Built on an ISD-R/ECASD architecture, it supports GSMA SGP.22-interoperable profile packages, enabling smooth rollouts for both consumer and IoT deployments.',
        badges: ['GSMA SGP.22', 'ISD-R', 'ECASD'],
      },
      {
        title: 'Legacy Support\n(3GPP Release 9)',
        description: 'A dedicated 3GPP Release 9 baseline remains actively available to ensure seamless operation within legacy network estates.',
        badges: ['3GPP Release 9', 'Legacy Estates'],
      },
    ],
  };

  return <ProductTemplate {...simOsData} />;
}
