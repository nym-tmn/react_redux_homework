export { charactersReducer } from "./reducers/characterReducer";
export { rootReducer } from "./reducers/rootReducer";

export {
	store,
	type AppStore,
	type RootState,
	type AppDispatch,
	type AppThunk
} from "./store";

export {
	fetchCharacters,
	fetchFiltredCharacters,
	setPortionCount,
	setCurrentPage,
	setSearchInputValue
} from './actions/characters';