import { logger } from 'lib/scripts/utils';
import { SET_POSTS, FETCH_POSTS, FETCH_POSTS_FAILED } from './constants';

export const setPosts = (resData: { note: string; data: object[] }) => {
    logger.debug('[HomePage]', 'actions', 'setPosts');

    return {
        type: SET_POSTS,
        ...resData
    };
};

export const initPosts = () => {
    logger.debug('[HomePage]', 'actions', 'initPosts');

    return {
        type: FETCH_POSTS
    };
};

export const fetchPostsFailed = (error: { message: string }) => {
    logger.debug('[HomePage]', 'actions', 'fetchPostsFailed');

    return {
        type: FETCH_POSTS_FAILED,
        error
    };
};
