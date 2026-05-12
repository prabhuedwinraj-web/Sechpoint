import { Check, Arrow } from '../../icons';

const FeatureRow = ({ kicker, title, bullets, reverse, art, cta = 'Read the docs' }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 60,
    alignItems: 'center',
    padding: '56px 0',
    borderBottom: '1px solid var(--line)',
  }}>
    <div style={{ order: reverse ? 2 : 1 }}>
      <div className="mono" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 11,
        color: 'var(--cyan-deep)',
        letterSpacing: '0.12em',
        marginBottom: 14,
      }}>
        <span style={{ width: 14, height: 1.5, background: 'var(--cyan-deep)', display: 'inline-block' }}/>
        {kicker}
      </div>
      <h3 style={{ fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 600, margin: '0 0 22px', maxWidth: 480 }}>
        {title}
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 26px', display: 'grid', gap: 10 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: '#2a2e32' }}>
            <span style={{
              flexShrink: 0,
              marginTop: 3,
              width: 18,
              height: 18,
              borderRadius: 99,
              background: 'var(--cyan)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--ink)',
            }}><Check/></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <button style={{
        padding: '10px 18px',
        border: '1px solid var(--ink)',
        borderRadius: 999,
        fontWeight: 600,
        fontSize: 13.5,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
      }}>{cta} <Arrow/></button>
    </div>
    <div style={{ order: reverse ? 1 : 2, position: 'relative', height: 360 }}>
      {art}
    </div>
  </div>
);

export default FeatureRow;
