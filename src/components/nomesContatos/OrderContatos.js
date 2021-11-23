import React from 'react';
import PropTypes from 'prop-types';

function OrderContatos({ order, i }) {
console.log('i :', i);
  const { nome, sobrenome } = order;

  function onClick(e) {
    console.log(e);
  }

  return (
    <div>
      <input
        type="button"
        className="inputContatos"
        onClick={onClick}
        value={`${nome} ${sobrenome}`}
      />  
    </div>
  );
}

OrderContatos.propTypes = {
  order: PropTypes.shape({
    sobrenome: PropTypes.string,
    nome: PropTypes.string,
  }).isRequired,
  i: PropTypes.number,
};

export default OrderContatos;
