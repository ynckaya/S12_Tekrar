
import { ADD_TASK, UPDATE_TASK, FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../redux/taskActions";


export const initialState = {
    tasks:[
        {id:1, title: 'Görev 1'},
        {id:2, title: 'Görev 2'},
        {id:3, title: 'Görev 3'}
    ],
    loading: false,
    error: null
}


export function taskReducer(state = initialState, action){
    switch(action.type){
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]}
        case FETCH_START:
            return {...state, loading: true, error: null}
        case FETCH_SUCCESS:
            return {...state, tasks: action.payload, loading: false, error: null}
        case FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }

}