import { GET_USER_INFO, USER_INFO_RECEIVED } from '../actions';

const initialState = {
  authenticated: false,
  loading: false,
  settings: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, loading: true};
    case USER_INFO_RECEIVED:
      return { ...state, ...action.data, loading: false, authenticated: true };
    default:
      return state;
  }
}
