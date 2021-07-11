import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import config from './config';
import reportWebVitals from './reportWebVitals';
import store from './store';
import App from './App';
import './lib/styles/main.scss';

/**
 * Scroll to top when changing route
 * Pass preventScrollToTop as location parameter to disable this => { preventScrollToTop: true }
 */
const ScrollToTop: React.FC<{ history: { location: { preventScrollToTop?: boolean } } }> = (props) => {
    if (!props.history.location.preventScrollToTop) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    return null;
};

const app = (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename={config.APP_BASE}>
                <Route component={ScrollToTop} />
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
