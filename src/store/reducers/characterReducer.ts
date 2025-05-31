import { CharactersActionTypes, type CharactersActions, type CharacterState } from "@types";

const initialState: CharacterState = {
	isLoading: false,
	info: {
		pages: 0,
	},
	results: [],
	currentPage: 1,
	portionCount: 1,
	searchInputValue: '',
	error: '',
};

export const charactersReducer = (state = initialState, action: CharactersActions) => {
	switch (action.type) {
		case CharactersActionTypes.FETCH_CHARACTERS:
			return {
				...state,
				isLoading: true,
				results: [],
				error: '',
			};
		case CharactersActionTypes.FETCH_CHARACTERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				results: action.payload.results,
				info: {
					pages: action.payload.info.pages
				},
			};
		case CharactersActionTypes.CHARACTERS_SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			};
		case CharactersActionTypes.CHARACTERS_SET_PORTION_COUNT:
			return {
				...state,
				portionCount: action.payload,
			};
		case CharactersActionTypes.CHARACTERS_SET_SEARCH_INPUT_VALUE:
			return {
				...state,
				searchInputValue: action.payload,
			};
		case CharactersActionTypes.FETCH_CHARACTERS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};