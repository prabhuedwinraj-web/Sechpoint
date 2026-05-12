export const C = {
  k: ({ children }) => <span style={{ color: '#ff79c6' }}>{children}</span>,
  s: ({ children }) => <span style={{ color: '#22e0c8' }}>{children}</span>,
  c: ({ children }) => <span style={{ color: '#5b6065', fontStyle: 'italic' }}>{children}</span>,
  f: ({ children }) => <span style={{ color: '#9cf7e9' }}>{children}</span>,
  n: ({ children }) => <span style={{ color: '#f3b13a' }}>{children}</span>,
};

const CodePanel = ({ lang = 'ts', title = 'cipherline.ts', children, rotate = 0, style = {} }) => (
  <div style={{
    background: '#0b0d0c',
    color: '#e7eaee',
    borderRadius: 14,
    overflow: 'hidden',
    border: '1px solid #1e2225',
    width: '100%',
    transform: `rotate(${rotate}deg)`,
    boxShadow: '0 24px 50px -22px rgba(11,13,12,0.45)',
    ...style,
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 14px',
      borderBottom: '1px solid #1f2326',
      background: '#0d1011',
    }}>
      <span style={{ width: 10, height: 10, borderRadius: 99, background: '#ff5f56' }}/>
      <span style={{ width: 10, height: 10, borderRadius: 99, background: '#ffbd2e' }}/>
      <span style={{ width: 10, height: 10, borderRadius: 99, background: '#27c93f' }}/>
      <span className="mono" style={{ fontSize: 11, color: '#8a8f95', marginLeft: 10 }}>{title}</span>
      <span style={{ flex: 1 }}/>
      <span className="mono" style={{ fontSize: 10, color: '#5b6065' }}>{lang.toUpperCase()}</span>
    </div>
    <pre className="mono" style={{ margin: 0, padding: '16px 16px 18px', fontSize: 12.5, lineHeight: 1.65 }}>{children}</pre>
  </div>
);

export default CodePanel;
