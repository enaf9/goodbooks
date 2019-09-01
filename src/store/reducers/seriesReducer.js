const seriesReducer = (state = {}, action) => {
  if (action.type === "GET_SERIES") {
    console.log(action.series);
    console.log(...action.series);
    return { ...state, a: action.series };
  } else {
    return state;
  }
};

export default seriesReducer;
