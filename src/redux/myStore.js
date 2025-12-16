import { legacy_createStore as createStore, combineReducers} from 'redux';
import { taskReducer } from './taskReducer';
import { userReducer } from './userReducer';

const allMyReducer = combineReducers({
    taskR: taskReducer,
    userR: userReducer
});

export const myStore = createStore(allMyReducer);

