import { useState } from 'react';
import { Arrow, Check } from '../../icons';
import HeroArt from './HeroArt';
import HeroArtOption1 from './HeroArtOption1';
import HeroArtOption2 from './HeroArtOption2';

const ARTS = [
  { key: 'current', label: 'Current' },
  { key: 'opt1',    label: 'Option 1' },
  { key: 'opt2',    label: 'Option 2' },
];

const Hero = () => {
  const [artKey, setArtKey] = useState('opt1');

  return (
    <section style={{
      maxWidth: 1240,
      margin: '0 auto',
      padding: '60px 24px 100px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 48,
      alignItems: 'center',
    }}>
      <div>
        <div className="mono" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '4px 10px',
          border: '1px solid var(--line)',
          borderRadius: 999,
          fontSize: 11,
          letterSpacing: '0.08em',
          color: 'var(--muted)',
          marginBottom: 24,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--cyan-deep)', display: 'inline-block' }}/>
          NETWORK INTELLIGENCE · v4.0
        </div>
        <h1 style={{
          fontSize: 76,
          lineHeight: 0.95,
          letterSpacing: '-0.035em',
          fontWeight: 600,
          margin: '0 0 22px',
        }}>
          Built to secure and optimize national&#8209;scale{' '}
          <em style={{ fontStyle: 'normal', position: 'relative', display: 'inline-block' }}>
            networks.
            <svg style={{ position: 'absolute', left: -4, right: -4, bottom: -6, width: 'calc(100% + 8px)' }} viewBox="0 0 400 14" preserveAspectRatio="none">
              <path d="M2 9 Q 100 2 200 8 T 398 6" stroke="#0ac1a7" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.55"/>
            </svg>
          </em>
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.5, color: '#3a3e42', maxWidth: 520, margin: '0 0 28px' }}>
          SechPoint helps telecoms, ISPs, and national cyber teams gain real-time visibility, control encrypted traffic, strengthen cyber defense, and improve subscriber experience through DPI-powered intelligence.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', gap: 18, flexWrap: 'wrap' }}>
          {['High-speed AIML-powered DPI','Cybersecurity and IP/URL intelligence','Subscriber analytics and traffic orchestration'].map((t, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
              <span style={{
                width: 18, height: 18, borderRadius: 99,
                background: 'var(--cyan)', display: 'inline-flex',
                alignItems: 'center', justifyContent: 'center', color: 'var(--ink)',
              }}><Check/></span>
              {t}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{
            background: 'var(--cyan)', color: 'var(--ink)',
            padding: '14px 22px', borderRadius: 999,
            fontWeight: 600, fontSize: 15,
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>Request a demo <Arrow/></button>
          <button style={{
            background: 'transparent', color: 'var(--ink)',
            padding: '14px 22px', borderRadius: 999,
            fontWeight: 600, fontSize: 15, border: '1px solid var(--ink)',
          }}>Explore platform</button>
        </div>
      </div>

      <div>
        {/* Art switcher — for review only */}
        <div style={{
          display: 'flex', gap: 4, marginBottom: 16,
          justifyContent: 'flex-end',
        }}>
          {ARTS.map(a => (
            <button key={a.key} onClick={() => setArtKey(a.key)} style={{
              padding: '5px 12px', borderRadius: 99, fontSize: 12, fontWeight: 500,
              background: artKey === a.key ? 'var(--ink)' : 'transparent',
              color: artKey === a.key ? '#fff' : 'var(--muted)',
              border: '1px solid',
              borderColor: artKey === a.key ? 'var(--ink)' : 'var(--line)',
              transition: 'all 180ms',
            }}>{a.label}</button>
          ))}
        </div>

        {artKey === 'current' && <HeroArt/>}
        {artKey === 'opt1'    && <HeroArtOption1/>}
        {artKey === 'opt2'    && <HeroArtOption2/>}
      </div>
    </section>
  );
};

export default Hero;
