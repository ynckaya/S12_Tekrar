import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { taskReducer } from './taskReducer';
import { userReducer } from './userReducer';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

const allMyReducer = combineReducers({
    taskR: taskReducer,
    userR: userReducer
});

export const myStore = createStore(allMyReducer, applyMiddleware(thunk, logger));

