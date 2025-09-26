import { Dispatch } from "redux";
import { TodoActionTypes, TodoAction } from "../types/todos";
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit} 
            })
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR, 
                payload: 'Произошла ошибка при запросе списка задач!'
            });
        }
    }
};

export const setTodoPage = (page: number): TodoAction => {
    return { type: TodoActionTypes.SET_TODO_PAGE, payload: page};
};