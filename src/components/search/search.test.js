import { BrowserRouter } from 'react-router-dom';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import Search from '../search/Search';


it('Should show a message of erro "This field is required"' , ()=>{


    render(
        <BrowserRouter>
            <Search/>
        </BrowserRouter>
    )

    const searchBTN = screen.getByText('Search');

    userEvent.click(searchBTN);

    expect(screen.getByText('This field is required')).toBeInTheDocument();

});

it(`Shouldn't show a message of erro "This field is required"` , ()=>{


    render(
        <BrowserRouter>
            <Search/>
        </BrowserRouter>
    )
    const input = screen.getByPlaceholderText('Find a user here…');
    const searchBTN = screen.getByText('Search');
    userEvent.type(input,'davilamateus');
    userEvent.click(searchBTN);

    expect(screen.queryByText('This field is required')).not.toBeInTheDocument();
});