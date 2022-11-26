import { render, screen, waitFor ,rerender} from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from './App';




it('should search a user call "davilamateus"', async () => {

    const { getByText, getByPlaceholderText } = render(<App />)

    const input = screen.getByPlaceholderText('Find a user here…');
    const btnSearch = screen.getByText('Search');


    userEvent.type(input, 'davilamateus');
    userEvent.click(btnSearch);


    await waitFor(() => {
        expect(screen.getByText('https://github.com/davilamateus')).toBeInTheDocument()
    }, { timeout: 1000 });

});


it('Should click on View Profile of davilamateus and show the repositorie "lab_prevencao"', async () => {

    const { getByText, getByPlaceholderText, getByRole } = render(<App />)

    const input = screen.getByPlaceholderText('davilamateus');
    const btnSearch = screen.getByText('Search');

    userEvent.type(input, 'davilamateus');
    userEvent.click(btnSearch);



    const clickOnUserRepositories = () => {
        userEvent.click(screen.getByText('davilamateus'));

    }


    await waitFor(() => {
        clickOnUserRepositories()
    }, { timeout: 2000 });

    await waitFor(() => {
        expect(screen.getByText('lab_prevencao')).toBeInTheDocument();
    }, { timeout: 4000 });


});






