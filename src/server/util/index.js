import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import routes from '../../Routes';
import { Provider } from 'react-redux';
import getStore from '../../store/index';

export const render = (req, res) => {
    const store = getStore();
    const matchRoutes = [];

    routes.some(route => {
        const match = matchPath(req.path, route);
        if (match) {
            matchRoutes.push(route);
        }
    })

    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    {routes.map(route => (
                            <Route {...route} />
                    ))}
                </div>
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