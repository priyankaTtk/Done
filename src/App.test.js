import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import Header from './Header';
import Button from './Button';
import Input from './Input';
import { BrowserRouter } from 'react-router-dom';

describe('App Component', () => {
    test('renders the header', async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            );
        });
        expect(screen.getByText(/Just Another Movie Website/i)).toBeInTheDocument();
    });
});

describe('Header Component', () => {
    test('renders header with text', () => {
        render(<Header text="Test Header" />);
        expect(screen.getByText(/Test Header/i)).toBeInTheDocument();
    });
});

describe('Button Component', () => {
    test('renders button with text', () => {
        render(<Button type="button" text="Click Me" />);
        expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
    });
});

describe('Input Component', () => {
    test('renders input field with placeholder', () => {
        render(<Input type="text" placeholder="Enter text" name="testInput" />);
        expect(screen.getByPlaceholderText(/Enter text/i)).toBeInTheDocument();
    });
});
