import { setPost, initPost, fetchPostFailed } from './actions';
import { SET_POST, FETCH_POST, FETCH_POST_FAILED } from './constants';

describe('testing SinglePost actions', () => {
    it('should create an action to set post data', () => {
        const resData = { note: '', data: [] };
        const expectedAction = {
            type: SET_POST,
            ...resData
        };
        expect(setPost(resData)).toEqual(expectedAction);
    });

    it('should create an action to initialize post', () => {
        const postId = 24306;
        const expectedAction = {
            type: FETCH_POST,
            postId
        };
        expect(initPost(postId)).toEqual(expectedAction);
    });

    it('should create an action to post initialization fail', () => {
        const error = { message: '' };
        const expectedAction = {
            type: FETCH_POST_FAILED,
            error
        };
        expect(fetchPostFailed(error)).toEqual(expectedAction);
    });
});
