import axios from "axios";

const url: string = 'https://61cc6e98198df60017aec083.mockapi.io';

export const fetchTodos = async () => {
    return await axios.get(url + '/todos')
}

export const addTodo = async (todo: string) => {
    return await axios.post(url + '/todos', {
        text: todo
    })
}

export const completeTodo = async (todo: ITodo) => {
    return await axios.put(`${url}/todos/${todo.id}`, {
        ...todo,
        complete: true
    })
}

export const deleteTodo = async (id: number) => {
    return await axios.delete(`${url}/todos/${id}`)
}