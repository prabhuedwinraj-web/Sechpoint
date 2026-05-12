import { Shield } from '../../icons';

const Quote = () => (
  <section style={{ background: 'var(--ink)', color: '#e7eaee' }}>
    <div style={{ maxWidth: 980, margin: '0 auto', padding: '120px 24px 200px', textAlign: 'center' }}>
      <Shield style={{ color: 'var(--cyan)' }}/>
      <p style={{
        fontSize: 30,
        lineHeight: 1.35,
        letterSpacing: '-0.02em',
        fontWeight: 500,
        margin: '24px 0 36px',
        textWrap: 'pretty',
      }}>
        "SechPoint gave us the visibility and control we needed across high-volume traffic, while strengthening our ability to detect threats, manage policy, and <span style={{ color: 'var(--cyan)' }}>improve subscriber-level intelligence at scale</span>."
      </p>
      <div style={{ fontWeight: 600, fontSize: 15 }}>Khalid Al-Rashid</div>
      <div className="mono" style={{ fontSize: 12, color: '#8a8f95', marginTop: 4, letterSpacing: '0.04em' }}>
        CHIEF NETWORK OFFICER · NEXTEL CORP
      </div>
    </div>
  </section>
);

export default Quote;
