const INITIAL_STATE = {assets: [], teste: ''};

function dataReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SAVE_DATA':
      return {...state, assets: action.data}
    case 'TEST':
      return {
        ...state,
        teste: action.teste
      }
    default:
      return state
  }
}

export default dataReducer;
