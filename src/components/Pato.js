import React, { useState } from 'react';
import { useEffect } from 'react';

export function Pato() {
  const [position, setPosition] = useState({ top: 0, left: 0, rotate: 0 });

  useEffect(() => {
    
  });

  const handleClick = () => {
    // Atualiza a posição
    setPosition({
        top: position.top + 10,
        left: position.left + 10,
        rotate: position.rotate + "330deg",
      });
  };

  return (
    <div 
      onClick={handleClick} 
      className='pato'
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        rotate: position.rotate,
      }}
    />
  );
}
