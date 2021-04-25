import {call,put} from "redux-saga/effects"
import {setUser} from '../../Ducks/userSlice'
import {reqGetUser} from '../requests/user'

export function* handleGetUser (action){
    try{
        const response =yield call(reqGetUser)
        const {data} =response
        //console.log(data)
        yield put(setUser(data))
    }
    catch(err){
        console.log(err)
    }
}