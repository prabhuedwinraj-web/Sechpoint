import { useState, useEffect } from 'react';
import { ShieldFill, Dot } from '../../icons';

const HeroArt = () => {
  const [on, setOn] = useState(false);
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setOn(true), 80);
    const t2 = setTimeout(() => setFloating(true), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const ease = 'cubic-bezier(0.16,1,0.3,1)';

  const vaultStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    opacity: on ? 1 : 0,
    transform: on ? 'translateY(0) scale(1)' : 'translateY(48px) scale(0.96)',
    transition: `opacity 1.1s ${ease}, transform 1.1s ${ease}`,
  };

  const cardStyle = {
    position: 'absolute',
    right: 30,
    top: 60,
    width: 360,
    height: 260,
    background: '#fff',
    border: '1px solid var(--line)',
    borderRadius: 14,
    boxShadow: '0 20px 40px -20px rgba(11,13,12,0.15)',
    opacity: on ? 1 : 0,
    transform: on ? 'translateY(0) rotate(-3deg)' : 'translateY(64px) rotate(-3deg)',
    transition: `opacity 1s ${ease} 0.15s, transform 1s ${ease} 0.15s`,
    animation: floating ? 'heroCardFloat 5s ease-in-out infinite' : undefined,
  };

  const chipStyle = {
    position: 'absolute',
    left: 30,
    bottom: 80,
    background: '#fff',
    border: '1px solid var(--line)',
    borderRadius: 10,
    padding: '10px 14px',
    boxShadow: '0 14px 30px -16px rgba(11,13,12,0.18)',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    opacity: on ? 1 : 0,
    transform: on ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.9s ${ease} 0.35s, transform 0.9s ${ease} 0.35s`,
    animation: floating ? 'heroChipFloat 4.5s ease-in-out 0.5s infinite' : undefined,
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: 480 }}>
      {/* connecting lines */}
      <svg viewBox="0 0 600 480" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="ll" x1="0" x2="1">
            <stop offset="0" stopColor="#22e0c8" stopOpacity="0"/>
            <stop offset="0.4" stopColor="#22e0c8" stopOpacity="0.8"/>
            <stop offset="1" stopColor="#22e0c8" stopOpacity="0"/>
          </linearGradient>
        </defs>
        {/* horizon/grid hints */}
        <g stroke="#d9d3c4" strokeWidth="1" fill="none">
          <path d="M50 120 L300 60 L550 120"/>
          <path d="M30 200 L300 130 L570 200"/>
          <path d="M20 290 L300 215 L580 290"/>
          <path d="M30 380 L300 305 L570 380"/>
        </g>
        {/* moving pulses */}
        <path d="M30 60 Q 300 0 570 60" stroke="url(#ll)" strokeWidth="1.4" fill="none">
          <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" repeatCount="indefinite"/>
        </path>
      </svg>

      {/* back card */}
      <div style={cardStyle}>
        <div style={{ padding: 14, borderBottom: '1px solid var(--line)', display: 'flex', gap: 6, alignItems: 'center' }}>
          <span className="mono" style={{ fontSize: 10, color: 'var(--muted-2)', letterSpacing: '0.08em' }}>NODE • US‑EAST‑1</span>
          <span style={{ flex: 1 }}/>
          <Dot style={{ color: '#3ad07e' }}/>
          <span className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>HEALTHY</span>
        </div>
        <div style={{ padding: '18px 18px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            ['tok_4a91…','✓'],['tok_2e07…','✓'],['tok_99fb…','✓'],
            ['tok_b14c…','✓'],['tok_77d3…','✓'],['tok_c0a2…','✓'],
          ].map(([t, v], i) => (
            <div key={i} className="mono" style={{
              fontSize: 11,
              padding: '8px 10px',
              background: 'var(--paper-2)',
              borderRadius: 6,
              display: 'flex',
              justifyContent: 'space-between',
              color: '#3a3e42',
            }}>
              <span>{t}</span><span style={{ color: 'var(--cyan-deep)' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* main vault block — isometric */}
      <svg viewBox="0 0 600 480" style={vaultStyle}>
        <defs>
          <linearGradient id="vTop" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#1d2024"/>
            <stop offset="1" stopColor="#0b0d0c"/>
          </linearGradient>
          <linearGradient id="vSide" x1="0" x2="1">
            <stop offset="0" stopColor="#080a0a"/>
            <stop offset="1" stopColor="#161a1d"/>
          </linearGradient>
        </defs>
        {/* shadow */}
        <ellipse cx="300" cy="380" rx="180" ry="20" fill="#000" opacity="0.08"/>
        {/* base shell */}
        <g transform="translate(200,180)">
          {/* sides */}
          <path d="M0 60 L100 120 L100 160 L0 100 Z" fill="url(#vSide)"/>
          <path d="M100 120 L200 60 L200 100 L100 160 Z" fill="#0b0d0c"/>
          {/* top */}
          <path d="M0 60 L100 0 L200 60 L100 120 Z" fill="url(#vTop)" stroke="#2a2e32" strokeWidth="1"/>
          {/* SechPoint logo mark */}
          <defs>
            <linearGradient id="heroLogoGrad" gradientUnits="userSpaceOnUse" x1="70" y1="90" x2="130" y2="30">
              <stop offset="0" stopColor="#078a77"/>
              <stop offset="0.42" stopColor="#0ac1a7"/>
              <stop offset="1" stopColor="#0dd9bc"/>
            </linearGradient>
          </defs>
          <g transform="translate(100,58) scale(0.041) translate(-735,-671)">
            <path fill="url(#heroLogoGrad)" d="M752.09 97.64c204.62,54.83 355.94,209.33 415.71,397.29 -34.4,-35.05 -73.8,-65.61 -117.4,-90.52 -225.47,-128.8 -511.44,-78.38 -678.94,119.32 -36.84,-8.14 -76.22,8.06 -95.91,42.54 -24.23,42.45 -9.5,96.5 32.95,120.75 42.44,24.25 96.49,9.5 120.73,-32.95 16.31,-28.54 14.98,-62.33 -0.56,-88.79 103.34,-119.27 260.75,-178.32 416.79,-157.33 655.54,149.65 226.83,1014.74 -403.19,845.93 -204.65,-54.83 -355.96,-209.33 -415.71,-397.28 220.5,224.67 590.4,214.25 796.32,-28.8 36.84,8.14 76.22,-8.07 95.92,-42.55 24.24,-42.44 9.49,-96.51 -32.94,-120.75 -42.45,-24.24 -96.51,-9.49 -120.75,32.95 -16.3,28.54 -14.98,62.34 0.55,88.79 -103.33,119.26 -260.73,178.3 -416.72,157.34 -655.59,-149.61 -226.92,-1014.76 403.14,-845.94z"/>
          </g>
          {/* corner studs */}
          {[[0,60],[100,0],[200,60],[100,120]].map((p, i) => (
            <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill="#0ac1a7" opacity="0.9"/>
          ))}
        </g>
        {/* radiating cyan pulse */}
        <g transform="translate(300,225)">
          <circle r="60" fill="none" stroke="#22e0c8" strokeWidth="1" opacity="0.5">
            <animate attributeName="r" from="50" to="120" dur="2.4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" from="0.4" to="0" dur="2.4s" repeatCount="indefinite"/>
          </circle>
          <circle r="60" fill="none" stroke="#22e0c8" strokeWidth="1" opacity="0.5">
            <animate attributeName="r" from="50" to="120" dur="2.4s" begin="1.2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" from="0.4" to="0" dur="2.4s" begin="1.2s" repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>

      {/* status chip */}
      <div style={chipStyle}>
        <ShieldFill style={{ color: 'var(--cyan-deep)' }}/>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600 }}>AES‑256 · FIPS 140‑3</div>
          <div className="mono" style={{ fontSize: 10.5, color: 'var(--muted)', marginTop: 1 }}>encrypted at rest · in transit · in use</div>
        </div>
      </div>
    </div>
  );
};

export default HeroArt;
