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
      <span className="mono" style={{ fontSize: 10, color: 'var(--muted-2)' }}>VAULT · prod</span>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr' }}>
      <div style={{ padding: 14, borderRight: '1px solid var(--line)', background: 'var(--paper-2)' }}>
        {['Overview','Records','Tokens','Policies','Access','Audit log','Keys'].map((m, i) => (
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
          {[['Active tokens','12,448,901'],['New today','+18,204'],['Decrypt calls','842k']].map(([l, v], i) => (
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
            <span>TOKEN</span><span>TYPE</span><span>OWNER</span><span>STATUS</span>
          </div>
          {[
            ['tok_4a91·92c8','card_pan','svc.checkout','ok'],
            ['tok_2e07·11ab','ssn','svc.kyc','ok'],
            ['tok_99fb·d804','iban','svc.payouts','ok'],
            ['tok_b14c·77e9','phi','svc.records','ok'],
            ['tok_77d3·0fab','api_key','svc.gateway','rotated'],
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
              <span style={{ color: r[3] === 'ok' ? 'var(--cyan-deep)' : 'var(--warn)' }}>● {r[3]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DashboardCard;
