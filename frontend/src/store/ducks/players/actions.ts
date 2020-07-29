import { action, createAsyncAction } from 'typesafe-actions';
import { PlayersTypes, Player } from './types';

export const fetchPlayertAsync = createAsyncAction(
    PlayersTypes.LOAD_REQUEST,
    PlayersTypes.LOAD_SUCCESS,
    PlayersTypes.LOAD_FAILURE
)<number, Player, Error>();

export const loadRequest = (player_id: number) => action(PlayersTypes.LOAD_REQUEST, player_id);

export const loadSuccess = (data: Player) => action(PlayersTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(PlayersTypes.LOAD_FAILURE);