import { FETCH_STARTED, FETCH_ARTICLES, FETCH_ERROR } from '../actions/index';

const initialState = {
  loading: true,
  data: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, loading: true };
    case FETCH_ARTICLES:
      return { ...state, data: action.payload, loading: false };
    case FETCH_ERROR:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};
