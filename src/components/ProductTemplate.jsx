import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import TeamCtaBanner from './TeamCtaBanner';

export default function ProductTemplate({
  icon,
  title,
  description,
  badgeStatus,
  features = [],
}) {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      {/* Blue Hero Banner */}
      <section
        className="product-hero-section"
        style={{
          background: '#173D7E',
          padding: '124px 24px 72px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="product-breadcrumbs"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13.5,
              fontWeight: 500,
              marginBottom: 28,
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/"
              className="product-breadcrumb-link"
              style={{
                color: 'rgba(255, 255, 255, 0.72)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              Home
            </Link>

            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>

            <span
              style={{
                color: '#FFFFFF',
                fontWeight: 600,
              }}
              aria-current="page"
            >
              {title}
            </span>
          </nav>
        </div>

        <div className="product-hero-wrap">
          {icon && (
            <img
              src={icon}
              alt={title}
              style={{
                height: 72,
                width: 'auto',
                display: 'block',
                flexShrink: 0,
                filter: 'brightness(0) invert(1)',
              }}
            />
          )}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
              <h1
                style={{
                  fontSize: 'clamp(30px, 3.6vw, 42px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: 0,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.15,
                }}
              >
                {title}
              </h1>
              {badgeStatus && (
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#92600A',
                    background: '#FBF0DC',
                    border: '1px solid #F0DBA8',
                    padding: '4px 11px',
                    borderRadius: 100,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {badgeStatus}
                </span>
              )}
            </div>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.85)',
                margin: 0,
                maxWidth: 680,
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Alternating Feature Rows */}
      <div className="product-features-container">
        {features.map((feat, idx) => {
          const isOdd = idx % 2 === 0;
          return (
            <section
              key={idx}
              className="product-feature-row"
              style={{
                background: isOdd ? '#FFFFFF' : '#F8FAFC',
                padding: '64px 24px',
                borderBottom: '1px solid rgba(0,0,0,0.03)',
              }}
            >
              <ScrollReveal>
                <div className="product-feature-grid">
                  {/* Left Col: Title */}
                  <div>
                    <h2
                      style={{
                        fontSize: 'clamp(22px, 2.2vw, 28px)',
                        fontWeight: 800,
                        color: '#0F172A',
                        lineHeight: 1.18,
                        letterSpacing: '-0.02em',
                        margin: 0,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {feat.title}
                    </h2>
                    {feat.badgeStatus && (
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: '#92600A',
                          background: '#FBF0DC',
                          border: '1px solid #F0DBA8',
                          padding: '3px 10px',
                          borderRadius: 100,
                          display: 'inline-block',
                          marginTop: 8,
                        }}
                      >
                        {feat.badgeStatus}
                      </span>
                    )}
                  </div>

                  {/* Middle Col: Description */}
                  <div>
                    <p
                      style={{
                        fontSize: 15.5,
                        lineHeight: 1.65,
                        color: '#334155',
                        margin: 0,
                      }}
                    >
                      {feat.description}
                    </p>
                  </div>

                  {/* Right Col: Badges */}
                  <div className="product-badges-col">
                    {feat.badges && feat.badges.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {feat.badges.map((b, bIdx) => (
                          <span key={bIdx} className="product-badge">
                            {b}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </section>
          );
        })}
      </div>

      {/* Team CTA Banner */}
      <TeamCtaBanner sectionPadding="80px 24px 100px" />
    </div>
  );
}
