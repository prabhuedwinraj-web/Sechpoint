const AnnouncementBar = () => (
  <div style={{
    background: 'var(--cyan-2)',
    borderBottom: '1px solid #b9e8de',
    color: 'var(--ink)',
    fontSize: 13,
    letterSpacing: '-0.005em',
    padding: '9px 16px',
    textAlign: 'center',
  }}>
    <span className="mono" style={{
      background: 'var(--ink)',
      color: 'var(--cyan)',
      padding: '2px 7px',
      borderRadius: 4,
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.08em',
      marginRight: 10,
    }}>NEW</span>
    SechPoint DPI Engine 4.0 ships real&#8209;time encrypted traffic intelligence in beta.{' '}
    <a style={{ borderBottom: '1px solid currentColor', paddingBottom: 1 }}>Read the changelog →</a>
  </div>
);

export default AnnouncementBar;
