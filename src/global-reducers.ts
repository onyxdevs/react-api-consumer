import { combineReducers } from 'redux';

import postsReducer from 'routes/HomePage/store/reducers';
import postReducer from 'routes/SinglePost/store/reducers';

const createGlobalReducer = combineReducers({
    posts: postsReducer,
    post: postReducer
    // NOTE: other app reducers go here
});

export default createGlobalReducer;
