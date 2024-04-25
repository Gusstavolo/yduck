import React, { useState } from 'react';
import { useEffect } from 'react';



export function Pato({nome, mensagem}) {
  
    

    const [position, setPosition] = useState({ top: 0, left: 0, rotate: 0 });
    const [nextPosition, setNextPosition] = useState(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (!nextPosition) {
          // Se não há próxima posição, gera uma nova posição
          const randomTop = Math.random() * 100; // 0vh a 100vh
          const randomLeft = Math.random() * 100; // 0vw a 100vw
  
          setNextPosition({ top: randomTop, left: randomLeft });
        } else {
          // Se há uma próxima posição, move o pato em direção a ela
          const dx = nextPosition.left - position.left;
          const dy = nextPosition.top - position.top;
          const rotate = (Math.atan2(dy, dx) * (180 / Math.PI) - 90 + 360) % 360;
  
          const step = 0.1; // Define o tamanho do passo
          const newTop = position.top + step * dy;
          const newLeft = position.left + step * dx;
  
          setPosition({ top: newTop, left: newLeft, rotate });
  
          // Se o pato chegou à próxima posição, limpa a próxima posição
          if (Math.abs(newTop - nextPosition.top) < step && Math.abs(newLeft - nextPosition.left) < step) {
            setNextPosition(null);
          }
        }
      }, 100); // Atualiza a posição a cada 0.1 segundo
  
      // Limpa o intervalo quando o componente é desmontado
      return () => clearInterval(interval);
    }, [position, nextPosition]);
  
    return (
        
      <div className='ObjectPato'
        
        style={{
          position: 'absolute',
          top: `${position.top}vh`,
          left: `${position.left}vw`,
          
          transition: 'top 5s, left 5s, transform 2s', // Adiciona transição suave
        }}
      >
        <div className='pato'  style={{
          transform: `rotate(${position.rotate}deg)`,
          transition: 'transform 2s',
        }}></div>
        <div className="patoOver"></div>
        <div className='box_info'>

          <div className='box_info_layer'>
              <div className='nomep jersey-10-regular'>{nome}</div>
              <div className='nomem jersey-10-regular'>{mensagem}</div>
          </div>
          
        </div>
      </div>
     
    );
  }