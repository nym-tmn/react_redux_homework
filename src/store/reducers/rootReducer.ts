import { combineReducers } from "redux";
import { charactersReducer, locationsReducer, paginationReducer } from "@store";

export const rootReducer = combineReducers({
	characters: charactersReducer,
	locations: locationsReducer,
	pagination: paginationReducer,
});