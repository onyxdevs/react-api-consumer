import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { renderConnected } from 'lib/scripts/test-utils';
import HomePage from './HomePage';
import postsReducer, { initialState } from './store/reducers';

describe('testing HomePage component', () => {
    it('Renders the connected HomePage with initialState', () => {
        const { getByTestId } = renderConnected(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>,
            postsReducer,
            { initialState: { posts: initialState } }
        );

        // check first render before fetch
        const circularProgress = getByTestId('circular-progress');
        expect(circularProgress).toBeTruthy();
    });

    it('Renders the connected HomePage with data', () => {
        const fakeRequest = {
            data: [
                {
                    id: 90338,
                    title: 'Two Women Visiting',
                    imageId: 'e7146e61-6839-7eb2-d9b1-34f382be6594'
                }
            ],
            note: '',
            status: 'resolved',
            error: ''
        };

        const { getAllByText } = renderConnected(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>,
            postsReducer,
            { initialState: { posts: fakeRequest } }
        );

        // check second render after fetch
        expect(getAllByText(fakeRequest.data[0].title).length).toBeGreaterThan(0);
    });
});
