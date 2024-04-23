import React, { useState } from 'react';
import { useEffect } from 'react';




function calcularComandos(xAtual, yAtual, xFinal, yFinal) {
    let comandos = [];

    // calcular diferenças
    let diffX = xFinal - xAtual;
    let diffY = yFinal - yAtual;

    // gera comandos baseados nos valores binários
    while (xAtual !== xFinal || yAtual !== yFinal) {
        if (xAtual !== xFinal && Math.abs(diffX) > Math.abs(diffY)) {
            xAtual += Math.sign(diffX);
            comandos.push({ x: xAtual, y: yAtual });
        } else if (yAtual !== yFinal && Math.abs(diffY) > Math.abs(diffX)) {
            yAtual += Math.sign(diffY);
            comandos.push({ x: xAtual, y: yAtual });
        } else {
            // Caso os eixos tenham a mesma diferença, priorize um aleatório
            let random = Math.random();
            if (random < 0.5 && xAtual !== xFinal) {
                xAtual += Math.sign(diffX);
                comandos.push({ x: xAtual, y: yAtual });
            } else if (yAtual !== yFinal) {
                yAtual += Math.sign(diffY);
               comandos.push({ x: xAtual, y: yAtual });
            }
        }
    }

    return comandos;
}



export function Pato() {
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
      <div 
        className='pato'
        style={{
          position: 'absolute',
          top: `${position.top}vh`,
          left: `${position.left}vw`,
          transform: `rotate(${position.rotate}deg)`,
          transition: 'top 4s, left 4s, transform 2s', // Adiciona transição suave
        }}
      />
    );
  }