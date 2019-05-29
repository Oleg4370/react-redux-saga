import makeActionCreator from '../../utils/makeActionCreator';

export const USER_INFO_RECEIVED = 'USER_INFO_RECEIVED';
export const GET_USER_INFO = 'GET_USER_INFO';
export const USER_LOGOUT = 'USER_LOGOUT';
export const getUserInfo = makeActionCreator(GET_USER_INFO, 'user', 'password', 'rememberMe');
export const receivedUserInfo = makeActionCreator(USER_INFO_RECEIVED, 'data');
