import React from 'react';

import styleClasses from './CircularProgress.module.scss';

const CircularProgress: React.FC<{ extraClasses?: string[] }> = ({ extraClasses }) => {
    const wrapperClasses = [styleClasses['loader']];

    if (extraClasses) {
        wrapperClasses.push(...extraClasses);
    }

    return (
        <div className={wrapperClasses.join(' ')} data-testid='circular-progress'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            Loading...
        </div>
    );
};

export default CircularProgress;
