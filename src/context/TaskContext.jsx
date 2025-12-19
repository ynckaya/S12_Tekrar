import axios from "axios";
import { useEffect, useState, useContext, createContext } from "react";

export const TaskContext = createContext();

export const useTaskContext = () => {
    const myContext = useContext(TaskContext);

    return myContext;
};

export const TaskProvider = ({children}) => {

    const [gorevler, setGorevler] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTask = async () => {

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setGorevler(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTask();
    }, []);

    const values = {gorevler, loading, error, fetchTask, setGorevler};

    return (
        <TaskContext.Provider value={values}>
            {children}
        </TaskContext.Provider>
    )
};