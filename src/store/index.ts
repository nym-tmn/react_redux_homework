export { charactersReducer } from "./reducers/characterReducer";
export { locationsReducer } from "./reducers/locationsReducer";
export { paginationReducer } from "./reducers/paginationReducer";
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
	setSearchInputValue
} from './actions/characters';

export {
	fetchLocatoins
} from './actions/locations';

export {
	setPages,
	setCurrentPage,
	setPortionCount,
} from './actions/pagination';