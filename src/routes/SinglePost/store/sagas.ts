import { put } from 'redux-saga/effects';

import { setPost, fetchPostFailed } from './actions';
import api from 'apis';
import { logger } from 'lib/scripts/utils';

export function* initPostSaga(action: any): any {
    logger.debug('[SinglePost]', 'saga', 'initPostSaga');

    try {
        const resData = yield api.getPost(action.postId);
        const note = resData.info.license_text;
        const data = resData.data;
        yield put(setPost({ note, data }));
    } catch (error) {
        yield put(fetchPostFailed(error));
    }
}
