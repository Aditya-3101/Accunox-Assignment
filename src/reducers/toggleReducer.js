const initialState = false;

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      return !state;
    case "HIDE":
      return !state;
    default:
      return state;
  }
};

export default toggleReducer;
