import { useState, useEffect } from 'react';

const ease = 'cubic-bezier(0.16,1,0.3,1)';

const NODES = [
  { id: 0, x: 300, y: 62,  r: 9,  type: 'backbone' },
  { id: 1, x: 150, y: 168, r: 7,  type: 'isp',  label: 'ISP‑A' },
  { id: 2, x: 300, y: 175, r: 7,  type: 'isp',  label: 'ISP‑B' },
  { id: 3, x: 450, y: 168, r: 7,  type: 'isp',  label: 'ISP‑C' },
  { id: 4, x: 65,  y: 290, r: 4.5,type: 'sub' },
  { id: 5, x: 152, y: 305, r: 4.5,type: 'sub' },
  { id: 6, x: 228, y: 290, r: 4.5,type: 'sub' },
  { id: 7, x: 300, y: 308, r: 4.5,type: 'sub' },
  { id: 8, x: 372, y: 290, r: 4.5,type: 'sub' },
  { id: 9, x: 450, y: 305, r: 4.5,type: 'sub' },
  { id: 10,x: 536, y: 290, r: 4.5,type: 'sub' },
];

const EDGES = [
  [0,1],[0,2],[0,3],
  [1,4],[1,5],[1,6],
  [2,6],[2,7],[2,8],
  [3,8],[3,9],[3,10],
];

const THREAT_SEQUENCE = [1, 7, 10]; // edge indices that cycle as threats

const EVENTS = [
  { ip: '203.0.113.42', type: 'C2 beacon',  status: 'BLOCKED', bad: true  },
  { ip: '10.0.4.17',    type: 'DNS tunnel', status: 'BLOCKED', bad: true  },
  { ip: '192.168.1.42', type: 'YouTube',    status: 'ALLOWED', bad: false },
  { ip: '172.16.8.9',   type: 'Zoom',       status: 'ALLOWED', bad: false },
  { ip: '198.51.100.7', type: 'Phishing',   status: 'BLOCKED', bad: true  },
  { ip: '10.0.2.55',    type: 'Slack',      status: 'ALLOWED', bad: false },
];

