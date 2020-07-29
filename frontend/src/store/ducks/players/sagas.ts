import { call, put } from 'redux-saga/effects';
import API from '../../../services/api';
import { loadSuccess, loadFailure, fetchPlayertAsync, loadRequest} from './actions';
import { PlayersTypes, Player } from './types';

// {type: typeof PlayersTypes.LOAD_REQUEST, payload: number}

export function* load(action: ReturnType<typeof loadRequest>): Generator {

    console.log(`Disptaching request for backend... `);

    try{
        const response = yield call(API.get, `/player/${action.payload}`);
        console.log(response)
        // yield put(fetchPlayertAsync.success(response));
    } catch (err) {
        yield put(loadFailure());
    }
}