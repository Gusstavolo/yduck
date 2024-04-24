import '../App.css';
import { Pato } from './Pato';

import { useId, useState } from 'react';


export function World() {
  const [patos, setPatos] = useState([]);
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleMensagemChange = (event) => {
    setMensagem(event.target.value);
  };

  const handleSubmit = () => {
    // Verifica se o nome e a mensagem não estão vazios
    if (nome.trim() !== '' && mensagem.trim() !== '') {
      // Adiciona um novo pato ao estado
      setPatos([...patos, { nome, mensagem }]);
      // Limpa os campos do formulário
      setNome('');
      setMensagem('');
    }
  };

  return (

    
    <div className='world'>
      <div className='worldSpace'>
        {/* Renderiza os componentes Pato com base nas informações armazenadas no estado */}
        {patos.map((pato, index) => (
          <Pato key={index} nome={pato.nome} mensagem={pato.mensagem} />
        ))}
      </div>


      <div className='config_generate_box'>
        <div className='generate_box'>
          <div className='jersey-10-regular'>NOME</div>
          <input className='generate_box_name' type="text" value={nome} onChange={handleNomeChange} />
          <div className='jersey-10-regular'>MENSAGEM</div>
          <input className='generate_box_msm' type="text" value={mensagem} onChange={handleMensagemChange} />
          <input className='generate_box_button' type="submit" value="CRIAR" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