const HeroArtOption1 = () => {
  const [on, setOn]               = useState(false);
  const [threatEdge, setThreatEdge] = useState(null);
  const [blocked, setBlocked]     = useState(false);
  const [flowCount, setFlowCount] = useState(18402310);
  const [threatSeqIdx, setThreatSeqIdx] = useState(0);
  const [visibleEvents, setVisibleEvents] = useState(EVENTS.slice(0, 3));
  const [eventIdx, setEventIdx]   = useState(3);

  useEffect(() => {
    const t = setTimeout(() => setOn(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let seq = 0;
    const run = () => {
      const edge = THREAT_SEQUENCE[seq % THREAT_SEQUENCE.length];
      seq++;
      setThreatEdge(edge);
      setBlocked(false);
      setTimeout(() => setBlocked(true), 1100);
      setTimeout(() => { setThreatEdge(null); setBlocked(false); }, 3200);
    };
    run();
    const iv = setInterval(run, 5000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      setFlowCount(c => c + Math.floor(Math.random() * 120 + 40));
    }, 900);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      const next = EVENTS[eventIdx % EVENTS.length];
      setVisibleEvents(prev => [next, ...prev].slice(0, 4));
      setEventIdx(i => i + 1);
    }, 1800);
    return () => clearInterval(iv);
  }, [eventIdx]);

  const fmtFlows = n => (n / 1_000_000).toFixed(1) + 'M';

  const mainCard = {
    position: 'absolute', left: 0, top: 20, width: '90%',
    background: '#0b0d0c', border: '1px solid #1f2326', borderRadius: 16,
    boxShadow: '0 32px 60px -24px rgba(11,13,12,0.55)', overflow: 'hidden',
    opacity: on ? 1 : 0,
    transform: on ? 'translateY(0) rotate(-1.5deg)' : 'translateY(60px) rotate(-1.5deg)',
    transition: `opacity 1s ${ease}, transform 1s ${ease}`,
  };

  const eventsCard = {
    position: 'absolute', right: -10, bottom: 10, width: '62%',
    background: '#fff', border: '1px solid var(--line)', borderRadius: 14,
    boxShadow: '0 20px 40px -16px rgba(11,13,12,0.18)', overflow: 'hidden',
    opacity: on ? 1 : 0,
    transform: on ? 'translateY(0) rotate(2deg)' : 'translateY(60px) rotate(2deg)',
    transition: `opacity 0.9s ${ease} 0.2s, transform 0.9s ${ease} 0.2s`,
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: 480 }}>
      {/* Main dark network map card */}
      <div style={mainCard}>
        <div style={{ padding: '9px 16px', borderBottom: '1px solid #1f2326', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: '#3ad07e', display: 'inline-block' }}/>
          <span className="mono" style={{ fontSize: 10, color: '#22e0c8', letterSpacing: '0.1em' }}>LIVE NETWORK MAP</span>
          <span style={{ flex: 1 }}/>
          <span className="mono" style={{ fontSize: 10, color: '#8a8f95' }}>MONITORING · 10,241 NODES</span>
        </div>

        <svg viewBox="0 0 600 340" style={{ width: '100%', display: 'block' }}>
          {/* Dot grid background */}
          {Array.from({ length: 11 }).map((_, c) =>
            Array.from({ length: 7 }).map((_, r) => (
              <circle key={`${c}-${r}`} cx={c * 58 + 14} cy={r * 52 + 18} r="1" fill="#1a1e21"/>
            ))
          )}

          {/* Edges + traffic pulses */}
          {EDGES.map(([a, b], i) => {
            const na = NODES[a], nb = NODES[b];
            const isThreat = i === threatEdge;
            const color = isThreat ? (blocked ? '#ff4d4d' : '#ff8844') : '#1f2326';
            return (
              <g key={i}>
                <line x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                  stroke={color} strokeWidth={isThreat ? 1.5 : 1}/>
                {!isThreat && (
                  <circle r="2.5" fill="#22e0c8" opacity="0.75">
                    <animateMotion
                      path={`M${na.x},${na.y} L${nb.x},${nb.y}`}
                      dur={`${1.8 + (i % 5) * 0.45}s`}
                      begin={`${(i * 0.38) % 3}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                {isThreat && blocked && (() => {
                  const mx = (na.x + nb.x) / 2, my = (na.y + nb.y) / 2 - 14;
                  return (
                    <g transform={`translate(${mx},${my})`}>
                      <rect x="-22" y="-9" width="44" height="18" rx="4" fill="#ff4d4d"/>
                      <text textAnchor="middle" dominantBaseline="middle" y="0.5"
                        style={{ fontSize: 7.5, fill: '#fff', fontFamily: 'JetBrains Mono', fontWeight: 700, letterSpacing: '0.12em' }}>
                        BLOCKED
                      </text>
                    </g>
                  );
                })()}
              </g>
            );
          })}

          {/* Nodes */}
          {NODES.map(n => (
            <g key={n.id}>
              {n.type === 'backbone' && (
                <>
                  <circle cx={n.x} cy={n.y} r="22" fill="none" stroke="#22e0c8" strokeWidth="0.7" opacity="0.2">
                    <animate attributeName="r" from="12" to="26" dur="2.2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" from="0.25" to="0" dur="2.2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx={n.x} cy={n.y} r="22" fill="none" stroke="#22e0c8" strokeWidth="0.7" opacity="0.2">
                    <animate attributeName="r" from="12" to="26" dur="2.2s" begin="1.1s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" from="0.25" to="0" dur="2.2s" begin="1.1s" repeatCount="indefinite"/>
                  </circle>
                </>
              )}
              <circle cx={n.x} cy={n.y} r={n.r}
                fill={n.type === 'sub' ? '#15181a' : '#0b0d0c'}
                stroke={n.type === 'backbone' ? '#22e0c8' : n.type === 'isp' ? '#4a9eff' : '#2a2e32'}
                strokeWidth={n.type === 'backbone' ? 1.5 : 1}/>
              {n.label && (
                <text x={n.x} y={n.y - n.r - 5} textAnchor="middle"
                  style={{ fontSize: 7, fill: '#8a8f95', fontFamily: 'JetBrains Mono', letterSpacing: '0.06em' }}>
                  {n.label}
                </text>
              )}
            </g>
          ))}
        </svg>

        {/* Stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid #1f2326' }}>
          {[
            ['LIVE FLOWS', fmtFlows(flowCount), '#22e0c8'],
            ['THREATS',    '2,847',             '#ff8844'],
            ['UPTIME',     '99.99%',            '#3ad07e'],
          ].map(([lbl, val, color], i) => (
            <div key={i} style={{ padding: '10px 16px', borderRight: i < 2 ? '1px solid #1f2326' : 'none' }}>
              <div className="mono" style={{ fontSize: 9, color: '#8a8f95', letterSpacing: '0.08em' }}>{lbl}</div>
              <div className="mono" style={{ fontSize: 15, fontWeight: 700, color, marginTop: 2 }}>{val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating events card */}
      <div style={eventsCard}>
        <div style={{ padding: '9px 14px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span className="mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em' }}>RECENT EVENTS</span>
          <span style={{ flex: 1 }}/>
          <span style={{ width: 5, height: 5, borderRadius: 99, background: '#3ad07e', display: 'inline-block' }}/>
          <span className="mono" style={{ fontSize: 9, color: 'var(--muted)' }}>LIVE</span>
        </div>
        <div>
          {visibleEvents.map((ev, i) => (
            <div key={i} className="mono" style={{
              display: 'grid', gridTemplateColumns: '1.1fr 0.9fr 0.8fr',
              fontSize: 10.5, padding: '7px 14px',
              borderBottom: i < visibleEvents.length - 1 ? '1px solid #f0ecdf' : 'none',
              background: i === 0 ? 'rgba(34,224,200,0.04)' : 'transparent',
              transition: 'background 0.5s',
            }}>
              <span style={{ color: '#2a2e32' }}>{ev.ip}</span>
              <span style={{ color: 'var(--muted)' }}>{ev.type}</span>
              <span style={{ color: ev.bad ? '#ff4d4d' : 'var(--cyan-deep)', textAlign: 'right' }}>
                ● {ev.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroArtOption1;
