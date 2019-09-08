export const showPopUp = id => {
  return {
    type: "SHOW_POPUP",
    id
  };
};

export const closePopUp = () => {
  return {
    type: "CLOSE_POPUP"
  };
};
