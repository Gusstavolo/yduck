import '../App.css';
import { Pato } from './Pato';
import patoSound from './img/quak.mp3'; // Importe o arquivo de áudio
import { useId, useState } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from '../firebaseConfig';

import React, { useEffect } from 'react';


export function World() {
  const [patos, setPatos] = useState([]);
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const fetchPatos = async () => {
      const querySnapshot = await getDocs(collection(db, "pato"));
      const patosData = [];
      querySnapshot.forEach((doc) => {
        const { name, msg } = doc.data();
        patosData.push({ id: doc.id, nome: name, mensagem: msg });
      });
      setPatos(patosData);
    };

    fetchPatos();
  }, []);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleMensagemChange = (event) => {
    setMensagem(event.target.value);
  };

  const handleSubmit = async () => {
    // Verifica se o nome e a mensagem não estão vazios
    if (nome.trim() !== '' && mensagem.trim() !== '') {
      // Adiciona um novo pato ao estado
      setPatos([...patos, { nome, mensagem }]);
      // Limpa os campos do formulário
      setNome('');
      setMensagem('');
      const audio = new Audio(patoSound);
      audio.play();

      try {
        const docRef = await addDoc(collection(db, "pato"), {
          name: nome,
          msg: mensagem,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    
     

  }
    
  };

  return (

    
    <div className='world'>
      <div className='worldSpace'>
        {/* Renderiza os componentes Pato com base nas informações armazenadas no estado */}
        {patos.map((pato, index) => (
          <Pato key={index} nome={pato.nome} mensagem={pato.mensagem} />
          
        ))
        } 
       

        
      </div>
        
        <audio src={patoSound} id="patoAudio" preload="auto"></audio>
        
      

      <div className='config_generate_box'>
        <div className='generate_box'>
          <div className='jersey-10-regular'>NOME</div>
          <input className='generate_box_name' type="text" value={nome} onChange={handleNomeChange} maxLength={10} />
          <div className='jersey-10-regular'>MENSAGEM</div>
          <input className='generate_box_msm' type="text" value={mensagem} onChange={handleMensagemChange} maxLength={12}/>
          <input className='generate_box_button' type="submit" value="CRIAR" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
