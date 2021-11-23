import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal, message } from 'antd';
import 'antd/dist/antd.css';


import NomesContatos from '../../components/nomesContatos';
import DetalhesContatos from '../../components/detalhesContatos';
import { FormContato } from '../../components/criarContato';
import { dashboardCreate } from '../../services/fetchActions';
import { Reload } from '../../components/reload';

import './Dashboard.css';

function Dashboard() {
  const history = useHistory()
  const reduxContato = useSelector((state) => state.dashboard);
  const [redirect, setRedirect] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      dashboardCreate(reduxContato)
      .then(() =>{
        message.success('Contato Salvo');
      }).catch(() => {
        message.error('Erro: salvar contato');
      });
      Reload();
    }, 1000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const sair = () => {
    localStorage.removeItem('token');
    setRedirect(true);
  }

  if (redirect) {
    history.push("/");
  }

  return (
    <>
      <Modal
        title="Novo Contato"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {FormContato()}
      </Modal>

      <header className="app-header">
        <ul className="div">
          <li onClick={showModal}>Novo contato</li>
        </ul>
        <ul className="div">
          <li onClick={sair}>Sair</li>
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
