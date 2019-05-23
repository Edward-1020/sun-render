import { CHANGE_LOGIN } from './constants';

const changeLogin = (value) => {
    return {
        type: CHANGE_LOGIN,
        value
    }
}

export const login = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/a')
            .then((res) => {
                dispatch(changeLogin(res.data.data.login))
            })
    }
} 

export const getHeaderInfo = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/a')
            .then((res) => {
                dispatch(changeLogin(res.data.data.login))
            })
    }
}