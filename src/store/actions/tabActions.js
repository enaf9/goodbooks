const setTabActive = id => {
  console.log(id);
  return {
    type: "SET_TAB_ACTIVE",
    id: id
  };
};

export default setTabActive;
