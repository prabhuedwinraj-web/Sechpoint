import { useState, useEffect } from 'react';

const ease = 'cubic-bezier(0.16,1,0.3,1)';

const RAW_ROWS = [
  '45 00 00 3c a3 f9 40 00  40 06 00 00 c0 a8 01 2a',
  '17 00 01 bb 9e f8 20 41  00 00 00 00 a0 02 72 10',
  '7b 4e f8 20 3a 77 cb 00  16 03 01 00 f1 01 00 00',
  '9d 1a 3c 77 00 00 00 00  04 b5 00 00 00 00 10 00',
  '2f 8b 91 e4 c0 a8 03 51  00 50 d1 38 7e 91 b2 c0',
  '4c 2a 08 12 00 35 d1 42  18 41 01 20 00 01 00 00',
  'a3 f9 2c 01 cb 00 16 03  01 00 e1 a8 34 5f 00 0d',
  '7b 4e f8 20 3a 77 cb 00  16 03 01 00 f1 01 00 00',
  '45 00 00 54 00 00 40 00  40 01 e4 b7 0a 00 04 11',
  '9d 1a 3c 77 00 00 00 00  04 b5 00 00 00 00 10 00',
  '2f 8b 91 e4 c0 a8 03 51  00 50 d1 38 7e 91 b2 c0',
  '4c 2a 08 12 00 35 d1 42  18 41 01 20 00 01 00 00',
];

const CLASSIFIED = [
  { ip: '192.168.1.42', app: 'YouTube',   proto: 'QUIC',   risk: 'low',  color: '#22e0c8' },
  { ip: '10.0.4.17',   app: 'Zoom',      proto: 'DTLS',   risk: 'low',  color: '#22e0c8' },
  { ip: '203.0.113.42',app: 'C2 beacon', proto: 'TCP',    risk: 'high', color: '#ff4d4d' },
  { ip: '172.16.8.9',  app: 'Netflix',   proto: 'HTTPS',  risk: 'low',  color: '#22e0c8' },
  { ip: '198.51.100.7',app: 'DNS tunnel',proto: 'UDP',    risk: 'high', color: '#ff4d4d' },
  { ip: '10.0.2.55',   app: 'Slack',     proto: 'WSS',    risk: 'low',  color: '#22e0c8' },
];

