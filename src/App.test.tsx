import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('renders learn react link', () => {
  render(<App />);
  const addBtn = screen.getByRole('button');
  expect(addBtn).toBeInTheDocument();
  userEvent.click(addBtn);
  expect(addBtn).toHaveClass('newTodoBar__button_active')
});
