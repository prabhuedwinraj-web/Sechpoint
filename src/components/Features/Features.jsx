import FeatureRow from './FeatureRow';
import FeatureArt1 from './FeatureArt1';
import FeatureArt2 from './FeatureArt2';
import FeatureArt3 from './FeatureArt3';

const variants = {
  fin: [
    {
      kicker: 'TOKENIZATION',
      title: 'Reduce PCI scope by 92% — tokenize every PAN, ACH and IBAN once.',
      bullets: [
        'Format‑preserving tokens drop into your existing schema and reports.',
        'BYO key, your cloud, your region — Sechpoint never sees plaintext.',
        'Auditors receive a signed evidence packet on every release.',
      ],
      art: <FeatureArt1/>,
    },
    {
      kicker: 'JUST‑IN‑TIME ACCESS',
      title: 'Replace standing access with policy‑as‑code that grants seconds, not weeks.',
      reverse: true,
      bullets: [
        'Declarative policies versioned in Git, signed and enforced in‑kernel.',
        'Step‑up MFA, geo, device posture and SCIM groups, composable.',
        'Every reveal is a verifiable event in your SIEM.',
      ],
      art: <FeatureArt2/>,
    },
    {
      kicker: 'THREAT INTELLIGENCE',
      title: 'Stop credential and PII exfiltration before the first row leaves the vault.',
      bullets: [
        'Behavioural baselines per service, per token type, per hour of day.',
        'Auto‑quarantine, auto‑rotate, page on‑call in under two seconds.',
        'Public‑internet leak monitoring across paste sites and repos.',
      ],
      art: <FeatureArt3/>,
    },
  ],
  health: [
    {
      kicker: 'PHI VAULT',
      title: 'HIPAA‑aligned tokenization for charts, claims and 837 files.',
      bullets: [
        'De‑identify in flight; re‑identify only under signed clinician policies.',
        'BAA‑backed regions including HITRUST‑certified isolated zones.',
        'Built‑in patient consent ledger and right‑to‑erasure.',
      ],
      art: <FeatureArt1/>,
    },
    {
      kicker: 'ACCESS',
      title: 'Care teams get the records they need, nothing more.',
      reverse: true,
      bullets: [
        'Role + relationship matching against the EMR graph.',
        'Break‑glass with mandatory reason codes and notify.',
        'Audit ledger feeds Epic, Cerner and home‑grown stacks.',
      ],
      art: <FeatureArt2/>,
    },
    {
      kicker: 'MONITORING',
      title: 'Detect data‑exfil attempts across labs, billers and partners.',
      bullets: [
        'Per‑partner rate limits and statistical anomaly detection.',
        'Verifiable lineage — know who touched a record across systems.',
        '24/7 SOC integration with playbooks built for healthcare.',
      ],
      art: <FeatureArt3/>,
    },
  ],
  saas: [
    {
      kicker: 'TOKENIZATION',
      title: 'Protect customer secrets without rebuilding your data plane.',
      bullets: [
        'Drop‑in SDKs for Node, Go, Python, Rust, and Ruby.',
        'Tokens are searchable, sortable and joinable — no app rewrite.',
        'Local proxies and edge runners keep latency under 8ms.',
      ],
      art: <FeatureArt1/>,
    },
    {
      kicker: 'AI GUARDRAILS',
      title: 'Strip PII from prompts and embeddings, automatically.',
      reverse: true,
      bullets: [
        'Block sensitive fields from leaving the VPC into model APIs.',
        'Tokenize before vectorising; rehydrate only under policy.',
        'Eval suite for prompt‑injection and data‑exfil regressions.',
      ],
      art: <FeatureArt2/>,
    },
    {
      kicker: 'THREATS',
      title: 'Catch credential leaks the moment they hit the public web.',
      bullets: [
        'Continuous scan of paste sites, public repos and open buckets.',
        'Auto‑rotate compromised tokens and bust caches everywhere.',
        'Customer‑safe disclosure templates and one‑click revocation.',
      ],
      art: <FeatureArt3/>,
    },
  ],
  gov: [
    {
      kicker: 'ISOLATION',
      title: 'FedRAMP‑aligned vaults, deployed in your enclave.',
      bullets: [
        'Air‑gapped or IL4/IL5 regions, customer‑managed HSMs.',
        'Cross‑domain transfer guards with deterministic redaction.',
        'Signed builds and SBOM for every Sechpoint release.',
      ],
      art: <FeatureArt1/>,
    },
    {
      kicker: 'ACCESS',
      title: 'Clearance‑aware policies with hardware‑attested actors.',
      reverse: true,
      bullets: [
        'Bind grants to PIV, CAC, or YubiKey attestation.',
        'Mission rules expressed in plain language, compiled to policy.',
        'Continuous monitoring against NIST 800‑53 controls.',
      ],
      art: <FeatureArt2/>,
    },
    {
      kicker: 'INTELLIGENCE',
      title: 'Detect insider threat patterns without surveilling staff.',
      bullets: [
        'Differentially‑private anomaly detection on access logs.',
        'Quarantine + review queue with mandatory dual control.',
        'Court‑ready audit packets with cryptographic provenance.',
      ],
      art: <FeatureArt3/>,
    },
  ],
};

const Features = ({ active }) => {
  const list = variants[active] || variants.fin;
  return (
    <section style={{ maxWidth: 1240, margin: '0 auto', padding: '20px 24px 60px' }}>
      {list.map((f, i) => <FeatureRow key={active + '-' + i} {...f}/>)}
    </section>
  );
};

export default Features;
