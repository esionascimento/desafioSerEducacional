import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

import NomesContatos from '../../components/nomesContatos';
import DetalhesContatos from '../../components/detalhesContatos';
import { FormContato } from '../../components/criarContato';
import { dashboardCreate } from '../../services/fetchActions';

import './Dashboard.css';

function Dashboard() {
  const reduxContato = useSelector((state) => state.dashboard);

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
      dashboardCreate(reduxContato);
      window.location.reload();
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

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
