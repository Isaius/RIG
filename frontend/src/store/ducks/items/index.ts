import { ItemsState, ItemsTypes, Item } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: ItemsState = {
    data: [],
    error: false,
    loading: false 
};

const reducer: Reducer<ItemsState> = (state = INITIAL_STATE, action) => {

    const removeItem = (item:Item) =>{
        const index = state.data.indexOf(item);
        return state.data.splice(index, 1);
    }

    switch(action.type) {
        case ItemsTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case ItemsTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case ItemsTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] };
        case ItemsTypes.ADDD_ITEM:
            return { ...state, data: [...state.data, action.payload.data] };
        case ItemsTypes.REMOVE_ITEM:
            return { ...state, data: removeItem(action.payload.data) }
        default:
            return state;
    }
}

export default reducer;
