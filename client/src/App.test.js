import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

describe('Test', () => {
  beforeAll(() => {
    window.matchMedia = query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  });
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn chakra/i);
    expect(linkElement).toBeInTheDocument();
  });
});
