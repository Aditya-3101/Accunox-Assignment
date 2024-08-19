export const showAddWidget = () => {
  return {
    type: "SHOW",
  };
};

export const hideAddWidget = () => {
  return {
    type: "HIDE",
  };
};

export const remWidget = (para) => {
  return {
    type: "REMOVE_WIDGET",
    payload: para || null,
  };
};

export const hideWidget = (para) => {
  return {
    type: "HIDE_WIDGET",
    payload: para || null,
  };
};
