import React from 'react';
import NomesContatos from '../../components/nomesContatos';
import DetalhesContatos from '../../components/detalhesContatos';

import './Dashboard.css';

function Dashboard() {
  
  return (
    <>
      <header className="app-header">
        <ul className="div">
          <li>Novo contato</li>
        </ul>
        <ul className="div">
          <li>Saiba Mais</li>
          <li>Novidades</li>
          <li>Sair</li>
        </ul>
      </header>
      <div className="body">
        <div className="esquerda">
          <div>
            <NomesContatos />
          </div>
        </div>
        <div className="direita">
          <div>
            <DetalhesContatos />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
