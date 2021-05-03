import { put } from 'redux-saga/effects';

import { setPosts, fetchPostsFailed } from './actions';
import api from 'apis';
import { logger } from 'lib/scripts/utils';

export function* initPostsSaga(): any {
    logger.debug('[HomePage]', 'saga', 'initPostsSaga');

    try {
        const resData = yield api.getPosts();
        const note = resData.info.license_text;
        // transform data
        const data = resData.data.map(
            (item: { id: string; title: string; date_display: string; image_id: string }) => ({
                id: item.id,
                title: item.title,
                dateText: item.date_display,
                imageId: item.image_id
            })
        );
        yield put(setPosts({ note, data }));
    } catch (error) {
        yield put(fetchPostsFailed(error));
    }
}
