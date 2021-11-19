import React from 'react';

import './Dashboard.css';

function Dashboard() {
  
  return (
    <>
      <header className="app-header">
        <ul className="div">
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
        <ul className="div">
          <li>Saiba Mais</li>
          <li>Novidades</li>
          <li>Sair da Conta</li>
        </ul>
      </header>
      <div className="body">
        <div className="esquerda">
          <div>Esquerda</div>
          <div></div>
        </div>
        <div className="direita">
          <div>Direita</div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
