import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function TeamCtaBanner({
  title = 'Talk to the team',
  description = 'Have a specific technical question or RFP requirement? Get in touch directly.',
  buttonText = 'Go to Contact & Request Specs',
  buttonLink = '/contact',
  sectionPadding = '80px 24px 120px',
}) {
  return (
    <section className="cta-banner-section" style={{ padding: sectionPadding, background: '#FFFFFF' }}>
      <ScrollReveal>
        <div
          className="cta-banner-container"
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            background: '#EFF6FF',
            borderRadius: 40,
            position: 'relative',
            overflow: 'hidden',
            minHeight: 300,
          }}
        >
          <div
            className="cta-banner-grid"
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'stretch',
              width: '100%',
              minHeight: 320,
            }}
          >
            {/* Left Column: Text (50%) */}
            <div
              className="cta-banner-content"
              style={{
                padding: '48px 56px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                alignItems: 'flex-start',
                justifyContent: 'center',
                zIndex: 2,
              }}
            >
              <h2
                className="cta-banner-title"
                style={{
                  fontSize: 'clamp(28px, 3.2vw, 38px)',
                  fontWeight: 800,
                  color: '#0F172A',
                  margin: 0,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                }}
              >
                {title}
              </h2>
              <p
                className="cta-banner-desc"
                style={{
                  fontSize: 'clamp(15px, 1.5vw, 17px)',
                  lineHeight: 1.6,
                  color: '#334155',
                  margin: 0,
                }}
              >
                {description}
              </p>
              <Link
                to={buttonLink}
                className="cta-banner-btn"
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#003E83',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: 16,
                  fontWeight: 700,
                  padding: '18px 36px',
                  borderRadius: 100,
                  minWidth: 260,
                  transition: 'background 0.2s ease, transform 0.15s ease',
                }}
              >
                {buttonText}
              </Link>
            </div>

            {/* Right Column: Honeycomb & Circle Graphic (50%) */}
            <div
              className="cta-banner-graphic-col"
              style={{
                position: 'relative',
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 320,
              }}
            >
              <img
                src="/uploads/cta_honeycomb.png"
                alt="Simburg Technology"
                className="cta-banner-img"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: 'auto',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'block',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
