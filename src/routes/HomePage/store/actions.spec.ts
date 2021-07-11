import { setPosts, initPosts, fetchPostsFailed } from './actions';
import { SET_POSTS, FETCH_POSTS, FETCH_POSTS_FAILED } from './constants';

describe('testing HomePage actions', () => {
    it('should create an action to set posts data', () => {
        const resData = { note: '', data: [] };
        const expectedAction = {
            type: SET_POSTS,
            ...resData
        };
        expect(setPosts(resData)).toEqual(expectedAction);
    });

    it('should create an action to initialize posts', () => {
        const expectedAction = {
            type: FETCH_POSTS
        };
        expect(initPosts()).toEqual(expectedAction);
    });

    it('should create an action to posts initialization fail', () => {
        const error = { message: '' };
        const expectedAction = {
            type: FETCH_POSTS_FAILED,
            error
        };
        expect(fetchPostsFailed(error)).toEqual(expectedAction);
    });
});
