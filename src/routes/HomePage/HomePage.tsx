import React, { useEffect } from 'react';
import { ConnectedProps } from 'react-redux';

import connector from './store/connector';
import CircularProgress from 'components/CircularProgress';
import PostItem, { IPostItem } from 'components/PostItem';
import styleClasses from './HomePage.module.scss';

type HomePageReduxProps = ConnectedProps<typeof connector>;

const HomePage: React.FC<HomePageReduxProps> = (props: HomePageReduxProps) => {
    const { onInitPosts, data, note, status, error } = props;

    useEffect(() => {
        if (data && !data.length && !error) {
            onInitPosts();
        }
    }, [onInitPosts, data, error]);

    if (status === 'resolved') {
        return (
            <div className={styleClasses['posts']}>
                <div className={styleClasses['posts__items']}>
                    {!!data &&
                        data.length &&
                        data.map((item: IPostItem['data']) => <PostItem key={item.id} data={item} />)}
                </div>
                <h5 className={styleClasses['posts__note']}>{note}</h5>
            </div>
        );
    }

    if (status === 'rejected' && error) {
        return <h3 style={{ textAlign: 'center', color: 'red' }}>{error}</h3>;
    }

    return <CircularProgress />;
};

export default connector(HomePage);
