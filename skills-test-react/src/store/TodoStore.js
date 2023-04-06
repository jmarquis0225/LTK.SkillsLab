import { createStore } from 'redux';
import todoReducer from '../reducers/TodoReducer';
import { AddTodo, DeleteTodo } from '../constants/TodoConstants';

export const todoStore = createStore(todoReducer);

export const addTodo = (data) => {
    todoStore.dispatch({type: AddTodo, payload: data});
}

export const deleteTodoAction = (data) => {
    console.log(data);
    todoStore.dispatch({type: DeleteTodo, payload: data});
}