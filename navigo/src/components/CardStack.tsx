// src/components/CardStack.tsx
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CardStack: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const cardFirstRef = useRef<HTMLDivElement>(null);
  const cardMidRef = useRef<HTMLDivElement>(null);
  const cardBotRef = useRef<HTMLDivElement>(null);
  const cardMidSecondRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create animations for card stack
    if (componentRef.current) {
      // Get all cards
      const cards = [
        cardFirstRef.current,
        cardMidRef.current,
        cardBotRef.current,
        cardMidSecondRef.current
      ];
      
      // Create a ScrollTrigger for each card to control its position
      cards.forEach((card, index) => {
        if (!card) return;
        
        ScrollTrigger.create({
          trigger: componentRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: card,
          pinSpacing: false,
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Calculate opacity based on scroll position
            const opacity = 1 - (self.progress * 2 - index * 0.5);
            gsap.to(card, { 
              opacity: Math.max(0, Math.min(1, opacity)), 
              duration: 0.1 
            });
          }
        });
      });
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="section_card-stack">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large top-only">
            <div className="container-medium">
              <div id="w-node-ef4c4c09-f234-7203-04ee-7d4f6cf9a1ac-3b306ed1"
                className="w-layout-layout card-stack_intro wf-layout-layout">
                <div className="w-layout-cell">
                  <h1 className="heading-style-h3 max-width-medium">Experience India Without Barriers</h1>
                </div>
                <div className="w-layout-cell">
                  <p className="text-size-large text-color-secondary">Our unique approach solves the most common challenges 
                    faced by foreign travelers.</p>
                </div>
                <div className="w-layout-cell cell">
                  <p className="eyebrow-text no-outline">Our tailored care includes:</p>
                </div>
                <div className="w-layout-cell"></div>
              </div>
              
              <div ref={componentRef} className="w-layout-grid card-stack_component">
                <div ref={cardFirstRef} className="card-stack_card card-first">
                  <img
                    src="/images/arrow-up.svg"
                    loading="eager"
                    alt="" 
                    className="arrow-up"
                  />
                  <div className="card-stack_card-content">
                    <div className="card-content-inner">
                      <div className="margin-bottom">
                        <div className="eyebrow-text grapefruit-outline">Safety</div>
                      </div>
                      <h2 className="heading-style-h3 text-color-petal">Enhanced Safety for All Travelers</h2>
                    </div>
                  </div>
                  <div className="card-stack_card-content">
                    <div className="card-content-inner">
                      <div className="margin-bottom">
                        <div className="eyebrow-text lime-outline">How</div>
                      </div>
                      <h3 className="heading-style-h4 text-color-petal">
                        Travel with confidence knowing you're accompanied by a verified local companion. We prioritize safety with thorough background checks, 
                        real-time location sharing, and specialized support for solo female travelers.
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div ref={cardMidRef} className="card-stack_card card-mid">
                  <img
                    src="/images/arrow-sand.svg"
                    loading="eager"
                    alt=""
                    className="arrow-up"
                  />
                  <div className="card-stack_card-content">
                    <div className="card-content-inner">
                      <div className="margin-bottom">
                        <div className="eyebrow-text grapefruit-outline text-color-black">SAVE MONEY</div>
                      </div>
                      <h3 className="heading-style-h3 text-color-merlot pretty">Protection from 
                        Tourist Inflation
                      </h3>
                    </div>
                  </div>
                  <div className="card-stack_card-content">
                    <div className="card-content-inner">
                      <div className="margin-bottom">
                        <div className="eyebrow-text text-color-black">HOW</div>
                      </div>
                      <h3 className="heading-style-h4 text-color-merlot pretty">
                        Stop paying tourist prices! Our local companions help you access fair, local rates for everything from street food to souvenirs. 
                        They'll negotiate on your behalf and steer you away from overpriced tourist traps.
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div ref={cardBotRef} className="card-stack_card card-bot">
                  <img 
                    loading="eager"
                    src="/images/arrow-razz.svg"
                    alt="" 
                    className="arrow-up"
                  />
                  <div className="card-stack_card-content">
                    <div className="card-content-inner">
                      <div className="margin-bottom">
                        <div className="eyebrow-text grapefruit-outline">TRANSLATION</div>
                      </div>
                      <h3 className="heading-style-h3 text-color-petal">Seamless Communication</h3>
                    </div>
                  </div>
                  <div className="card-stack_card-content">
                    <div className="card-content-inner">
                      <div className="margin-bottom">
                        <div className="eyebrow-text">how</div>
                      </div>
                      <h3 className="heading-style-h4 text-color-petal">
                        Break through language barriers with our bilingual companions. 
                        They'll help translate conversations, read menus, negotiate with vendors, and ensure
                        you're always understood wherever you go.
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div ref={cardMidSecondRef} className="card-stack_card card-mid">
                  <img
                    src="/images/arrow-sand.svg"
                    loading="eager"
                    alt=""
                    className="arrow-up"
                  />
                  <div className="card-stack_card-content">
                    <div className="card-content-inner">
                      <div className="margin-bottom">
                        <div className="eyebrow-text grapefruit-outline text-color-black">WHY DID YOU VISIT INDIA AT FIRST PLACE?</div>
                      </div>
                      <h3 className="heading-style-h3 text-color-merlot pretty">
                        Authentic Cultural Experiences
                      </h3>
                    </div>
                  </div>
                  <div className="card-stack_card-content">
                    <div className="card-content-inner">
                      <div className="margin-bottom">
                        <div className="eyebrow-text text-color-black">HOW</div>
                      </div>
                      <h3 className="heading-style-h4 text-color-merlot pretty">
                        Discover hidden gems and experience destinations like a true local. Our companions share insider knowledge, family traditions, 
                        and off-the-beaten-path locations that you'd never find in guidebooks.
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="card-stack_card card-final"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardStack;