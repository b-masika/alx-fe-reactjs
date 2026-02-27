import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList and initial todos', () => {
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
        const todoItem = screen.getByText('Learn React');
        
        
        fireEvent.click(todoItem); // Click the todo item to toggle completion
        expect(todoItem).toHaveStyle('text-decoration: line-through');

        fireEvent.click(todoItem); // Click the todo item again to toggle back
        expect(todoItem).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const todoText = screen.getByText('Learn React');
        const deleteButtons = screen.getAllByText('Delete');

        fireEvent.click(deleteButtons[0]); // Click the delete button for the first todo item

        expect(todoText).not.toBeInTheDocument();
    });
});