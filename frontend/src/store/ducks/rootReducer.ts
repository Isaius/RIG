import { combineReducers } from 'redux';

import items from './items';
import players from './players';

export default combineReducers({
    items,
    players
});