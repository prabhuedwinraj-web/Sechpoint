const variantStyles = {
  primary: {
    background: 'var(--cyan)',
    color: 'var(--ink)',
    border: 'none',
    borderRadius: 999,
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink)',
    border: '1px solid var(--ink)',
    borderRadius: 999,
  },
  'outline-dark': {
    background: 'transparent',
    color: '#fff',
    border: '1px solid #2a2e32',
    borderRadius: 999,
  },
};

const sizeStyles = {
  md: { padding: '13px 22px', fontSize: 15, fontWeight: 600 },
  sm: { padding: '10px 18px', fontSize: 13.5, fontWeight: 600 },
};

const Button = ({ variant = 'primary', size = 'md', children, icon, onClick, style = {} }) => (
  <button
    onClick={onClick}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      border: 0,
      fontFamily: 'inherit',
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...style,
    }}
  >
    {children}
    {icon}
  </button>
);

export default Button;
