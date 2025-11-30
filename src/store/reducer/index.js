import { combineReducers } from "redux";
import searchArticle from "./searchArticle";
import darkMode from "./darkMode";

const reducer = combineReducers({
  search: searchArticle,
  darkMode: darkMode,
});

export default reducer;
