import React, { useState, useEffect } from 'react';
import { dashboard } from '../../services/fetchActions';
import { useSelector } from 'react-redux';
/* import OrderContatos from './OrderContatos'; */

function NomesContatos() {
  const { contato } = useSelector(state => state.dashboard);
  const [ data, setData ] = useState([]);
  
  useEffect(() => {
    dashboard().then((aux) => {
      if (aux.data.length > 0) {
        const salve = aux.data[0].data;
        salve.map((data, index) =>{
          if (parseInt(contato) === parseInt(index)) {
            setData(data);
          }
        })
      }
    });
  },[contato]);

  return (
    <div>
      {data
        ? <div>
            <p>Nome: {data.nome}</p>
            <p>Sobrenome: {data.sobrenome}</p>
            <p>Telefone: {data.telefone}</p>
            <p>Email: {data.email}</p>
            <p>Data de nascimento: {data.dataNascimento}</p>
            <p>Endereço: {data.endereco}</p>
          </div>
        : <p>erro</p>
      }
    </div>
  );
}

export default NomesContatos;
