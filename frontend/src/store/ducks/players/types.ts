
// ACTION TYPES

export enum PlayersTypes {
    LOAD_REQUEST = '@players/LOAD_REQUEST',
    LOAD_SUCCESS = '@players/LOAD_SUCCESS',
    LOAD_FAILURE = '@players/LOAD_FAILURE'
};

// DATA TYPES

export interface Player {
    player_id: number;
    name: string,
    level: number
}

// STATE TYPE

export interface PlayerState {
    readonly data: Player,
    readonly loading: boolean,
    readonly error: boolean
}