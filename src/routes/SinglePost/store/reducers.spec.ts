import postReducer, { initialState } from './reducers';
import { SET_POST, FETCH_POST_FAILED } from './constants';

describe('testing SinglePost reducers', () => {
    const action = {
        type: '',
        data: {},
        note: '',
        error: {
            message: ''
        }
    };

    it('should return the initial state', () => {
        expect(postReducer(undefined, action)).toMatchSnapshot();
    });

    it('should handle SET_POST', () => {
        expect(
            postReducer(initialState, {
                ...action,
                type: SET_POST
            })
        ).toMatchSnapshot();
    });

    it('should handle FETCH_POST_FAILED', () => {
        expect(
            postReducer(initialState, {
                ...action,
                type: FETCH_POST_FAILED
            })
        ).toMatchSnapshot();
    });
});
