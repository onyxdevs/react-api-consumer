import { logger } from 'lib/scripts/utils';
import { SET_POSTS, FETCH_POSTS_FAILED } from './constants';

export const initialState = {
    data: [],
    note: '',
    status: 'pending',
    error: ''
};

interface IPostsReducerAction {
    type: string;
    data: object[];
    note: string;
    error: {
        message: string;
    };
}

const postsReducer = (state: object = initialState, action: IPostsReducerAction) => {
    const actions: {
        [key: string]: () => {};
    } = {
        [SET_POSTS]: () => ({
            ...state,
            data: action.data,
            note: action.note,
            status: 'resolved',
            error: ''
        }),

        [FETCH_POSTS_FAILED]: () => ({
            ...state,
            data: [],
            status: 'rejected',
            error: action.error.message
        })
    };

    if (typeof actions[action.type] !== 'undefined') {
        logger.debug('[HomePage]', 'reducer', 'postsReducer', action);
        return actions[action.type]();
    }

    return state;
};

export default postsReducer;
