import fetch from "isomorphic-fetch";

export const FETCH_ARTICLES = 'fetch_articles';

export const getNews = (pageNo = 1) => async dispatch => {
  return fetch(
    `https://hn.algolia.com/api/v1/search?query=react&page=${pageNo}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      dispatch({
        type: FETCH_ARTICLES,
        payload: res
      });
    });
}
