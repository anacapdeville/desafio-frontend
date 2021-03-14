const INITIAL_STATE = [];

function dataReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SAVE_DATA':
      return action.data
    default:
      return state
  }
}

export default dataReducer;
