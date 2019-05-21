import express from 'express';
import proxy from 'express-http-proxy';
import { render } from './util/index';
import { getStore } from '../store/index';
import { matchRoutes } from 'react-router-config';
import routes from '../Routes';

const app = express();
app.use(express.static('public'));

app.use('/api', proxy('http://localhost:3000', {
    proxyReqPathResolver: function (req) {
        return '/ssr/api' + req.url;
    }
}));

app.get('*', function (req, res) {
    const store = getStore();
    let matchedRoutes = matchRoutes(routes, req.path);
    let promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            promises.push(item.route.loadData(store));
        }
    })
    Promise.all(promises).then(() => {
        res.send(render(store, routes, req));
    });
})

const server = app.listen(3000);