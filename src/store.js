import { createStore } from 'redux'

const saveOperation = ( state,action ) => {
    return {
        ...state,
        operations : state.operations.concat(action.operation)
    }
}

const showResult = (state,action) => {
    return {
        ...state,
        result : action.result
    }
}

const reducer = (state,action) => {
    switch(action.type) {
        case 'SAVE_OPERATION' :
            return saveOperation(state,action)
        case 'SHOW_RESULT' :
            return showResult(state,action)
        default : 
            return state
    }
}


export default createStore(reducer,{
     operations : [],
     result : 0
    })