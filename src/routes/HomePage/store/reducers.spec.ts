import postsReducer, { initialState } from './reducers';
import { SET_POSTS, FETCH_POSTS_FAILED } from './constants';

describe('testing HomePage reducers', () => {
    const action = {
        type: '',
        data: [],
        note: '',
        error: {
            message: ''
        }
    };

    it('should return the initial state', () => {
        expect(postsReducer(undefined, action)).toMatchSnapshot();
    });

    it('should handle SET_POSTS', () => {
        expect(
            postsReducer(initialState, {
                ...action,
                type: SET_POSTS
            })
        ).toMatchSnapshot();
    });

    it('should handle FETCH_POSTS_FAILED', () => {
        expect(
            postsReducer(initialState, {
                ...action,
                type: FETCH_POSTS_FAILED
            })
        ).toMatchSnapshot();
    });
});
