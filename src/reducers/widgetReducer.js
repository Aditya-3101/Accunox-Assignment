export const widgetReducer = (state = null, action) => {
  switch (action.type) {
    case "HIDE_WIDGET":
      return (state = action.payload);
    default:
      return state;
  }
};
