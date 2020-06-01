import fetch from 'isomorphic-fetch';

export const FETCH_STARTED = 'fetch_started';
export const FETCH_ARTICLES = 'fetch_articles';
export const FETCH_ERROR = 'fetch_error';

// https://hn.algolia.com/api/v1/search?page=2&hitsPerPage=10
// https://hn.algolia.com/api/v1/search?query=react&page=1
export const getNews = (pageNo) => async (dispatch) => {
  if (pageNo) {
    return fetch(`https://hn.algolia.com/api/v1/search?page=${pageNo}&query=react&hitsPerPage=15`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: FETCH_STARTED,
        });
        //setTimeout(() => {
        dispatch({
          type: FETCH_ARTICLES,
          payload: res.hits,
        });
        //}, 1000);
      })
      .catch((err) => {
        dispatch({
          type: FETCH_ERROR,
          error: err,
        });
      });
  } else {
    return fetch(`https://hn.algolia.com/api/v1/search?page=1&query=react&hitsPerPage=15`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: FETCH_STARTED,
        });
        dispatch({
          type: FETCH_ARTICLES,
          payload: res.hits,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_ERROR,
          error: err,
        });
      });
  }
};
