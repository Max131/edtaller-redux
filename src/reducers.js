export const saveOperation = (state,action) => ({
  ...state,
  operations : state.operations.concat(action.operation) 
})

export const calculate = (state,action) => ({
  ...state,
  result : action.result
})