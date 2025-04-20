// src/components/Hero.tsx
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonGroupRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    // Animate elements in sequence
    const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });
    
    timeline
      .fromTo(
        headingRef.current,
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(
        paragraphRef.current,
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        buttonGroupRef.current,
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        heroImageRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        '-=0.7'
      );
  }, []);

  return (
    <header className="section_hero">
      <img
        src="/images/testimage1.webp"
        loading="eager"
        sizes="(max-width: 816px) 100vw, 816px"
        srcSet="/images/Texture-Subtle-web-p-500.webp 500w, /images/Texture-Subtle-web.webp 816w"
        alt=""
        className="img-texture top-right"
      />
      <img
        src="/images/arrow-coil.svg"
        loading="eager"
        style={{ opacity: 0 }}
        data-w-id="af76a889-3f2a-3dd7-422e-b6c1db57d1d7"
        alt=""
        className="hero-coil-arrow"
      />
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large hero-padding">
            <div className="w-layout-grid hero_component">
              <div id="w-node-c3f8dc7d-1c7b-3144-0f0a-ae93ccef740f-3b306ed1" className="hero_content">
                <div className="margin-bottom margin-small">
                  <h1 
                    ref={headingRef}
                    data-w-id="c3f8dc7d-1c7b-3144-0f0a-ae93ccef7411"
                    style={{ 
                      opacity: 0,
                      transform: 'translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }}
                    className="heading-style-h1 clamp"
                  >
                    Your Gateway to Authentic Travel Experiences
                  </h1>
                </div>
                <p 
                  ref={paragraphRef}
                  data-w-id="c3f8dc7d-1c7b-3144-0f0a-ae93ccef7413"
                  style={{
                    opacity: 0,
                    transform: 'translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                  }}
                  className="text-size-large"
                >
                  Navigo connects foreign travelers with local companions, ensuring safety, authentic experiences, and cultural immersion.
                  Travel like a local, not a tourist.
                </p>
                <div className="margin-top margin-medium">
                  <div 
                    ref={buttonGroupRef}
                    data-w-id="c3f8dc7d-1c7b-3144-0f0a-ae93ccef7416"
                    style={{
                      opacity: 0,
                      transform: 'translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }}
                    className="button-group"
                  >
                    <Link 
                      data-w-id="b2b74399-8713-d889-189c-7d7330ee926d"
                      href="/"
                      className="button is-small is-icon w-inline-block"
                    >
                      <div className="button-text">Get Started</div>
                      <div className="icon-embed-xsmall w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.558 7.1487H0V8.8513H11.558C11.4606 8.93993 11.3619 9.03241 11.2623 9.12877C9.95239 10.3955 8.4607 12.355 7.79714 15.0937L9.42724 15.5C9.99358 13.1626 11.2699 11.4738 12.4206 10.3611C12.9951 9.80552 13.5328 9.39906 13.9235 9.13346C14.1185 9.00088 14.2759 8.90404 14.3817 8.84185C14.4346 8.81077 14.4744 8.7884 14.4995 8.7746C14.5121 8.7677 14.5209 8.76295 14.5259 8.76032L14.5292 8.75855L14.5296 8.75832L14.5301 8.75807L14.5302 8.75801L14.5303 8.75799L16 8L14.5303 7.24201L14.5302 7.24198L14.5301 7.24192L14.5296 7.24167L14.5292 7.24144L14.5259 7.23967C14.5209 7.23705 14.5121 7.2323 14.4995 7.2254C14.4744 7.2116 14.4346 7.18923 14.3817 7.15815C14.2759 7.09596 14.1185 6.99912 13.9235 6.86654C13.5328 6.60094 12.9951 6.19448 12.4206 5.63895C11.2699 4.52623 9.99358 2.83739 9.42724 0.5L7.79714 0.90634C8.4607 3.64497 9.95239 5.60454 11.2623 6.87123C11.3619 6.96759 11.4606 7.06007 11.558 7.1487Z"
                            fill="#FF8255"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hero_image-wrapper">
                <img
                  ref={heroImageRef}
                  className="hero-image-combined"
                  src="/images/hero-image-combination.webp"
                  width="820"
                  alt="two photos overlapping with rough edges, the top photo features a woman sitting in a hammock smiling with sunglasses on. the bottom photo features two happy women hugging and smiling for a selfie photo."
                  style={{
                    opacity: 0,
                    transform: 'translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                  }}
                  sizes="(max-width: 991px) 100vw, 820px"
                  data-w-id="24a30a65-1f93-6246-4c56-395d0a4f1961"
                  loading="eager"
                  srcSet="/images/hero-image-combination-p-500.webp 500w, /images/hero-image-combination-p-800.webp 800w, /images/hero-image-combination-p-1080.webp 1080w, /images/hero-image-combination.webp 1539w"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;