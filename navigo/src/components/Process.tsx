// src/components/Process.tsx
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Make sure to register ScrollTrigger with GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Process: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const squiggleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create a timeline for the squiggle animation
    const squiggleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: squiggleRef.current,
        start: 'top bottom',
        end: 'top center',
        scrub: true
      }
    });

    // Animate the heading and description
    gsap.from([headingRef.current, descriptionRef.current], {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top bottom',
        end: 'top center',
        scrub: false
      }
    });

    // Animate the cards with staggered entrance
    const cards = cardsContainerRef.current?.querySelectorAll('[card-animation]');
    if (cards) {
      gsap.from(cards, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top bottom',
          end: 'top center',
          scrub: true
        }
      });
    }

    // Cleanup function
    return () => {
      // Clean up ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="section_process">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large bottom-only">
            <div className="process_component">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div
                    ref={squiggleRef}
                    className="lottie_squiggle"
                    data-w-id="1fafd53b-dfea-8d89-97a9-72d08cf0bc03"
                    data-animation-type="lottie"
                    data-src="/animations/squiggle-animation.json"
                    data-loop="1"
                    data-direction="1"
                    data-autoplay="1"
                    data-is-ix2-target="0"
                    data-renderer="svg"
                    data-default-duration="1.6666666666666667"
                    data-duration="0"
                  ></div>
                  <div className="max-width-large">
                    <div className="margin-bottom">
                      <h2 
                        ref={headingRef}
                        heading-animation=""
                        className="heading-style-h3"
                      >
                        Creating a new travel experience for explorers everywhere
                      </h2>
                    </div>
                    <p 
                      ref={descriptionRef}
                      heading-animation=""
                    >
                      Welcome to a revolutionary approach to travel in India, where local companions help you navigate unfamiliar territories with confidence.
                      Experience authentic cultural immersion, avoid tourist traps, and create meaningful connections with the places you visit. 
                      Your personalized travel experience awaits.
                    </p>
                  </div>
                </div>
              </div>
              <div 
                ref={cardsContainerRef}
                card-container="" 
                className="w-layout-grid process_list"
              >
                <div 
                  card-animation="" 
                  id="w-node-_257019a0-7735-456a-cee3-306cd210e53d-3b306ed1"
                  className="process_item"
                >
                  <div className="number-circle">
                    <div className="number-text">01</div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h3 className="heading-style-h4 card-layout">Tell us about your travel plans</h3>
                  </div>
                  <p className="text_regular-normal">Share your trip dates, interests, and what you're looking to experience in India.</p>
                  <img
                    src="/images/edge-work.svg"
                    loading="lazy"
                    alt=""
                    className="edge-work"
                  />
                </div>
                
                <div 
                  card-animation="" 
                  id="w-node-f2f50e28-1ab1-8242-6406-1eccdf5a1d5d-3b306ed1" 
                  className="process_item"
                >
                  <div className="number-circle">
                    <div className="number-text">02</div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h3 className="heading-style-h4 card-layout">Get matched with local companions</h3>
                  </div>
                  <p className="text_regular-normal">
                    We'll connect you with verified local students who share your interests and speak your language.
                  </p>
                  <img
                    src="/images/edge-work.svg"
                    loading="lazy"
                    alt=""
                    className="edge-work"
                  />
                </div>
                
                <div 
                  card-animation="" 
                  id="w-node-fb3c2d6c-0750-a406-b412-e6992beab27a-3b306ed1" 
                  className="process_item"
                >
                  <div className="number-circle">
                    <div className="number-text">03</div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h3 className="heading-style-h4 card-layout">Explore India with confidence</h3>
                  </div>
                  <p className="text_regular-normal">
                    Meet your local companion and explore authentic experiences without language barriers or tourist scams.
                  </p>
                  <img
                    src="/images/edge-work.svg"
                    loading="lazy"
                    alt=""
                    className="edge-work"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;