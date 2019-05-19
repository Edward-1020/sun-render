import express from 'express';
import {render} from './util/index';

const app = express();
app.use(express.static('public'));

app.get('*', function (req, res) {
    const content = render(req, res);
    res.send(content)
})

const server = app.listen(3000);