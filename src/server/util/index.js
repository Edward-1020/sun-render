import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../../Routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


export const render = (req, res) => {
    const reducer = (state = {name: 'dell'}, action) => {
        return state;
    }
    const store = createStore(reducer);
    

    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                {Routes}
            </StaticRouter>
        </Provider>
    ));
    return `
    <html>
        <head>
            <title>Hello</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/index.js">
            </script>
        </body>
    </html>
    `
}