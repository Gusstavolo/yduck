import '../App.css';
import { Pato } from './Pato';
import React from 'react';
import { useId, useState } from 'react';




export function World() {

    const [position, setPosition] = useState({ top: 0, left: 0 });

    const handleClick = () => {
      // Atualiza a posição
      setPosition({
        top: position.top + 10+ "px",
        left: position.left + 10 + "px",
      });
    };

    return (

        <div className='world'>

            <div className='worldSpace'>
                  <Pato onClick={handleClick}  ></Pato>
            </div>

        </div>

    );

}