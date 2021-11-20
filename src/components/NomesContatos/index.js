import React, { useState, useEffect } from 'react';
import { dashboard } from '../../services/fetchActions';
import { useDispatch } from 'react-redux';
import { DashboardSelectContato } from '../../store/dashboard/Dashboard.actions';
/* import OrderContatos from './OrderContatos'; */

function NomesContatos() {
  const dispatch = useDispatch();
  const [ data, setData ] = useState([]);
  console.log('data :', data);

  useEffect(() => {
    dashboard().then((aux) => {
      const salve = aux.data[0].data;
      setData(salve);
    });
  },[])

  function onClick(e) {
    dispatch(DashboardSelectContato(e.target.name));
  }

  return (
    <div>
      {data
        ? data.map((or, index) => (
            <div key={ or.id }>
              <input
                type="button"
                className="inputContatos"
                onClick={onClick}
                name={index}
                value={`${or.nome} ${or.sobrenome}`}
              />  
            </div>
        ))
        : <p>erro</p>
      }
    </div>
  );
}

export default NomesContatos;
