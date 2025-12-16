import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { taskReducer } from './taskReducer';
import { userReducer } from './userReducer';
import logger from 'redux-logger';

const allMyReducer = combineReducers({
    taskR: taskReducer,
    userR: userReducer
});

export const myStore = createStore(allMyReducer, applyMiddleware(logger));

