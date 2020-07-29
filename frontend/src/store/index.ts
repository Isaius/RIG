import { createStore, Store, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ItemsState } from './ducks/items/types';
import { PlayerState } from './ducks/players/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

const sagaMiddleware  = createSagaMiddleware();

export interface ApplicationState {
    items: ItemsState,
    players: PlayerState
}

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;