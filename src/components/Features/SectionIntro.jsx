const TABS = [
  { key: 'fin',    label: 'Financial' },
  { key: 'health', label: 'Healthcare' },
  { key: 'saas',   label: 'SaaS' },
  { key: 'gov',    label: 'Government' },
];

const SectionIntro = ({ active, setActive }) => (
  <section style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 24px 24px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.6fr', gap: 60, alignItems: 'end' }}>
      <h2 style={{ fontSize: 54, lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 600, margin: 0 }}>
        Never leak<br/>a record.
      </h2>
      <p style={{ fontSize: 17, lineHeight: 1.55, color: '#3a3e42', maxWidth: 620, margin: 0 }}>
        An agnostic data vault that slots into any application stack without disrupting business. Whether a user is signing up, a partner is exchanging records, or an AI agent is reading from your warehouse — Sechpoint keeps the data secure and usable, while staying compliant with PCI DSS 4.0, SOC 2 Type II, ISO 27001, and HIPAA.
      </p>
    </div>
    <div style={{
      marginTop: 36,
      paddingBottom: 0,
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      gap: 4,
    }}>
      {TABS.map(t => (
        <button
          key={t.key}
          onClick={() => setActive(t.key)}
          style={{
            padding: '12px 18px',
            fontSize: 14,
            fontWeight: 500,
            borderBottom: active === t.key ? '2px solid var(--ink)' : '2px solid transparent',
            marginBottom: -1,
            color: active === t.key ? 'var(--ink)' : 'var(--muted)',
          }}
        >
          <span style={{
            display: 'inline-block',
            width: 8,
            height: 8,
            borderRadius: 99,
            background: active === t.key ? 'var(--cyan)' : 'transparent',
            border: active === t.key ? 'none' : '1px solid #c8c2b3',
            marginRight: 8,
            verticalAlign: 'middle',
          }}/>
          {t.label}
        </button>
      ))}
    </div>
  </section>
);

export default SectionIntro;
