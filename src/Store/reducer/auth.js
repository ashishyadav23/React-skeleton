import * as actionTypes from '../actions/actionTypes';
const initialState = {
    token: null,
    clientId: null
}

const AuthReducer = function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_AUTH:
            console.log("Demo2");
            let authObj = { token: action.token, clientId: action.clientId }
            localStorage.setItem('ksAuth', JSON.stringify(authObj));
            return { ...state, token: action.token, clientId: action.clientId }
        case actionTypes.REMOVE_AUTH:
            return { ...state, token: null, clientId: null }
        case actionTypes.CHECK_AUTH:
            return { ...state }
        default:
            return { ...state }
    }
}
export default AuthReducer