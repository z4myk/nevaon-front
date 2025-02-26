import React, { useEffect, useState } from 'react';

import nevaonnegro from '../../assets/nevaonnegro.png'
export const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 105) {
          clearInterval(interval);
          onFinish(); // Llama a la función para ocultar el loader
          return prev;
        }
        return prev + 1; // Incrementa el progreso
      });
    }, 30); // Ajusta la velocidad de carga

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <div className="logo-container">
        <img
          src={nevaonnegro} // Reemplaza con la ruta de tu logo
          alt="Logo"
          className="w-50"
        />
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
