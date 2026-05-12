import Logo from '../Logo/Logo';

const cols = [
  ['Platform',   ['Tokenization vault','Key management','Threat intelligence','Access control','Reverse proxies','Detection API']],
  ['Developers', ['Documentation','API reference','Quickstarts','Status · 99.999%','GitHub','Changelog']],
  ['Use cases',  ['Financial services','Healthcare','SaaS & AI','Government','Insurance','Crypto']],
  ['Company',    ['About','Careers · 12 open','Customers','Newsroom','Contact','Partners']],
  ['Legal',      ['Trust report','Privacy policy','Terms of service','DPA','Subprocessors','Security']],
];

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--paper)' }}>
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '56px 24px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(5,1fr)', gap: 32 }}>
        <div>
          <Logo/>
          <p style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 14, maxWidth: 240, lineHeight: 1.5 }}>
            The data security platform that lets builders work with sensitive information — safely.
          </p>
          <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
            {['PCI · L1','SOC 2','HIPAA','ISO 27001'].map((b, i) => (
              <span key={i} className="mono" style={{
                fontSize: 10,
                padding: '4px 8px',
                border: '1px solid var(--line)',
                borderRadius: 99,
                color: 'var(--muted)',
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
              }}>{b}</span>
            ))}
          </div>
        </div>
        {cols.map(([title, items], i) => (
          <div key={i}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14 }}>{title}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 9 }}>
              {items.map((it, j) => (
                <li key={j} style={{ fontSize: 13, color: '#3a3e42' }}>
                  <a>{it}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 48,
        paddingTop: 20,
        borderTop: '1px solid var(--line)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap',
      }}>
        <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.04em' }}>
          © 2026 Sechpoint, Inc. · All systems operational
          <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 99, background: '#3ad07e', marginLeft: 8, verticalAlign: 'middle' }}/>
        </div>
        <div style={{ display: 'flex', gap: 14, fontSize: 12, color: 'var(--muted)' }}>
          <a>English (US)</a><a>·</a><a>Cookie settings</a><a>·</a><a>Manage privacy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
