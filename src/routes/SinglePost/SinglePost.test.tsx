import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { renderConnected } from 'lib/scripts/test-utils';
import SinglePost from './SinglePost';
import postReducer, { initialState } from './store/reducers';

describe('testing SinglePost component', () => {
    it('Renders the connected SinglePost with initialState', () => {
        const { getByTestId } = renderConnected(
            <BrowserRouter>
                <SinglePost />
            </BrowserRouter>,
            postReducer,
            { initialState: { post: initialState } }
        );

        // check first render before fetch
        const circularProgress = getByTestId('circular-progress');
        expect(circularProgress).toBeTruthy();
    });

    it('Renders the connected SinglePost with data', () => {
        const fakePost = {
            data: {
                id: 84256,
                title: 'The Horse'
            },
            note: '',
            status: 'resolved',
            error: ''
        };

        const history = createMemoryHistory({ initialEntries: [`/posts/${fakePost.data.id}`] });

        const { getAllByText } = renderConnected(
            <Router history={history}>
                <Route path={'/posts/:id'}>
                    <SinglePost />
                </Route>
            </Router>,
            postReducer,
            { initialState: { post: fakePost } }
        );

        // check second render after fetch
        expect(getAllByText(fakePost.data.title).length).toBeGreaterThan(0);
    });
});
