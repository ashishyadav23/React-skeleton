import { put } from 'redux-saga/effects'
import { storeAuth, removeAuth } from '../actions/index'
export function* checkAuthSate() {
    let tokenObj = yield JSON.parse(localStorage.getItem('ksAuth'));
    console.log("tokenObj", tokenObj);
    if (tokenObj && tokenObj.hasOwnProperty('token')) {
        yield put(storeAuth(tokenObj.token, tokenObj.clientId))
    } else {
        yield put(removeAuth())
    }
}