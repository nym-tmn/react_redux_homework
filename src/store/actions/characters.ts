import { getCharacters, getFiltredCharacters } from "@api";
import type { AppThunk } from "@store";
import { CharactersActionTypes, type CharactersType, type ResponseType } from "@types";
import axios from "axios";

// Async

export const fetchCharacters = (currentPage: number): AppThunk => async (dispatch) => {
	try {
		dispatch(setIsLoading())
		const response = await getCharacters(currentPage);
		dispatch(setCharacters(response))
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				dispatch(setError("Failed to load characters."));
			}
		} else if (error instanceof Error) {
			console.error(error.message);
			dispatch(setError("An unexpected error occurred"));
		} else {
			console.error('Unknown error:', error);
			dispatch(setError("Something went wrong"));
		}
	}
}

export const fetchFiltredCharacters = (currentPage: number, debouncedSearchValue: string): AppThunk => async (dispatch) => {
	try {
		dispatch(setIsLoading())
		const response = await getFiltredCharacters(currentPage, debouncedSearchValue);
		dispatch(setCharacters(response))
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				dispatch(setError(`No characters found for "${debouncedSearchValue}"`));
			}
		} else if (error instanceof Error) {
			console.error(error.message);
			dispatch(setError("An unexpected error occurred"));
		} else {
			console.error('Unknown error:', error);
			dispatch(setError("Something went wrong"));
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

const setIsLoading = () => ({
	type: CharactersActionTypes.FETCH_CHARACTERS,
})

const setCharacters = (response: ResponseType<CharactersType>) => ({
	type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS,
	payload: response,
})

const setError = (errorMessage: string) => ({
	type: CharactersActionTypes.FETCH_CHARACTERS_ERROR,
	payload: errorMessage,
})