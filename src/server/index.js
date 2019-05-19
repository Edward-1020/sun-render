import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';

const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    const content = renderToString((
        <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
    ));

    res.send(
        `
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
    )
})

const server = app.listen(3000);