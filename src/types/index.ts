export type { ResponseType, ResponseInfoType } from './api/common';
export type {	CharactersType,	CharacterType} from './api/characters';
export type { LocationsType, LocationType } from './api/locations';
export type { EpisodesType, EpisodeType } from './api/episodes';

export {
	CharactersActionTypes,
	type CharactersState,
	type CharactersActions
} from './store/charactersReducerTypes';

export {
	LocationsActionTypes,
	type LocationsState,
	type LocationsActions
} from './store/locationsReducerTypes';

export type {
	ButtonProps,
	ContentTitleProps,
	FlexProps,
	CustomImageProps,
	PaginationProps,
	CharacterProps,
	ModalProps,
	CustomnInputProps
} from './components/props';