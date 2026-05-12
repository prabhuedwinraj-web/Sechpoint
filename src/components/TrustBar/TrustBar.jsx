const logos = ['NEXTEL CORP','SYNAPSE ISP','◇ Meridian','STRATOS · cyber','Orbital Labs','HELIX'];

const TrustBar = () => (
  <section style={{ background: 'var(--ink)', color: '#cdd2d6' }}>
    <div style={{
      maxWidth: 1240,
      margin: '0 auto',
      padding: '32px 24px',
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 40,
      alignItems: 'center',
    }}>
      <div style={{ fontSize: 13, color: '#8a8f95', lineHeight: 1.4 }}>
        Built for telecom, ISP,<br/>and sovereign cyber environments.
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', opacity: 0.85 }}>
        {logos.map((l, i) => (
          <div key={i} style={{
            fontFamily: i % 2 ? 'Space Grotesk' : 'JetBrains Mono',
            fontWeight: i % 2 ? 700 : 500,
            fontSize: i % 2 ? 17 : 14,
            letterSpacing: i % 2 ? '-0.01em' : '0.12em',
            textTransform: i % 2 ? 'none' : 'uppercase',
          }}>{l}</div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
