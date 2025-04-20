// src/app/layout.tsx
import type { Metadata } from 'next';
import '../styles/globals.css';
import '../styles/webflow-styles.css';

export const metadata: Metadata = {
  title: 'Navigo - Your Gateway to Authentic Travel Experiences',
  description: 'Experience India like a local with Navigo\'s verified travel companions. Get personalized guidance, cultural insights, and authentic experiences.',
  keywords: 'India travel, local guide, travel companion, authentic travel, India tourism, Delhi guide, avoid scams, cultural immersion, language barrier',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-wf-domain="www.trynavigo.com" data-wf-page="6670bf25956a84a23b306ed1" data-wf-site="6670bf25956a84a23b306e42">
      <head>
        <link href="/images/icons/favicon.ico" rel="icon" type="image/ico" />
        
        {/* Keep this css code to improve the font quality */}
        <style>
          {`
            * {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              -o-font-smoothing: antialiased;
            }
          `}
        </style>
        <meta name="google-site-verification" content="IzZ-J01qwLtjboG3lWTcXAHWm97brc7ULpfDIY3y36s" />
      </head>
      
      <body className="body">
        <div className="page-wrapper navbar-on-page">
          <div fs-scrolldisable-element="when-visible" className="landscape-warning">
            <img
              src="/images/rotate-128.svg"
              loading="lazy"
              data-w-id="1101f406-bff1-a4f7-f849-d55accc15e9e"
              alt="icon and text that says 'rotate your device'"
              className="rotate-icon"
            />
          </div>
          
          <div className="global-styles w-embed">
            <style>
              {`
                /* selection text color */
                ::selection: {
                  background: #fb5844;
                }

                /* checkboxes and other basic UI color */
                accent-color: #fb5844;

                /* Set color style to inherit */
                .inherit-color * {
                  color: inherit;
                }

                /* Focus state style for keyboard navigation for the focusable elements */
                *[tabindex]:focus-visible,
                input[type="file"]:focus-visible {
                  outline: 0.125rem solid #78142D;
                  outline-offset: 0.125rem;
                }
              `}
            </style>
          </div>
          
          {children}
        </div>
        
        {/* GSAP & ScrollTrigger */}
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" defer></script>
        
        {/* Set current year in footer */}
        <script defer>
          {`
            document.addEventListener('DOMContentLoaded', () => {
              const yearElements = document.querySelectorAll('.current-year');
              yearElements.forEach(el => {
                el.innerHTML = new Date().getFullYear();
              });
            });
          `}
        </script>
        
        {/* [Attributes by Finsweet] Disable scrolling */}
        <script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js"></script>
        
        {/* Initialize GSAP animations */}
        <script defer>
          {`
            document.addEventListener('DOMContentLoaded', () => {
              if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);
                
                // Handle heading animations 
                let headingElements = document.querySelectorAll('[heading-animation]');
                headingElements.forEach(el => {
                  ScrollTrigger.create({
                    trigger: el,
                    start: "top bottom",
                    onEnter() {
                      gsap.from(el, {
                        y: 100,
                        duration: 0.5,
                        ease: "power1.out"
                      });
                    }
                  });
                });
                
                // Handle card animations
                let cardContainers = document.querySelectorAll('[card-container]');
                cardContainers.forEach(container => {
                  let cards = container.querySelectorAll('[card-animation]');
                  gsap.from(cards, {
                    delay: 0,
                    duration: 1,
                    y: 100,
                    stagger: 0.2,
                    ease: "power1.Out",
                    scrollTrigger: {
                      trigger: container,
                      start: "top bottom",
                      end: "top center",
                      scrub: true
                    }
                  });
                });
              }
            });
          `}
        </script>
      </body>
    </html>
  );
}