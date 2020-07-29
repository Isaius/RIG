import { all, takeLatest, fork } from 'redux-saga/effects';

import { ItemsTypes } from './items/types';
import { PlayersTypes } from './players/types';
import { load as loadItems } from './items/sagas';
import { load as loadPlayer } from './players/sagas';

export default function* rootSaga(){
    console.log(`Reaching saga root`);
    return yield all([
        takeLatest(ItemsTypes.LOAD_REQUEST, loadItems),
        takeLatest(PlayersTypes.LOAD_REQUEST, loadPlayer)
    ]);
};