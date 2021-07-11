import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export function renderConnected(
    ui,
    reducer,
    { initialState, store = createStore(reducer, initialState), ...renderOptions } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }

    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
