import '../App.css';
import { Pato } from './Pato';

import { useId, useState } from 'react';




export function World() {

    return (

        <div className='world'>

            <div className='worldSpace'>
                  <Pato ></Pato>
                  <Pato ></Pato>
                  <Pato ></Pato>
            </div>

        </div>

    );

}