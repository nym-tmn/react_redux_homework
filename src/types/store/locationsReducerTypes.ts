import type { LocationsType, ResponseInfoType } from "@types";

export interface LocationsState {
	isLoading: boolean;
	info: ResponseInfoType;
	results: LocationsType;
	currentPage: number;
	portionCount: number;
	error: string;
}

export enum LocationsActionTypes {
	FETCH_LOCATIONS = 'FETCH_LOCATIONS',
	FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS',
	LOCATIONS_SET_CURRENT_PAGE = 'LOCATIONS_SET_CURRENT_PAGE',
	LOCATIONS_SET_PORTION_COUNT = 'LOCATIONS_SET_PORTION_COUNT',
	FETCH_LOCATIONS_ERROR = 'FETCH_LOCATIONS_ERROR',
}

export type LocationsActions =
	| { type: LocationsActionTypes.FETCH_LOCATIONS }
	| { type: LocationsActionTypes.FETCH_LOCATIONS_SUCCESS, payload: { results: LocationsType, info: ResponseInfoType } }
	| { type: LocationsActionTypes.LOCATIONS_SET_CURRENT_PAGE, payload: number }
	| { type: LocationsActionTypes.LOCATIONS_SET_PORTION_COUNT, payload: number }
	| { type: LocationsActionTypes.FETCH_LOCATIONS_ERROR, payload: string };
