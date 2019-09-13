import * as actionTypes from '../actions/actionTypes';
import { takeLatest } from 'redux-saga/effects';
import { checkAuthSate } from './authSaga';
export function* watchAuth() {
    yield takeLatest(actionTypes.CHECK_AUTH, checkAuthSate)
}