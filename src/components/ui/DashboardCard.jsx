import Logo from '../Logo/Logo';

const DashboardCard = ({ rotate = 0, style = {} }) => (
  <div style={{
    background: '#fff',
    border: '1px solid var(--line)',
    borderRadius: 14,
    width: '100%',
    transform: `rotate(${rotate}deg)`,
    boxShadow: '0 24px 50px -22px rgba(11,13,12,0.25)',
    overflow: 'hidden',
    ...style,
  }}>
    <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 8 }}>
      <Logo size={16}/>
      <span style={{ flex: 1 }}/>
      <span className="mono" style={{ fontSize: 10, color: 'var(--muted-2)' }}>DPI · prod</span>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr' }}>
      <div style={{ padding: 14, borderRight: '1px solid var(--line)', background: 'var(--paper-2)' }}>
        {['Overview','Traffic','Threats','Subscribers','Policies','Audit log','Alerts'].map((m, i) => (
          <div key={i} style={{
            padding: '7px 10px',
            borderRadius: 6,
            fontSize: 12,
            marginBottom: 2,
            background: i === 2 ? 'var(--ink)' : 'transparent',
            color: i === 2 ? '#fff' : '#3a3e42',
          }}>{m}</div>
        ))}
      </div>
      <div style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
          {[['Active flows','18,402,310'],['Threats blocked','+2,847'],['Subscribers mapped','1.2M']].map(([l, v], i) => (
            <div key={i} style={{
              padding: '8px 10px',
              border: '1px solid var(--line)',
              borderRadius: 8,
              flex: 1,
            }}>
              <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.04em' }}>{l}</div>
              <div className="mono" style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="mono" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 0.8fr 0.8fr', fontSize: 10, color: 'var(--muted)', padding: '6px 0', borderBottom: '1px solid var(--line)' }}>
            <span>FLOW</span><span>PROTOCOL</span><span>RISK</span><span>STATUS</span>
          </div>
          {[
            ['192.168.1.42','HTTPS/TLS1.3','low','ok'],
            ['10.0.4.17','DNS','medium','ok'],
            ['172.16.8.9','QUIC','low','ok'],
            ['192.168.3.81','HTTP/2','high','blocked'],
            ['10.0.2.55','SMTP','low','ok'],
          ].map((r, i) => (
            <div key={i} className="mono" style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr 0.8fr 0.8fr',
              fontSize: 11,
              padding: '7px 0',
              borderBottom: '1px solid #f0ecdf',
              color: '#2a2e32',
            }}>
              <span>{r[0]}</span>
              <span style={{ color: 'var(--muted)' }}>{r[1]}</span>
              <span style={{ color: 'var(--muted)' }}>{r[2]}</span>
              <span style={{ color: r[3] === 'ok' ? 'var(--cyan-deep)' : r[3] === 'blocked' ? 'var(--warn)' : 'var(--muted)' }}>● {r[3]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DashboardCard;
