import {
	LocationsActionTypes,
	type LocationsActions,
	type LocationsState,
} from "@types";

const initialState: LocationsState = {
	isLoading: false,
	info: {
		pages: 0,
	},
	results: [],
	currentPage: 1,
	portionCount: 1,
	error: '',
};

export const locationsReducer = (state = initialState, action: LocationsActions) => {
	switch (action.type) {
		case LocationsActionTypes.FETCH_LOCATIONS:
			return {
				...state,
				isLoading: true,
				results: [],
				error: '',
			};
		case LocationsActionTypes.FETCH_LOCATIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				results: action.payload.results,
				info: {
					pages: action.payload.info.pages
				},
			};
		case LocationsActionTypes.LOCATIONS_SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			};
		case LocationsActionTypes.LOCATIONS_SET_PORTION_COUNT:
			return {
				...state,
				portionCount: action.payload,
			};
		case LocationsActionTypes.FETCH_LOCATIONS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};