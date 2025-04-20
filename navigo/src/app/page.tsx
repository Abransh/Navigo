// src/app/page.tsx
'use client';

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
// import Process from '../components/Process';
// import MarqueeButton from '../components/MarqueeButton';
// import CardStack from '../components/CardStack';

export default function Home() {
  // Initialize lottie animations when the component mounts
  useEffect(() => {
    // Dynamically import Lottie (to avoid SSR issues)
    const loadLottie = async () => {
      try {
       // const lottieWeb = (await import('@lottiefiles/lottie-player')).default;
        
        // Register lottie-player custom element
        // if (!customElements.get('lottie-player')) {
        //   customElements.define('lottie-player', lottieWeb);
        // }
        
        // Find all lottie animations and initialize them
        const lottieElements = document.querySelectorAll('[data-animation-type="lottie"]');
        lottieElements.forEach(element => {
          const src = element.getAttribute('data-src');
          if (src) {
            const player = document.createElement('lottie-player');
            player.setAttribute('src', src);
            player.setAttribute('background', 'transparent');
            player.setAttribute('speed', '1');
            
            // Set other attributes
            if (element.getAttribute('data-loop') === '1') {
              player.setAttribute('loop', 'true');
            }
            if (element.getAttribute('data-autoplay') === '1') {
              player.setAttribute('autoplay', 'true');
            }
            
            // Clear and append
            element.innerHTML = '';
            element.appendChild(player);
          }
        });
      } catch (error) {
        console.error('Failed to load Lottie animations:', error);
      }
    };
    
    loadLottie();
  }, []);

  return (
    <main className="main-wrapper max-width-full">
      <Navbar />
      <Hero />
      {/* <Process /> */}
      {/* <MarqueeButton href="/" />
      <CardStack /> */}
      
      {/* More components will be added here as they are created */}
    </main>
  );
}