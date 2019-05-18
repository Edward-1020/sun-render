import express from 'express';
import Home from './containers/Home/index.js';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();
const content = renderToString(<Home />);

app.get('/', function (req, res) {
    res.send(
        `
        <html>
            <head>
                <title>Hello</title>
            </head>
            <body>
                ${content}
            </body>
        </html>
        `
    )
})

const server = app.listen(3000);