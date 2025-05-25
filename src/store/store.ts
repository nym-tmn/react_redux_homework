// import { characterReducer } from "@store";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
// import { charactersReducer } from "./reducers/characterReducer";

const rootReducer = combineReducers({
	// characters: characterReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))