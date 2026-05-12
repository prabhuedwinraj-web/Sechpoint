import { useState } from 'react';
import Logo from '../Logo/Logo';
import { Caret } from '../../icons';

const NAV = [
  { label: 'Platform', items: [
    { t: 'Tokenization Vault', d: 'Replace sensitive data with format‑preserving tokens' },
    { t: 'Key Management', d: 'Hardware‑backed KMS with bring‑your‑own‑key' },
    { t: 'Threat Intelligence', d: 'Real‑time anomaly + leak detection' },
    { t: 'Access Control', d: 'Policy‑as‑code, just‑in‑time grants' },
  ]},
  { label: 'Use Cases', items: [
    { t: 'Financial Services', d: 'PCI scope reduction & cardholder data' },
    { t: 'Healthcare', d: 'PHI protection, HIPAA workloads' },
    { t: 'SaaS & AI', d: 'Protect customer data in model pipelines' },
    { t: 'Government', d: 'FedRAMP‑ready isolation' },
  ]},
  { label: 'Developers', items: [
    { t: 'Documentation', d: 'SDKs, API reference, tutorials' },
    { t: 'Quickstarts', d: 'Tokenize your first record in 4 minutes' },
    { t: 'Status', d: '99.999% uptime across 14 regions' },
    { t: 'Open Source', d: 'Sechpoint CLI, sechpoint.js, helm charts' },
  ]},
  { label: 'Pricing' },
  { label: 'Company' },
];

const Nav = () => {
  const [open, setOpen] = useState(null);
  return (
    <nav
      style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '18px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
      }}
      onMouseLeave={() => setOpen(null)}
    >
      <Logo />
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {NAV.map((n, i) => (
          <div key={i} style={{ position: 'relative' }} onMouseEnter={() => setOpen(n.items ? i : null)}>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              padding: '8px 12px',
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 500,
              color: open === i ? 'var(--ink)' : '#2a2e32',
              background: open === i ? 'rgba(11,13,12,0.04)' : 'transparent',
            }}>
              {n.label}
              {n.items && <Caret style={{ opacity: 0.5, marginTop: 1 }}/>}
            </button>
            {n.items && open === i && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                marginTop: 6,
                zIndex: 50,
                background: '#fff',
                border: '1px solid var(--line)',
                borderRadius: 12,
                padding: 8,
                width: 340,
                boxShadow: '0 30px 60px -20px rgba(11,13,12,0.18), 0 8px 20px -10px rgba(11,13,12,0.1)',
              }}>
                {n.items.map((it, j) => (
                  <a key={j}
                    style={{ display: 'block', padding: '10px 12px', borderRadius: 8, transition: 'background 120ms' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--paper-2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{it.t}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 2 }}>{it.d}</div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{ padding: '8px 12px', fontSize: 14, fontWeight: 500 }}>Sign in</button>
        <button style={{
          padding: '9px 16px',
          fontSize: 14,
          fontWeight: 600,
          background: 'var(--ink)',
          color: '#fff',
          borderRadius: 999,
        }}>Get a demo</button>
      </div>
    </nav>
  );
};

export default Nav;
