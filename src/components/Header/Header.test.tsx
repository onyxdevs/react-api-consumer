import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

it('<Header /> rendered successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>,
        div
    );
});
