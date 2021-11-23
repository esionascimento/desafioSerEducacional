const INITIAL_STATE = {
  contato: -1,
  nome: '',
  sobrenome: '',
  telefone: '',
  email: '',
  dataNascimento: '',
  endereco: '',
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'CONTATO_SELECIONADO':
      return {
        contato: action.payload[0]
      }
    case 'SALVE_FORM':
      return {
        nome: action.payload.name, sobrenome: action.payload.sobrenome,
      }
    default:
      return state;
  }
}
