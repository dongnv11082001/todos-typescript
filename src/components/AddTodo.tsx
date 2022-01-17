import React from 'react';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';

type Props = {
  handleSubmit: (todo: string) => void;
  handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
  todo: string;
};

const AddTodo: React.FC<Props> = ({ handleSubmit, handleInputChange, todo }) => {
  return (
    <Form>
      <Input
        value={todo}
        onChange={handleInputChange}
        placeholder="Your todo..."
      />
      <Button onClick={() => handleSubmit(todo)}>
        <PlusOutlined />
      </Button>
    </Form>
  );
};

export default AddTodo;

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #444;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  background: #f5f6f7;
  padding: 0.5rem 1rem;
  border: 1px solid #ff9900;
  border-radius: 10px;
  display: block;
  margin: 0 1rem 0 0;
  flex: 3;
`;

const Button = styled.button`
  background: #ff9900;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.9;
  }
`;
