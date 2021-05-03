import React from 'react';

import styleClasses from './ErrorPage.module.scss';

const ErrorPage: React.FC = () => (
    <div className={styleClasses['error']}>
        <h1 className={styleClasses['error__title']}>Error</h1>
        <h2 className={styleClasses['error__code']}>404</h2>
    </div>
);

export default ErrorPage;
