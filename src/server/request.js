import axios from 'axios';

const createInstance = (req) => axios.create({
    baseURL: '/absolute',
    headers: {
        cookie: req.get('cookie')
    }
})

export default createInstance;