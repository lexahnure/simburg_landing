import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function TeamCtaBanner({
  title = 'Get in Touch',
  description = 'Contact our engineering team to review detailed technical documentation, interface definitions, or evaluation terms.',
  buttonText = 'Contact Us',
  buttonLink = '/contact',
  sectionPadding = '80px 24px 100px',
}) {
  return (
    <section className="product-cta-section" style={{ padding: sectionPadding, background: '#FFFFFF' }}>
      <ScrollReveal>
        <div className="product-cta-card">
          <h2 className="product-cta-title">{title}</h2>
          <p className="product-cta-desc">{description}</p>
          <Link to={buttonLink} className="product-cta-btn">
            {buttonText}
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
