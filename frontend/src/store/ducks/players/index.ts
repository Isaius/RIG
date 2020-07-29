import { Reducer } from "redux";

import { PlayerState, PlayersTypes, Player } from "./types";
const player: Player = {
    player_id: -11,
    name: 'default',
    level: 0
}

const INITIAL_STATE: PlayerState = {
    data: player,
    error: false,
    loading: false
};

const reducer: Reducer<PlayerState> = (state = INITIAL_STATE, action) => {
    
    console.log(`REDUCER<Player>: Received ${action.type} with:`);
    console.log(action.payload);

    switch(action.type) {
        case PlayersTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case PlayersTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: { 
                    player_id: action.payload.id,
                    name: action.payload.name, 
                    level: action.payload.level 
                }
            };
        case PlayersTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: player };
        default:
            return state;
    }
}

export default reducer;
