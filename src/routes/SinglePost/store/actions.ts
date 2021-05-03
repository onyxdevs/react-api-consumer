import { logger } from 'lib/scripts/utils';
import { SET_POST, FETCH_POST, FETCH_POST_FAILED } from './constants';

export const setPost = (resData: { note: string; data: object[] }) => {
    logger.debug('[SinglePost]', 'actions', 'setPost');

    return {
        type: SET_POST,
        ...resData
    };
};

export const initPost = (postId: string | number) => {
    logger.debug('[SinglePost]', 'actions', 'initPost');

    return {
        type: FETCH_POST,
        postId
    };
};

export const fetchPostFailed = (error: { message: string }) => {
    logger.debug('[SinglePost]', 'actions', 'fetchPostFailed');

    return {
        type: FETCH_POST_FAILED,
        error
    };
};
