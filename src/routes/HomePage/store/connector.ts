import { connect } from 'react-redux';

import * as actions from './actions';

type HomePageProps = {
    posts: {
        data: [];
        note: string;
        status: string;
        error: string;
    };
};

const mapState = (state: HomePageProps) => ({
    data: state.posts.data,
    note: state.posts.note,
    status: state.posts.status,
    error: state.posts.error
});

const mapDispatch = {
    onInitPosts: () => actions.initPosts()
};

const connector = connect(mapState, mapDispatch);

export default connector;
