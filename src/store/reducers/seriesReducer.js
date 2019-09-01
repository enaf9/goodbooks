const seriesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_SERIES":
      return action.series;
    case "RESET_SERIES":
      return [];
    default:
      return state;
  }
};

export default seriesReducer;
