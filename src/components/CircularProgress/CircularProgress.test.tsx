import ReactDOM from 'react-dom';

import CircularProgress from './CircularProgress';

it('<CircularProgress /> rendered successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CircularProgress />, div);
});
