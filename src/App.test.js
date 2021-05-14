import React from 'react';
import {render, screen} from '@testing-library/react';
import App from "./App";
import userEvent from '@testing-library/user-event';


describe('<App /> tests', () => {
    it('should render the BlueButton property', () => {
        render(<App/>);
        expect(screen.getByText(/Blue Background/i)).toBeInTheDocument();
    })

    it('should change the background after click', () => {
        render(<App/>);
        userEvent.click(screen.getByTestId('blue-btn'));
        expect(screen.getByTestId('app-div')).toHaveStyle(`background: #0000FF`)
    })

    it('should change the background to red', () => {
        render(<App />);
        userEvent.click(screen.getByTestId('red-btn'));
        expect(screen.getByTestId('app-div')).toHaveStyle('background: #FF0000')
    }
    )
})
