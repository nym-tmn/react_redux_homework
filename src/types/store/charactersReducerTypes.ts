import type { CharactersType, ResponseInfoType } from "@types";

export interface CharactersState {
	isLoading: boolean;
	info: ResponseInfoType;
	results: CharactersType;
	currentPage: number;
	portionCount: number;
	searchInputValue: string;
	error: string;
}

export enum CharactersActionTypes {
	FETCH_CHARACTERS = 'FETCH_CHARACTERS',
	FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
	CHARACTERS_SET_CURRENT_PAGE = 'CHARACTERS_SET_CURRENT_PAGE',
	CHARACTERS_SET_PORTION_COUNT = 'CHARACTERS_SET_PORTION_COUNT',
	CHARACTERS_SET_SEARCH_INPUT_VALUE = 'CHARACTERS_SET_SEARCH_INPUT_VALUE',
	FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
}

export type CharactersActions =
	| { type: CharactersActionTypes.FETCH_CHARACTERS }
	| { type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS, payload: { results: CharactersType, info: ResponseInfoType } }
	| { type: CharactersActionTypes.CHARACTERS_SET_CURRENT_PAGE, payload: number }
	| { type: CharactersActionTypes.CHARACTERS_SET_PORTION_COUNT, payload: number }
	| { type: CharactersActionTypes.CHARACTERS_SET_SEARCH_INPUT_VALUE, payload: string }
	| { type: CharactersActionTypes.FETCH_CHARACTERS_ERROR, payload: string };
