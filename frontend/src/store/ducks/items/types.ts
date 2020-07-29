
// ACTION TYPES

export enum ItemsTypes {
    LOAD_REQUEST = '@items/LOAD_REQUEST',
    LOAD_SUCCESS = '@items/LOAD_SUCCESS',
    LOAD_FAILURE = '@items/LOAD_FAILURE',
    ADDD_ITEM = '@items/ADDD_ITEM',
    REMOVE_ITEM = '@items/REMOVE_ITEM',
};

// DATA TYPES

export interface Item {
    id: number;
    owner_id: number;
    type: string;
    subtype: string;
    quality: number;
    name: string;
    level: number;
    atk: number;
    def: number;
    properties: []
}


// STATE TYPE

export interface ItemsState {
    readonly data: Item[],
    readonly loading: boolean,
    readonly error: boolean
}