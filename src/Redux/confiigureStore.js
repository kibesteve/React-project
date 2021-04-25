import {configureStore, combineReducers,getDefaultMiddleware} from '@reduxjs/toolkit';
import counterSlice from './Ducks/counterSlice';
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas/rootSaga';
import userSlice from './Ducks/userSlice'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    counter: counterSlice,
    user: userSlice
})


const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({thunk: false}),sagaMiddleware]
})

sagaMiddleware.run(watcherSaga)

export default store