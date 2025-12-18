import axios from "axios"


export const fetchTaskApi = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
}

export const createTaskApi = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
}