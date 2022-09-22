import React from "react"
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/To Do List/i);
  expect(linkElement).toBeInTheDocument();
});

test ('renders input', () => {
  const { getByTestId } = render(<App /> );
  const inputEl = screen.getByTestId('inputId')

  expect(inputEl.textContent).toBe("")
})