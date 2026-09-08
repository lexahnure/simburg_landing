export default function StandardsBadges({ items = [], style = {} }) {
  if (!items || items.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, ...style }}>
      {items.map((item, idx) => (
        <span
          key={idx}
          className="mono-badge"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
