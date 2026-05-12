const TABS = [
  { key: 'tel',  label: 'Telecoms' },
  { key: 'isp',  label: 'ISP' },
  { key: 'gov',  label: 'Government' },
  { key: 'ent',  label: 'Enterprise' },
];

const SectionIntro = ({ active, setActive }) => (
  <section style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 24px 24px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.6fr', gap: 60, alignItems: 'end' }}>
      <h2 style={{ fontSize: 54, lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 600, margin: 0 }}>
        Never lose sight<br/>of your network.
      </h2>
      <p style={{ fontSize: 17, lineHeight: 1.55, color: '#3a3e42', maxWidth: 620, margin: 0 }}>
        An agnostic intelligence platform that integrates into any operator network without disrupting traffic. Whether analyzing protocols, detecting threats, mapping subscribers, or enforcing compliance — SechPoint keeps networks secure, visible, and operationally ready at scale.
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
