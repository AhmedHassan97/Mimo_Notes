import { combineReducers } from "redux";
import filterReducer from "./filter";
import favoritesReducers from "./favorites";
//Combine all the sub reducers
const rootReducer = combineReducers({
  filter: filterReducer,
  favorites: favoritesReducers,
});

export default rootReducer;
