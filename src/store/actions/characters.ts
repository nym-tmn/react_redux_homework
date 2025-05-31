import { getCharacters, getFiltredCharacters } from "@api";
import type { AppThunk } from "@store";
import { CharactersActionTypes } from "@types";
import axios from "axios";

// Async

export const fetchCharacters = (currentPage: number): AppThunk => async (dispatch) => {
	try {
		dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS })
		const response = await getCharacters(currentPage);
		dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS, payload: response })
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				dispatch({
					type: CharactersActionTypes.FETCH_CHARACTERS_ERROR, payload: "Failed to load characters."
				});
			}
		} else if (error instanceof Error) {
			console.error(error.message);
			dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS_ERROR, payload: "An unexpected error occurred" });
		} else {
			console.error('Unknown error:', error);
			dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS_ERROR, payload: "Something went wrong" });
		}
	}
}

export const fetchFiltredCharacters = (currentPage: number, debouncedSearchValue: string): AppThunk => async (dispatch) => {
	try {
		dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS })
		const response = await getFiltredCharacters(currentPage, debouncedSearchValue);
		dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS, payload: response })
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				dispatch({
					type: CharactersActionTypes.FETCH_CHARACTERS_ERROR, payload: `No characters found for "${debouncedSearchValue}"`
				});
			}
		} else if (error instanceof Error) {
			console.error(error.message);
			dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS_ERROR, payload: "An unexpected error occurred" });
		} else {
			console.error('Unknown error:', error);
			dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS_ERROR, payload: "Something went wrong" });
		}
	}
}

// Sync

export const setPortionCount = (portionCount: number) => ({
	type: CharactersActionTypes.CHARACTERS_SET_PORTION_COUNT,
	payload: portionCount,
})

export const setCurrentPage = (currentPage: number) => ({
	type: CharactersActionTypes.CHARACTERS_SET_CURRENT_PAGE,
	payload: currentPage,
})

export const setSearchInputValue = (searchInputValue: string) => ({
	type: CharactersActionTypes.CHARACTERS_SET_SEARCH_INPUT_VALUE,
	payload: searchInputValue,
})