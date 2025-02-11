import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import for matchers like toBeInTheDocument
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react'; // Use act from react

test('renders Just Another Movie Website header', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    });

    const headerElement = screen.getByText(/Just Another Movie Website/i);
    expect(headerElement).toBeInTheDocument();
});
