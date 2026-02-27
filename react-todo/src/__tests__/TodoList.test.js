import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByRole('button', { name: 'Add' });

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles a todo', () => {
        render(<TodoList />)
        const todoItem = screen.getByText('Learn React').closest('li');
        const completeButton = todoItem.querySelector('button');
        
        fireEvent.click(completeButton); // Click the complete button
        expect(todoItem).toHaveStyle('text-decoration: line-through');

        fireEvent.click(completeButton); // Click the toggle button again
        expect(todoItem).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React').closest('li');
        const deleteButton = todoItem.querySelectorAll('button')[1]; // Get the delete button

        fireEvent.click(deleteButton);

        expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
});