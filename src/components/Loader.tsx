import React, { useEffect, useState } from 'react';
import logoGray from '../../public/logo_gray.png';
import logoWhite from '../../public/logo_white.png';

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [fill, setFill] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFill(true), 300); // inicia animación
    const timer2 = setTimeout(() => onFinish(), 2000);   // finaliza loader

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-[#0284c7] flex items-center justify-center h-screen animate-fade-in">
      <div className="relative w-[180px] h-[180px]">
        {/* Logo gris base */}
        <img
          src={logoGray}
          alt="Logo JR gris"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Logo blanco con animación de aparición + zoom */}
        <img
          src={logoWhite}
          alt="Logo JR blanco"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
            fill ? 'opacity-100 animate-zoom-in' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default Loader;
