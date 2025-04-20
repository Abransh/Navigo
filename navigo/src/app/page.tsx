// src/app/page.tsx
'use client';

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Process from '../components/Process';
import MarqueeButton from '../components/MarqueeButton';
import CardStack from '../components/CardStack';
// Import these components when they're completed
// import Benefits from '../components/Benefits';
// import Testimonials from '../components/Testimonials';
// import Faq from '../components/Faq';
// import Cta from '../components/Cta';
// import Footer from '../components/Footer';

// Dynamically import Lottie player to avoid SSR issues
import dynamic from 'next/dynamic';
const LottiePlayer = dynamic(() => import('@lottiefiles/react-lottie-player'), {
  ssr: false
});

export default function Home() {
  // Initialize lottie animations when the component mounts
  useEffect(() => {
    // Find all lottie animations and initialize them
    const initLottieAnimations = () => {
      const lottieElements = document.querySelectorAll('[data-animation-type="lottie"]');
      
      lottieElements.forEach((element: Element) => {
        const src = element.getAttribute('data-src');
        const loop = element.getAttribute('data-loop') === '1';
        const autoplay = element.getAttribute('data-autoplay') === '1';
        
        if (src && typeof window !== 'undefined') {
          // Create a new lottie player element
          const player = document.createElement('lottie-player');
          player.setAttribute('src', src);
          player.setAttribute('background', 'transparent');
          player.setAttribute('speed', '1');
          
          if (loop) {
            player.setAttribute('loop', '');
          }
          
          if (autoplay) {
            player.setAttribute('autoplay', '');
          }
          
          // Clear and append
          element.innerHTML = '';
          element.appendChild(player);
        }
      });
    };
    
    // Load Lottie script if it's not already loaded
    if (typeof window !== 'undefined') {
      if (!document.querySelector('script[src*="lottie-player"]')) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
        script.async = true;
        script.onload = initLottieAnimations;
        document.body.appendChild(script);
      } else {
        initLottieAnimations();
      }
    }
  }, []);

  return (
    <main className="main-wrapper max-width-full">
      <Navbar />
      <Hero />
      <Process />
      <MarqueeButton href="/" />
      <CardStack />
      {/* Uncomment these when components are ready
      <Benefits />
      <MarqueeButton href="/" />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
      */}
    </main>
  );
}