import { takeEvery, takeLatest } from 'redux-saga/effects';

import { FETCH_POSTS } from 'routes/HomePage/store/constants';
import { FETCH_POST } from 'routes/SinglePost/store/constants';
import { initPostsSaga } from 'routes/HomePage/store/sagas';
import { initPostSaga } from 'routes/SinglePost/store/sagas';

function* globalSagas() {
    yield takeEvery(FETCH_POSTS, initPostsSaga);
    yield takeLatest(FETCH_POST, initPostSaga);
    // NOTE: other app sagas go here
}

export default globalSagas;
