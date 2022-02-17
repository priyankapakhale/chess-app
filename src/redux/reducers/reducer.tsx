const initialState = {
}

type actionType = {
  type: string
  payload: any
}

const reducer = (state = initialState, action:actionType) => {
  switch(action) {
    default:
      return state;
  }
}

export default reducer;