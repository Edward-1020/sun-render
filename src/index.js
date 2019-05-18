import express from 'express';
import Home from './containers/Home/index.js';

const app = express();

app.get('/', function (req, res) {
    res.send(
        `
        <html>
            <head>
                <title>Hello</title>
            </head>
            <body>
                <p>Hello World</p>
            </body>
        </html>
        `
    )
})

const server = app.listen(3000);