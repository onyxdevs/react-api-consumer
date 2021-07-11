import React, { Suspense } from 'react';

import CircularProgress from './components/CircularProgress';
import Header from './components/Header';
import Routes from './routes';
import withErrorHandler from './hocs/withErrorHandler';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main className='container'>
                <Suspense fallback={<CircularProgress />}>
                    <Routes />
                </Suspense>
            </main>
        </>
    );
};

export default withErrorHandler(App);
