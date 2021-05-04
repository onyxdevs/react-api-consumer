import React from 'react';
import { Link } from 'react-router-dom';

import styleClasses from './PostItem.module.scss';

export interface IPostItem {
    data: {
        id: string | number;
        title: string;
        imageId: string;
        dateText: string;
    };
}

const PostItem: React.FC<IPostItem> = ({ data }: IPostItem) => {
    if (!data || !(data && data.id && data.title && data.imageId)) return null;

    const { id, title, imageId, dateText } = data;

    const imgSrc = `https://www.artic.edu/iiif/2/${imageId}/full/600,/0/default.jpg`;
    const link = `/posts/${id}`;

    return (
        <div className={styleClasses['post-item']}>
            <Link to={link} className={styleClasses['post-item__link']}>
                <div className={styleClasses['post-item__inner']}>
                    <div className={styleClasses['post-item__img-wrapper']}>
                        <img src={imgSrc} className={styleClasses['post-item__img']} alt={title} />
                    </div>
                    <h4 className={styleClasses['post-item__title']}>{title}</h4>
                    {!!dateText && <p className={styleClasses['post-item__text']}>{dateText}</p>}
                </div>
            </Link>
        </div>
    );
};

export default PostItem;
