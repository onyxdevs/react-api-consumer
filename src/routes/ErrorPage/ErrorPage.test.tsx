import ReactDOM from 'react-dom';

import ErrorPage from './ErrorPage';

it('<ErrorPage /> rendered successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorPage />, div);
});
