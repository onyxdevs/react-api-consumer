import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PostItem from './PostItem';

it('<PostItem /> rendered successfully', () => {
    const div = document.createElement('div');
    const data = {
        dateText: '1919/21',
        id: 24306,
        imageId: '702580d8-451e-0b0c-bcc1-bac62e5f6631',
        title: 'Blue and Green Music'
    };
    ReactDOM.render(
        <BrowserRouter>
            <PostItem data={data} />
        </BrowserRouter>,
        div
    );
});
