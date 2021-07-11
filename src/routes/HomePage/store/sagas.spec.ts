import { runSaga } from 'redux-saga';
import { initPostsSaga } from './sagas';
import { setPosts, fetchPostsFailed } from './actions';
import api from 'lib/scripts/apis';

describe('testing HomePage sagas', () => {
    it('should be called once and dispatch setPosts action', async () => {
        const getPosts = jest
            .spyOn(api, 'getPosts')
            .mockImplementation(() => Promise.resolve({ info: { license_text: '' }, data: [] }));
        const dispatched: object[] = [];

        await runSaga(
            {
                dispatch: (action: {}) => dispatched.push(action)
            },
            initPostsSaga
        );

        expect(getPosts).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([setPosts({ note: '', data: [] })]);
        getPosts.mockClear();
    });

    it('should be called once and dispatch fetchPostsFailed action', async () => {
        const getPosts = jest.spyOn(api, 'getPosts').mockImplementation(() => Promise.reject({ message: '' }));
        const dispatched: object[] = [];

        await runSaga(
            {
                dispatch: (action: {}) => dispatched.push(action)
            },
            initPostsSaga
        );

        expect(getPosts).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([fetchPostsFailed({ message: '' })]);
        getPosts.mockClear();
    });
});
