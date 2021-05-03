import { connect } from 'react-redux';

import * as actions from './actions';

interface ISinglePost {
    post: {
        data: {
            id: string;
            title: string;
            image_id: string;
            artist_display: string;
            artist_id: string;
            artist_title: string;
            place_of_origin: string;
            date_display: string;
            medium_display: string;
            dimensions: string;
            credit_line: string;
            main_reference_number: string;
        } | null;
        note: string;
        status: string;
        error: string;
    };
}

const mapState = (state: ISinglePost) => ({
    data: state.post.data,
    note: state.post.note,
    status: state.post.status,
    error: state.post.error
});

const mapDispatch = {
    onInitPost: (postId: string) => actions.initPost(postId)
};

const connector = connect(mapState, mapDispatch);

export default connector;
