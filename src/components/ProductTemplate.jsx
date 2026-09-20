import React from 'react';
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
      {/* 1. Light Hero Banner */}
      <section className="product-hero-light">
        <div className="product-hero-container">
          {icon && (
            <div className="product-hero-icon-box">
              <img
                src={icon}
                alt={title}
                className="product-hero-icon-img"
              />
            </div>
          )}
          <div className="product-hero-content">
            <div className="product-hero-header-row">
              <h1 className="product-hero-title">{title}</h1>
              {badgeStatus && (
                <span className="product-hero-badge">{badgeStatus}</span>
              )}
            </div>
            <p className="product-hero-desc">{description}</p>
          </div>
        </div>
      </section>

      {/* 2. Alternating 2-Column Feature Sections */}
      <div className="product-features-wrap">
        {features.map((feat, idx) => {
          const isOdd = idx % 2 === 0;
          const bgClass = isOdd ? 'bg-white' : 'bg-gray';
          // Odd sections (0, 2): Text on Left, Visual on Right
          // Even sections (1, 3): Visual on Left, Text on Right (is-reversed)
          const isReversed = !isOdd;

          return (
            <section key={idx} className={`product-feature-section ${bgClass}`}>
              <ScrollReveal>
                <div className={`product-feature-grid-2col ${isReversed ? 'is-reversed' : ''}`}>
                  {isReversed ? (
                    <>
                      <div className="product-visual-col">
                        {feat.visual ? (
                          feat.visual
                        ) : (
                          <div className={`product-visual-card ${isOdd ? 'card-gray' : 'card-white'}`}>
                            {feat.badges && feat.badges.length > 0 && (
                              <div className="product-badges-row" style={{ marginBottom: 16 }}>
                                {feat.badges.map((b, bIdx) => (
                                  <span key={bIdx} className="product-badge-pill">{b}</span>
                                ))}
                              </div>
                            )}
                            <p style={{ margin: 0, fontSize: 14, color: '#64748B', lineHeight: 1.6 }}>
                              {feat.description}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="product-feature-text-col">
                        <div>
                          <h2 className="product-feature-title">
                            {feat.title.replace(/\n/g, ' ')}
                          </h2>
                          {feat.badgeStatus && (
                            <span className="product-hero-badge" style={{ marginTop: 8, display: 'inline-block' }}>
                              {feat.badgeStatus}
                            </span>
                          )}
                        </div>
                        <p className="product-feature-desc">{feat.description}</p>
                        {feat.badges && feat.badges.length > 0 && (
                          <div className="product-badges-row">
                            {feat.badges.map((b, bIdx) => (
                              <span key={bIdx} className="product-badge-pill">
                                {b}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="product-feature-text-col">
                        <div>
                          <h2 className="product-feature-title">
                            {feat.title.replace(/\n/g, ' ')}
                          </h2>
                          {feat.badgeStatus && (
                            <span className="product-hero-badge" style={{ marginTop: 8, display: 'inline-block' }}>
                              {feat.badgeStatus}
                            </span>
                          )}
                        </div>
                        <p className="product-feature-desc">{feat.description}</p>
                        {feat.badges && feat.badges.length > 0 && (
                          <div className="product-badges-row">
                            {feat.badges.map((b, bIdx) => (
                              <span key={bIdx} className="product-badge-pill">
                                {b}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="product-visual-col">
                        {feat.visual ? (
                          feat.visual
                        ) : (
                          <div className={`product-visual-card ${isOdd ? 'card-gray' : 'card-white'}`}>
                            {feat.badges && feat.badges.length > 0 && (
                              <div className="product-badges-row" style={{ marginBottom: 16 }}>
                                {feat.badges.map((b, bIdx) => (
                                  <span key={bIdx} className="product-badge-pill">{b}</span>
                                ))}
                              </div>
                            )}
                            <p style={{ margin: 0, fontSize: 14, color: '#64748B', lineHeight: 1.6 }}>
                              {feat.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </section>
          );
        })}
      </div>

      {/* 3. Team / Product CTA Banner */}
      <TeamCtaBanner sectionPadding="80px 24px 100px" />
    </div>
  );
}
