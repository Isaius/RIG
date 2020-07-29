import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { ItemsTypes } from './types';

export function* load({payload}: {type: typeof ItemsTypes.LOAD_REQUEST, payload:number}) {
    console.log(`Calling API... ${payload}`)
    try{
        const response = yield call(api.get, `/player/${payload}/item`);

        yield put(loadSuccess(response.data));
    } catch (err) {
        yield put(loadFailure());
    }
}