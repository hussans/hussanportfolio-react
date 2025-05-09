import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const ContentSection = ({ id, title, children, icon }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <section 
      id={id} 
      className="py-10 lg:py-16 min-h-[60vh]" 
    >
      <div className={`p-6 md:p-8 rounded-xl shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl
                      ${theme === 'dark' 
                        ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/70'
                        : 'bg-white/80 backdrop-blur-md border border-gray-300/70'
                      } `}>
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 lg:mb-10 flex items-center
                        ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
          {icon && React.cloneElement(icon, { size: 32, className: "mr-4" })}
          {title}
        </h2>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
