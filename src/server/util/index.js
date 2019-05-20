import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes from '../../Routes';
import { Provider } from 'react-redux';
import getStore from '../../store/index';

export const render = (req, res) => {
    const store = getStore();
    const matchedRoutes = [];

    const matchedRoutes = matchRoutes(routes, req.path);

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