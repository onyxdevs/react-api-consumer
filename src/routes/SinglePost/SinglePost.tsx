import React, { useEffect } from 'react';
import { ConnectedProps } from 'react-redux';
import { useParams } from 'react-router-dom';

import connector from './store/connector';
import CircularProgress from 'components/CircularProgress';
import styleClasses from './SinglePost.module.scss';

type SinglePostReduxProps = ConnectedProps<typeof connector>;

const SinglePost: React.FC<SinglePostReduxProps> = (props: SinglePostReduxProps) => {
    const { onInitPost, data, note, status, error } = props;

    const params: { id: string } = useParams();
    const postId = params.id;

    useEffect(() => {
        if (postId && !error) {
            onInitPost(postId);
        }
    }, [onInitPost, error, postId]);

    if (status === 'resolved' && data && data.id.toString() === postId.toString()) {
        return (
            <div className={styleClasses['single-post']} data-testid='single-post'>
                <div className={styleClasses['single-post__content']}>
                    {!!data.image_id && (
                        <div className={styleClasses['single-post__img-wrapper']}>
                            <img
                                src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
                                className={styleClasses['single-post__img']}
                                alt={data.title}
                            />
                        </div>
                    )}
                    <div className={styleClasses['single-post__details']}>
                        <h1 className={styleClasses['single-post__title']}>{data.title}</h1>
                        {!!data.artist_display && (
                            <h3 className={styleClasses['single-post__subtitle']}>
                                {data.artist_display.split('\n').map((item, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            {i !== 0 && <br />}
                                            {item}
                                        </React.Fragment>
                                    );
                                })}
                            </h3>
                        )}

                        <ul className={styleClasses['single-post__list']}>
                            {!!data.artist_title && (
                                <li className={styleClasses['single-post__list__item']}>
                                    <span className={styleClasses['single-post__list__title']}>Artist</span>
                                    <span className={styleClasses['single-post__list__value']}>
                                        <a
                                            href={`https://www.artic.edu/artists/${data.artist_id}`}
                                            target='_blank'
                                            rel='noopener noreferrer'>
                                            {data.artist_title}
                                        </a>
                                    </span>
                                </li>
                            )}
                            <li className={styleClasses['single-post__list__item']}>
                                <span className={styleClasses['single-post__list__title']}>Title</span>
                                <span className={styleClasses['single-post__list__value']}>{data.title}</span>
                            </li>
                            <li className={styleClasses['single-post__list__item']}>
                                <span className={styleClasses['single-post__list__title']}>Origin</span>
                                <span className={styleClasses['single-post__list__value']}>{data.place_of_origin}</span>
                            </li>
                            <li className={styleClasses['single-post__list__item']}>
                                <span className={styleClasses['single-post__list__title']}>Date</span>
                                <span className={styleClasses['single-post__list__value']}>{data.date_display}</span>
                            </li>
                            {!!data.medium_display && (
                                <li className={styleClasses['single-post__list__item']}>
                                    <span className={styleClasses['single-post__list__title']}>Medium</span>
                                    <span className={styleClasses['single-post__list__value']}>
                                        {data.medium_display}
                                    </span>
                                </li>
                            )}
                            {!!data.medium_display && (
                                <li className={styleClasses['single-post__list__item']}>
                                    <span className={styleClasses['single-post__list__title']}>Dimensions</span>
                                    <span className={styleClasses['single-post__list__value']}>{data.dimensions}</span>
                                </li>
                            )}
                            {!!data.medium_display && (
                                <li className={styleClasses['single-post__list__item']}>
                                    <span className={styleClasses['single-post__list__title']}>Credit Line</span>
                                    <span className={styleClasses['single-post__list__value']}>{data.credit_line}</span>
                                </li>
                            )}
                            {!!data.medium_display && (
                                <li className={styleClasses['single-post__list__item']}>
                                    <span className={styleClasses['single-post__list__title']}>Reference Number</span>
                                    <span className={styleClasses['single-post__list__value']}>
                                        {data.main_reference_number}
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <h5 className={styleClasses['single-post__note']}>{note}</h5>
            </div>
        );
    }

    if (status === 'rejected' && error) {
        return <h3 style={{ textAlign: 'center', color: 'red' }}>{error}</h3>;
    }

    return <CircularProgress />;
};

export default connector(SinglePost);
