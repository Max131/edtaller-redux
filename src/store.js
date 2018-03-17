import { createStore } from 'redux'
import { SAVE_OPERATION, CALCULATE } from './actions'
import { saveOperation, calculate } from './reducers'

const reducer = (state,action) => {
  switch(action.type) {
    case SAVE_OPERATION :
      return saveOperation(state,action)
    case CALCULATE :
      return calculate(state,action)
    default : 
      return state
  }
}

const initialState = {
  operations : [],
  result : 0
}

export default createStore(reducer,initialState)