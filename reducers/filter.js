const initState = {
  type: "All",
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
