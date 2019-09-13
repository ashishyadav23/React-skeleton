import * as actionTypes from './actionTypes';
import axiosInstance from '../../axios/axios';
export const storeAuth = (token, clientId) => {
    return {
        type: actionTypes.SET_AUTH,
        token,
        clientId
    }
}
export const removeAuth = () => {
    return {
        type: actionTypes.REMOVE_AUTH,
    }
}

export const checkAuth = () => {
    return {
        type: actionTypes.CHECK_AUTH
    }
}
export const fetchPosts = id => {
    return dispatch => {
        dispatch({ type: actionTypes.CHECK_AUTH });
        //   dispatch(requestPosts(subreddit))
        return axiosInstance.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        // return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        //     .then(response => response.json())
    }
}