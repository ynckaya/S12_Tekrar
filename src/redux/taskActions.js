import axios from "axios";

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
})


// Mock api nasıl kullanılır? (seed data)

export const fetchTask = () => {
    return async (dispatch, getState) => {

        dispatch({
            type: FETCH_START
        })

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

            dispatch({
                type: FETCH_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: FETCH_ERROR,
                payload: error
            })
        }   
    }
};