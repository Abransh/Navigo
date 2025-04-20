// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [mobileMenuOpen]);

  return (
    <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar_component w-nav">
      <div className="navbar_container">
        <Link href="/" className="navbar_logo-link w-nav-brand w--current">
          <Image
            src="/images/logo/logo.png"
            alt="Navigo"
            width={230}
            height={46}
            className="navbar_logo-img"
          />
        </Link>
        <nav role="navigation" className="navbar_menu w-nav-menu">
          <div className="navbar_menu-link-wrapper">
            <div className="menu-link-item-wrapper">
              <Link href="/services" className="navbar_link w-nav-link">Services</Link>
              <img
                src="/images/squiggle.svg"
                loading="lazy"
                alt=""
                className="squiggle"
              />
            </div>
            <div className="menu-link-item-wrapper">
              <Link href="/services#pricing" className="navbar_link w-nav-link">Pricing</Link>
              <img
                src="/images/squiggle.svg"
                loading="lazy"
                alt=""
                className="squiggle"
              />
            </div>
            <div className="menu-link-item-wrapper">
              <Link href="#team" className="navbar_link w-nav-link">Team</Link>
              <img
                src="/images/squiggle.svg"
                loading="lazy"
                alt=""
                className="squiggle"
              />
            </div>
            <div className="menu-link-item-wrapper">
              <Link href="#faq" className="navbar_link w-nav-link">FAQ</Link>
              <img
                src="/images/squiggle.svg"
                loading="lazy"
                alt=""
                className="squiggle"
              />
            </div>
          </div>
        </nav>
        <div id="w-node-ef8790b4-0a72-76e1-9a3c-3051b2aedb74-3b306ed1" className="navbar_button-wrapper">
          <Link href="/" className="nav-menu-button is-small is-icon w-inline-block">
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
          <Link href="/" className="button is-small is-icon mobile-menu w-inline-block">
            <div className="button-text">get started</div>
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
          <div className="mobile-menu_button-wrapper">
            <div 
              id="menu-toggle" 
              fs-scrolldisable-element="toggle" 
              className="navbar_mobile-menu-button"
              onClick={toggleMenu}
            >
              <div 
                data-is-ix2-target="1" 
                className="lottie_menu" 
                data-animation-type="lottie"
                data-src="/animations/menu-animation.json"
                data-loop="0" 
                data-direction="1" 
                data-autoplay="0" 
                data-renderer="svg" 
                data-duration="0"
              >
                {/* Lottie animation will be loaded via JS */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu-wrapper ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="mobile-menu_list-wrapper">
          <Link href="/services" className="mobile-menu_text">Services</Link>
          <Link href="/services#pricing" className="mobile-menu_text">Pricing</Link>
          <Link href="#team" className="mobile-menu_text">Team</Link>
          <Link href="#faq" className="mobile-menu_text">FAQ</Link>
          <Link href="/" className="button-mobile is-small is-icon mobile-menu w-inline-block">
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
  );
};

export default Navbar;