import { combineReducers } from "redux";
import { charactersReducer, locationsReducer } from "@store";

export const rootReducer = combineReducers({
	characters: charactersReducer,
	locations: locationsReducer,
});