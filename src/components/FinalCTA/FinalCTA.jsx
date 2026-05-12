import { Arrow } from '../../icons';

const shimmerData = [
  [0.3,3.2],[1.8,4.1],[0.7,2.9],[3.1,3.7],[1.2,4.5],
  [2.4,3.0],[0.9,5.2],[3.8,2.7],[1.5,4.3],[0.1,3.5],
  [2.9,4.8],[1.1,3.1],[4.2,2.6],[0.6,5.0],[2.0,3.8],
  [3.5,4.2],[1.7,3.4],[0.4,5.5],
];

const FinalCTA = () => (
  <section style={{ maxWidth: 1240, margin: '0 auto 56px', padding: '0 24px' }}>
    <div style={{
      background: 'var(--ink)',
      borderRadius: 18,
      padding: '56px 48px',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `
        radial-gradient(800px 240px at 90% 110%, rgba(34,224,200,0.18), transparent 60%),
        linear-gradient(180deg,#0b0d0c,#0b0d0c)
      `,
    }}>
      <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <g stroke="#22e0c8" strokeWidth="1" fill="none" opacity="0.18">
          {Array.from({ length: 18 }).map((_, i) => (
            <path key={i} d={`M ${-100 + i * 80} 320 L ${800 + i * 30} -40`}/>
          ))}
        </g>
        <g fill="none">
          {shimmerData.map(([delay, dur], i) => (
            <path key={i} d={`M ${-100 + i * 80} 320 L ${800 + i * 30} -40`}
              stroke="#9ef5e8" strokeWidth="2" strokeDasharray="50 1200">
              <animate attributeName="stroke-dashoffset" from="1250" to="-50"
                dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite"/>
            </path>
          ))}
        </g>
      </svg>
      <div style={{ position: 'relative' }}>
        <div className="mono" style={{ fontSize: 12, color: 'var(--cyan)', letterSpacing: '0.18em', marginBottom: 18 }}>
          ◇ READY WHEN YOU ARE
        </div>
        <h3 style={{ fontSize: 56, lineHeight: 1.0, letterSpacing: '-0.03em', fontWeight: 600, margin: '0 0 16px', maxWidth: 780 }}>
          More of the data <span style={{ color: '#5b6065' }}>you want.</span><br/>
          Less of the risk <span style={{ color: 'var(--cyan)' }}>you don't.</span>
        </h3>
        <p style={{ fontSize: 16, color: '#a8acb0', maxWidth: 520, margin: '0 0 28px' }}>
          Start a free 14‑day vault or talk to our solutions team about your specific compliance program.
        </p>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{
            background: 'var(--cyan)',
            color: 'var(--ink)',
            padding: '13px 22px',
            borderRadius: 999,
            fontWeight: 600,
            fontSize: 15,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}>Talk to sales <Arrow/></button>
          <button style={{
            background: 'transparent',
            color: '#fff',
            padding: '13px 22px',
            borderRadius: 999,
            fontWeight: 600,
            fontSize: 15,
            border: '1px solid #2a2e32',
          }}>Start free</button>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
