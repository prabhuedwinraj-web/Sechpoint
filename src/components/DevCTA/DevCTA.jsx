import { Arrow, Cube, Scan, Globe, Key, Pulse, Lock, Bolt } from '../../icons';

const tiles = [
  ['AIG Appliances',      'inline · out-of-path'],
  ['DPI Engine',          'classify · analyze · export'],
  ['Command Center',      'monitor · orchestrate · alert'],
  ['Subscriber Analytics','imsi · imei · msisdn'],
  ['Threat Intelligence', 'ip · url · behavioral'],
  ['Policy Control',      'rate-limit · shape · enforce'],
  ['Compliance Filtering','filter · audit · report'],
];

const tileIcons = [<Cube/>, <Scan/>, <Globe/>, <Key/>, <Pulse/>, <Lock/>, <Bolt/>];

const DevCTA = () => (
  <section style={{ maxWidth: 1240, margin: '-140px auto 40px', padding: '0 24px', position: 'relative', zIndex: 1 }}>
    <div style={{
      background: 'var(--ink)',
      borderRadius: 18,
      padding: '48px 48px 36px',
      color: '#e7eaee',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'center' }}>
        <div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.18em', marginBottom: 14 }}>
            ◇ UNIFIED PLATFORM
          </div>
          <h3 style={{ fontSize: 42, lineHeight: 1.05, letterSpacing: '-0.02em', fontWeight: 600, margin: '0 0 16px' }}>
            Implementing network<br/>intelligence at scale
          </h3>
          <p style={{ fontSize: 15, color: '#a8acb0', maxWidth: 420, margin: '0 0 22px' }}>
            Explore how AIG hardware, Command Center, DPI analytics, and Aleria-driven intelligence work together across telecom and sovereign cyber environments.
          </p>
          <button style={{
            background: 'var(--cyan)',
            color: 'var(--ink)',
            padding: '12px 20px',
            borderRadius: 999,
            fontWeight: 600,
            fontSize: 14,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}>Explore platform <Arrow/></button>
        </div>
        <div style={{ position: 'relative', height: 276 }}>
          <svg viewBox="0 0 360 240" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <g transform="translate(180,120)">
              {Array.from({ length: 12 }).map((_, i) => {
                const a = (i / 12) * Math.PI * 2;
                const x = Math.cos(a) * 90, y = Math.sin(a) * 60;
                return <circle key={i} cx={x} cy={y} r="6" fill="#1f2326" stroke="#2a2e32"/>;
              })}
              <path d="M -36 0 L 0 -22 L 36 0 L 0 22 Z" fill="#22e0c8" opacity="0.18"/>
              <path d="M -22 0 L 0 -14 L 22 0 L 0 14 Z" fill="#22e0c8"/>
              <path d="M -10 0 L 0 -6 L 10 0 L 0 6 Z" fill="#0b0d0c"/>
              {Array.from({ length: 12 }).map((_, i) => {
                const a = (i / 12) * Math.PI * 2;
                return <line key={'l' + i} x1={Math.cos(a) * 22} y1={Math.sin(a) * 14} x2={Math.cos(a) * 84} y2={Math.sin(a) * 56} stroke="#2a2e32" strokeWidth="1"/>;
              })}
            </g>
          </svg>
        </div>
      </div>
      <div style={{
        marginTop: 32,
        paddingTop: 28,
        borderTop: '1px solid #1f2326',
        display: 'grid',
        gridTemplateColumns: 'repeat(7,1fr)',
        gap: 12,
      }}>
        {tiles.map((t, i) => (
          <div key={i} style={{
            background: '#15181a',
            border: '1px solid #1f2326',
            borderRadius: 10,
            padding: '14px 12px',
            transition: 'transform 200ms, border-color 200ms',
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = '#2a2e32'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1f2326'; }}>
            <div style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              marginBottom: 10,
              background: 'linear-gradient(135deg,#22e0c8,#0d8c7c)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0b0d0c',
            }}>
              {tileIcons[i]}
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 600 }}>{t[0]}</div>
            <div className="mono" style={{ fontSize: 10, color: '#8a8f95', marginTop: 3 }}>{t[1]}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DevCTA;
