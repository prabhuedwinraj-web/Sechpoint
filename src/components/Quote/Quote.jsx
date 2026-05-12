import { Shield } from '../../icons';

const Quote = () => (
  <section style={{ background: 'var(--ink)', color: '#e7eaee' }}>
    <div style={{ maxWidth: 980, margin: '0 auto', padding: '120px 24px', textAlign: 'center' }}>
      <Shield style={{ color: 'var(--cyan)' }}/>
      <p style={{
        fontSize: 30,
        lineHeight: 1.35,
        letterSpacing: '-0.02em',
        fontWeight: 500,
        margin: '24px 0 36px',
        textWrap: 'pretty',
      }}>
        "We replaced three vendors and a homegrown HSM with Sechpoint in nine weeks. Our auditors finished a quarter early — and our engineers stopped <span style={{ color: 'var(--cyan)' }}>building crypto on the side of their desk</span>."
      </p>
      <div style={{ fontWeight: 600, fontSize: 15 }}>Lena Okafor</div>
      <div className="mono" style={{ fontSize: 12, color: '#8a8f95', marginTop: 4, letterSpacing: '0.04em' }}>
        VP SECURITY ENGINEERING · NORTHWIND
      </div>
    </div>
  </section>
);

export default Quote;
