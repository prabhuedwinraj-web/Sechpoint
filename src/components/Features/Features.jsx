import FeatureRow from './FeatureRow';
import FeatureArt1 from './FeatureArt1';
import FeatureArt2 from './FeatureArt2';
import FeatureArt3 from './FeatureArt3';

const variants = {
  tel: [
    {
      kicker: 'VISIBILITY',
      title: 'Turn raw traffic into real-time network and application intelligence.',
      bullets: [
        'Real-time protocol and application classification up to Layer 7 and beyond.',
        'Encrypted traffic intelligence to understand modern application behavior.',
        'High-throughput data visibility and flow orchestration across the network.',
      ],
      art: <FeatureArt1/>,
    },
    {
      kicker: 'SECURITY',
      title: 'Strengthen cyber defense with inline threat intelligence and IP reputation.',
      reverse: true,
      bullets: [
        'Threat detection across IP, URL, and behavioral signals in real time.',
        'Geo-spatial threat visibility and country-of-origin analysis at scale.',
        'Built for SOC, CERT, and national cyber monitoring teams.',
      ],
      art: <FeatureArt2/>,
    },
    {
      kicker: 'CONTROL',
      title: 'Improve subscriber experience with policy control, analytics, and smart care.',
      bullets: [
        'Subscriber mapping using IMSI, IMEI, and MSISDN data across the network.',
        'Application-based rate limiting and intelligent traffic orchestration.',
        'Profile-driven controls for compliance and subscriber service management.',
      ],
      art: <FeatureArt3/>,
    },
  ],
  isp: [
    {
      kicker: 'VISIBILITY',
      title: 'Map every application and protocol across your entire subscriber base.',
      bullets: [
        'Per-subscriber traffic classification and application usage trending.',
        'Bandwidth analytics and real-time network performance dashboards.',
        'Capacity planning intelligence derived from live flow and usage data.',
      ],
      art: <FeatureArt1/>,
    },
    {
      kicker: 'SECURITY',
      title: 'Block phishing, botnets, and malicious domains before they reach users.',
      reverse: true,
      bullets: [
        'DNS and URL filtering with continuously updated threat intelligence feeds.',
        'IP reputation scoring and automated geo-risk analysis across all traffic.',
        'Automated enforcement and alerting built for ISP network operations teams.',
      ],
      art: <FeatureArt2/>,
    },
    {
      kicker: 'CONTROL',
      title: 'Shape and prioritize traffic to guarantee quality of subscriber experience.',
      bullets: [
        'Application-based QoS, rate limiting, and fair-use policy enforcement.',
        'Parental control and customizable content filtering for subscriber tiers.',
        'Compliance reporting for lawful intercept and regulatory requirements.',
      ],
      art: <FeatureArt3/>,
    },
  ],
  gov: [
    {
      kicker: 'VISIBILITY',
      title: 'Gain national-level visibility across critical government network infrastructure.',
      bullets: [
        'Full packet and flow analysis for national-scale network environments.',
        'Multi-agency visibility with centralized command and reporting dashboards.',
        'Behavioral baseline monitoring for anomaly and insider threat detection.',
      ],
      art: <FeatureArt1/>,
    },
    {
      kicker: 'SECURITY',
      title: 'Protect national infrastructure with CERT-grade threat correlation and response.',
      reverse: true,
      bullets: [
        'Real-time IP, URL, and behavioral threat correlation at sovereign scale.',
        'National cyber monitoring with deep CERT and SOC workflow integration.',
        'Geo-origin analysis and attribution for advanced persistent threat actors.',
      ],
      art: <FeatureArt2/>,
    },
    {
      kicker: 'CONTROL',
      title: 'Enforce policy, filtering, and compliance across sovereign network environments.',
      bullets: [
        'Centralized policy management with role-based access and audit controls.',
        'Lawful intercept and regulatory compliance workflows, built for operators.',
        'Cross-agency audit trail and governance reporting with cryptographic provenance.',
      ],
      art: <FeatureArt3/>,
    },
  ],
  ent: [
    {
      kicker: 'VISIBILITY',
      title: 'Understand every application and user across your enterprise network.',
      bullets: [
        'Layer 7 application intelligence across all users, devices, and locations.',
        'Real-time usage dashboards, bandwidth trends, and application analytics.',
        'Shadow IT detection and automatic application classification at scale.',
      ],
      art: <FeatureArt1/>,
    },
    {
      kicker: 'SECURITY',
      title: 'Detect and contain threats before they propagate across your network.',
      reverse: true,
      bullets: [
        'Zero-day and lateral movement detection using deep packet inspection signals.',
        'IP reputation and URL risk scoring applied to all enterprise traffic flows.',
        'Native integration with leading SIEM, XDR, and SOC orchestration platforms.',
      ],
      art: <FeatureArt2/>,
    },
    {
      kicker: 'CONTROL',
      title: 'Enforce granular access, usage, and compliance policies at enterprise scale.',
      bullets: [
        'User and application-level policy controls, rate limits, and segmentation.',
        'Content filtering and acceptable use policy enforcement across all traffic.',
        'Compliance reporting aligned to GDPR, NIS2, and ISO 27001 requirements.',
      ],
      art: <FeatureArt3/>,
    },
  ],
};

const Features = ({ active }) => {
  const list = variants[active] || variants.tel;
  return (
    <section style={{ maxWidth: 1240, margin: '0 auto', padding: '20px 24px 60px' }}>
      {list.map((f, i) => <FeatureRow key={active + '-' + i} {...f}/>)}
    </section>
  );
};

export default Features;
