import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Add from './components/AddTodo';
import { addTodo, fetchTodos, deleteTodo, completeTodo } from './API';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const refInput = useRef<HTMLInputElement>(null);

  const fetchAPI = async () => {
    const { data } = await fetchTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleSubmit = async (todo: string) => {
    if (!todo) {
      alert('Empty todo');
      return;
    }

    const { data } = await addTodo(todo);
    setTodos([...todos, data]);

    setTodo('');
    refInput.current?.focus();
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };

  const handleDelete = (id: number) => {
    deleteTodo(id);

    const filterTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filterTodos);
  };

  const handleComplete = (todo: ITodo) => {
    setTodos(
      todos.map((item) => {
        return todo.id === item.id
          ? { ...item, complete: !item.complete }
          : item;
      })
    );

    completeTodo(todo);
  };

  return (
    <div>
      <Header />
      <Container>
        <Add
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          todo={todo}
        />
        <TodoList
          todo={todo}
          todos={todos}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  max-width: 728px;
  margin: 2rem auto;
  color: white;
`;
