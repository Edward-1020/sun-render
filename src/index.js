const express = require('express');
const app = express();
const Home = require('./containers/Home/index.js');

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