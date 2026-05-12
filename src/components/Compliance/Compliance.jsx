import { Arrow, ShieldFill } from '../../icons';

const items = [
  { label: 'PCI DSS', sub: 'LEVEL 1',       bg: 'linear-gradient(145deg,#9cf7e9,#22e0c8)' },
  { label: 'SOC 2',   sub: 'TYPE II',        bg: 'linear-gradient(145deg,#d9efe6,#9cd9c4)' },
  { label: 'HIPAA',   sub: 'COMPLIANT',      bg: 'linear-gradient(145deg,#cfe7ff,#7fbcff)' },
  { label: 'ISO',     sub: '27001 · 27701',  bg: 'linear-gradient(145deg,#e0d8ff,#b8a8ff)' },
  { label: 'FedRAMP', sub: 'MODERATE',       bg: 'linear-gradient(145deg,#ffe2c8,#ffb98a)' },
  { label: 'GDPR',    sub: 'EU · UK',        bg: 'linear-gradient(145deg,#ffd9d9,#ffa0a0)' },
];

const Compliance = () => (
  <section style={{ maxWidth: 1240, margin: '0 auto', padding: '40px 24px 80px' }}>
    <div style={{
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 18,
      padding: '56px 48px',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--muted)', marginBottom: 14 }}>
          BUILT FOR DEVELOPERS · LOVED BY SECURITY TEAMS
        </div>
        <h3 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 600, margin: '0 0 14px' }}>
          Security and privacy<br/>are built into our DNA.
        </h3>
        <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 520, margin: '0 auto 22px' }}>
          Sechpoint is engineered with a security‑first mindset — every transaction, key, and access decision is signed, logged, and reproducible.
        </p>
        <button style={{
          padding: '10px 18px',
          border: '1px solid var(--ink)',
          borderRadius: 999,
          fontWeight: 600,
          fontSize: 13,
          display: 'inline-flex',
          gap: 6,
          alignItems: 'center',
        }}>Read our trust report <Arrow/></button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 14 }}>
        {items.map((it, i) => (
          <div key={i} style={{
            border: '1px solid var(--line)',
            borderRadius: 14,
            padding: '22px 18px',
            textAlign: 'center',
            transition: 'transform 200ms',
            cursor: 'pointer',
            background: '#fff',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{
              width: 54,
              height: 54,
              borderRadius: 14,
              margin: '0 auto 16px',
              background: it.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--ink)',
              boxShadow: 'inset 0 -2px 0 rgba(11,13,12,0.08)',
            }}><ShieldFill/></div>
            <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em' }}>{it.label}</div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', marginTop: 4 }}>
              {it.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Compliance;
