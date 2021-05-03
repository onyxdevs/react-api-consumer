import { logger } from 'lib/scripts/utils';
import { SET_POST, FETCH_POST_FAILED } from './constants';

export const initialState = {
    data: null,
    note: '',
    status: 'pending',
    error: ''
};

interface IPostReducerAction {
    type: string;
    data: object;
    note: string;
    error: {
        message: string;
    };
}

const postReducer = (state = initialState, action: IPostReducerAction) => {
    const actions: {
        [key: string]: () => {};
    } = {
        [SET_POST]: () => ({
            ...state,
            data: action.data,
            note: action.note,
            status: 'resolved',
            error: ''
        }),

        [FETCH_POST_FAILED]: () => ({
            ...state,
            data: [],
            status: 'rejected',
            error: action.error.message
        })
    };

    if (typeof actions[action.type] !== 'undefined') {
        logger.debug('[SinglePost]', 'reducer', 'postReducer', action);
        return actions[action.type]();
    }

    return state;
};

export default postReducer;
