import { ADD_TASK, UPDATE_TASK } from "../redux/taskActions";


export const initialState = {
    tasks:[
        {id:1, title: 'Görev 1'},
        {id:2, title: 'Görev 2'},
        {id:3, title: 'Görev 3'}
    ]
}


export function taskReducer(state = initialState, action){
    switch(action.type){
        case ADD_TASK:
            console.log(action);
            return {...state, tasks: [...state.tasks, action.payload]}
        case UPDATE_TASK:
            return {...state, tasks: [...state.tasks, action.payload]}
        default:
            return state;
    }

}