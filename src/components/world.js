import '../App.css';
import { Pato } from './Pato';

import { useId, useState } from 'react';




export function World() {

    return (

        <div className='world'>

            <div className='worldSpace'>
                  <Pato nome={"Cuzinho"} ></Pato>
                  
                  <Pato ></Pato>
                  <Pato ></Pato>

            </div>
            <div className='config_generate_box'>
                <div className='generate_box'>
                    <div >NOME</div>
                    <input className='generate_box_name' type="text" name="name"></input>
                    <div>MENSAGEM </div>
                    <input className='generate_box_msm' type="text" name="name"></input>
                    
                    <input className='generate_box_button' type="submit" value="Submit" />
                </div>
            </div>
        </div>

    );

}