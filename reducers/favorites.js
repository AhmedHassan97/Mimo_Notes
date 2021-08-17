const initState = {
  favorites: [],
};

const favoritesReducers = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

export default favoritesReducers;
