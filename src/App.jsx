import React, { useState, useEffect, createContext } from 'react';
import BackgroundGlitch from './components/BackgroundGlitch';
import HeroSection from './components/HeroSection';
import StickyLeftNav from './components/StickyLeftNav';
import ScrollableRightContent from './components/ScrollableRightContent';
import FullScreenFooter from './components/Footer';

export const ThemeContext = createContext({ theme: 'dark', setTheme: () => {} });

const scrollToSection = (sectionId) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    const elementPosition = sectionElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('about-content'); 

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#030712'; 
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f3f4f6'; 
    }

    const styleId = 'custom-scrollbar-style';
    let scrollbarStyle = document.getElementById(styleId);
    if (!scrollbarStyle) {
        scrollbarStyle = document.createElement('style');
        scrollbarStyle.id = styleId;
        document.head.appendChild(scrollbarStyle);
    }
    scrollbarStyle.textContent = `
        html::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        html::-webkit-scrollbar-track {
            background: ${theme === 'dark' ? 'rgba(31, 41, 55, 0.5)' : 'rgba(229, 231, 235, 0.5)'};
        }
        html::-webkit-scrollbar-thumb {
            background: ${theme === 'dark' ? '#4b5563' : '#9ca3af'};
            border-radius: 4px;
        }
        html::-webkit-scrollbar-thumb:hover {
            background: ${theme === 'dark' ? '#6b7280' : '#6b7280'};
        }
        .custom-scrollbar::-webkit-scrollbar { /* For StickyLeftNav if its content overflows */
             width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
         .custom-scrollbar::-webkit-scrollbar-thumb {
            background: ${theme === 'dark' ? 'rgba(107, 114, 128, 0.5)' : 'rgba(156, 163, 175, 0.5)'};
            border-radius: 3px;
        }
    `;
  }, [theme]);

  const handleScroll = () => {
    const sections = ['about-content', 'projects-content', 'skills-content']; 
    let currentSectionId = activeSection; 
    const scrollThreshold = window.innerHeight * 0.4;

    for (const id of sections) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= scrollThreshold) {
          currentSectionId = id;
        }
      }
    }
    if (window.pageYOffset < window.innerHeight * 0.5) { 
        setActiveSection('about-content'); 
    } else {
        setActiveSection(currentSectionId);
    }
  };
  
  useEffect(() => {
    let debounceTimeout;
    const debouncedScrollHandler = () => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(handleScroll, 50); 
    };

    window.addEventListener('scroll', debouncedScrollHandler);
    handleScroll();

    return () => {
        window.removeEventListener('scroll', debouncedScrollHandler);
        clearTimeout(debounceTimeout);
    };
  }, []);


  const handleLeftPaneNavClick = (sectionId) => {
    scrollToSection(sectionId); 
  };
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`font-inter min-h-screen transition-colors duration-300 ease-in-out
                      ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
        <BackgroundGlitch />
        
        <HeroSection />
        <section id="main-content-area" className="relative w-full">
          <div className="lg:flex max-w-screen-2xl mx-auto"> 
            <StickyLeftNav onNavLinkClick={handleLeftPaneNavClick} activeSection={activeSection} />
            <ScrollableRightContent /> 
          </div>
        </section>
        
        <FullScreenFooter />
      </div>
    </ThemeContext.Provider>
  );
}
