/** @jest-environment jsdom */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

    test('toggles a todo', () => {
        render(<TodoList />)
        const todoItem = screen.getByText('Learn React').closest('li');
        const completeButton = todoItem.querySelectorAll('button')[0];
        
        
        fireEvent.click(completeButton);
        expect(todoItem).toHaveStyle('text-decoration: line-through');

        fireEvent.click(completeButton);
        expect(todoItem).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React').closest('li');
        const deleteButton = todoItem.querySelectorAll('button')[1];

        fireEvent.click(deleteButton);
        expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
});