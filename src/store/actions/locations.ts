import { getLocations } from "@api";
import type { AppThunk } from "@store";
import { LocationsActionTypes, type LocationsType, type ResponseType } from "@types";
import axios from "axios";

// Async

export const fetchLocatoins = (currentPage: number): AppThunk => async (dispatch) => {
	try {
		dispatch(setIsLoading())
		const response = await getLocations(currentPage);
		dispatch(setLocations(response))
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

// Sync

const setIsLoading = () => ({
	type: LocationsActionTypes.FETCH_LOCATIONS,
})

const setLocations = (response: ResponseType<LocationsType>) => ({
	type: LocationsActionTypes.FETCH_LOCATIONS_SUCCESS,
	payload: response,
})

const setError = (errorMessage: string) => ({
	type: LocationsActionTypes.FETCH_LOCATIONS_ERROR,
	payload: errorMessage,
})