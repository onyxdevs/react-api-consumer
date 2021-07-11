import { runSaga } from 'redux-saga';
import { initPostSaga } from './sagas';
import { setPost, fetchPostFailed } from './actions';
import api from 'lib/scripts/apis';

describe('testing SinglePost sagas', () => {
    it('should be called once and dispatch setPost action', async () => {
        const getPost = jest
            .spyOn(api, 'getPost')
            .mockImplementation(() => Promise.resolve({ info: { license_text: '' }, data: [] }));
        const dispatched: object[] = [];

        await runSaga(
            {
                dispatch: (action: {}) => dispatched.push(action)
            },
            initPostSaga,
            { postId: 24306 }
        );

        expect(getPost).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([setPost({ note: '', data: [] })]);
        getPost.mockClear();
    });

    it('should be called once and dispatch fetchPostFailed action', async () => {
        const getPost = jest.spyOn(api, 'getPost').mockImplementation(() => Promise.reject({ message: '' }));
        const dispatched: object[] = [];

        await runSaga(
            {
                dispatch: (action: {}) => dispatched.push(action)
            },
            initPostSaga,
            { postId: 24306 }
        );

        expect(getPost).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([fetchPostFailed({ message: '' })]);
        getPost.mockClear();
    });
});
