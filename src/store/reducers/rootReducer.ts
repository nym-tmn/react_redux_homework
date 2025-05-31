import { combineReducers } from "redux";
import { charactersReducer } from "@store";

export const rootReducer = combineReducers({
	characters: charactersReducer,
});