import { getCharacters, getFiltredCharacters } from "@api";
import { setPages, type AppThunk } from "@store";
import { CharactersActionTypes, type CharactersType } from "@types";
import axios from "axios";

// Async

export const fetchCharacters = (currentPage: number): AppThunk => async (dispatch) => {
	try {
		dispatch(setIsLoading())
		const response = await getCharacters(currentPage);
		dispatch(setCharacters(response.results))
		dispatch(setPages(response.info.pages))
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
		dispatch(setCharacters(response.results))
		dispatch(setPages(response.info.pages))
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

export const setSearchInputValue = (searchInputValue: string) => ({
	type: CharactersActionTypes.CHARACTERS_SET_SEARCH_INPUT_VALUE,
	payload: searchInputValue,
})

const setIsLoading = () => ({
	type: CharactersActionTypes.FETCH_CHARACTERS,
})

const setCharacters = (characters: CharactersType) => ({
	type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS,
	payload: characters,
})

const setError = (errorMessage: string) => ({
	type: CharactersActionTypes.FETCH_CHARACTERS_ERROR,
	payload: errorMessage,
})