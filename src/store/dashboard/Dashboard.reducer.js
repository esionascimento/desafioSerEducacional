const INITIAL_STATE = {
  contato: -1,
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'CONTATO_SELECIONADO':
      return {
        contato: action.payload[0]
      }
    default:
      return state;
  }
}
