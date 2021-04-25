import {takeLatest} from 'redux-saga/effects'
import { getUser } from '../Ducks/userSlice'
import {handleGetUser} from './handlers/user'


export function* watcherSaga() {
    yield takeLatest(getUser, handleGetUser )
}