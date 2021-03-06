import { CHANGE_LIST } from './constants';

const changeList = (list) => {
    return {
        type: CHANGE_LIST,
        list
    }
}

export const getHomeList = (server) => {
    let url = ''
    if (server) {
        url = 'a';
    } else {
        url = 'b';
    }
    return (dispatch) => {
        const list = [
            {
                id: '1',
                title: 'a'
            },
            {
                id: '2',
                title: 'b'
            },
            {
                id: '3',
                title: 'c'
            },
        ];
        dispatch(changeList(list));
        return Promise.resolve(list);
    }
}