const HeroArtOption2 = () => {
  const [on, setOn]               = useState(false);
  const [visibleRows, setVisibleRows] = useState([]);
  const [rowIdx, setRowIdx]       = useState(0);
  const [scrollY, setScrollY]     = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setOn(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Classified rows appear one by one
  useEffect(() => {
    const iv = setInterval(() => {
      setVisibleRows(prev => {
        const next = [...prev, CLASSIFIED[rowIdx % CLASSIFIED.length]];
        return next.slice(-5);
      });
      setRowIdx(i => i + 1);
    }, 900);
    return () => clearInterval(iv);
  }, [rowIdx]);

  // Raw bytes scroll
  useEffect(() => {
    let frame;
    let y = 0;
    const tick = () => {
      y += 0.35;
      if (y >= RAW_ROWS.length / 2 * 22) y = 0;
      setScrollY(y);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const rawCard = {
    position: 'absolute', left: 0, top: 20, width: '86%',
    background: '#0b0d0c', border: '1px solid #1f2326', borderRadius: 16,
    boxShadow: '0 32px 60px -24px rgba(11,13,12,0.55)', overflow: 'hidden',
    opacity: on ? 1 : 0,
    transform: on ? 'translateY(0) rotate(-1.5deg)' : 'translateY(60px) rotate(-1.5deg)',
    transition: `opacity 1s ${ease}, transform 1s ${ease}`,
  };

  const classifiedCard = {
    position: 'absolute', right: -10, bottom: 10, width: '72%',
    background: '#fff', border: '1px solid var(--line)', borderRadius: 14,
    boxShadow: '0 20px 40px -16px rgba(11,13,12,0.18)', overflow: 'hidden',
    opacity: on ? 1 : 0,
    transform: on ? 'translateY(0) rotate(2deg)' : 'translateY(60px) rotate(2deg)',
    transition: `opacity 0.9s ${ease} 0.2s, transform 0.9s ${ease} 0.2s`,
  };

  const doubledRows = [...RAW_ROWS, ...RAW_ROWS];

  return (
    <div style={{ position: 'relative', width: '100%', height: 480 }}>

      {/* Raw bytes card */}
      <div style={rawCard}>
        <div style={{ padding: '9px 16px', borderBottom: '1px solid #1f2326', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="mono" style={{ fontSize: 10, color: '#8a8f95', letterSpacing: '0.1em' }}>ENCRYPTED TRAFFIC</span>
          <span style={{ flex: 1 }}/>
          <span className="mono" style={{ fontSize: 10, color: '#8a8f95' }}>RAW · LAYER 3–7</span>
        </div>

        {/* Scrolling hex bytes */}
        <div style={{ height: 260, overflow: 'hidden', position: 'relative' }}>
          {/* Top fade */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 32,
            background: 'linear-gradient(to bottom, #0b0d0c, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }}/>
          {/* Bottom fade */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 32,
            background: 'linear-gradient(to top, #0b0d0c, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }}/>
          <div style={{ transform: `translateY(-${scrollY}px)`, padding: '8px 0' }}>
            {doubledRows.map((row, i) => (
              <div key={i} className="mono" style={{
                fontSize: 10.5, padding: '4px 18px',
                color: i % 7 === 2 ? '#ff4d4d' : i % 5 === 1 ? '#22e0c826' : '#2a2e32',
                whiteSpace: 'nowrap', lineHeight: 1.4,
              }}>
                <span style={{ color: '#8a8f95', marginRight: 12 }}>
                  {String(i % RAW_ROWS.length * 16).padStart(4, '0')}
                </span>
                {row}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom label */}
        <div style={{
          padding: '10px 16px', borderTop: '1px solid #1f2326',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span className="mono" style={{ fontSize: 10, color: '#8a8f95' }}>18,402,310 flows captured</span>
          <span style={{ flex: 1 }}/>
          <span style={{
            background: '#22e0c8', color: '#0b0d0c',
            padding: '3px 10px', borderRadius: 99,
            fontSize: 10, fontWeight: 700, fontFamily: 'JetBrains Mono',
            letterSpacing: '0.08em',
          }}>DPI ENGINE →</span>
        </div>
      </div>

      {/* Classified output card */}
      <div style={classifiedCard}>
        <div style={{ padding: '9px 14px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 5, height: 5, borderRadius: 99, background: '#3ad07e', display: 'inline-block' }}/>
          <span className="mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em' }}>CLASSIFIED FLOWS</span>
        </div>

        {/* Table header */}
        <div className="mono" style={{
          display: 'grid', gridTemplateColumns: '1.1fr 0.8fr 0.6fr 0.6fr',
          fontSize: 9, color: 'var(--muted)', padding: '6px 14px',
          borderBottom: '1px solid var(--line)', letterSpacing: '0.07em',
        }}>
          <span>SOURCE IP</span><span>APP</span><span>PROTO</span><span style={{ textAlign: 'right' }}>RISK</span>
        </div>

        {/* Rows appear live */}
        <div style={{ minHeight: 170 }}>
          {visibleRows.map((row, i) => (
            <div key={i} className="mono" style={{
              display: 'grid', gridTemplateColumns: '1.1fr 0.8fr 0.6fr 0.6fr',
              fontSize: 11, padding: '7px 14px',
              borderBottom: '1px solid #f0ecdf',
              background: i === visibleRows.length - 1 ? 'rgba(34,224,200,0.05)' : 'transparent',
              opacity: Math.max(0.4, 1 - (visibleRows.length - 1 - i) * 0.18),
              transition: 'opacity 0.4s',
            }}>
              <span style={{ color: '#2a2e32' }}>{row.ip}</span>
              <span style={{ color: '#3a3e42' }}>{row.app}</span>
              <span style={{ color: 'var(--muted)' }}>{row.proto}</span>
              <span style={{ color: row.color, textAlign: 'right' }}>● {row.risk}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroArtOption2;
