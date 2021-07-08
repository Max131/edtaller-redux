export const saveOperation = (state,action) => ({
  ...state,
  operations : [...state.operations, action.operation]
})

export const calculate = (state,action) => ({
  ...state,
  result : action.result
})