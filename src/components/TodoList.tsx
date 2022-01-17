import React, { useState } from 'react';
import { TodoItem } from './TodoItem';

type Props = {
  todos: ITodo[];
  todo: string;
  handleComplete: (todo: ITodo) => void;
  handleDelete: (id: number) => void;
};

const TodoList: React.FC<Props> = ({
  todos,
  handleComplete,
  handleDelete,
}) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
};

export default TodoList;
