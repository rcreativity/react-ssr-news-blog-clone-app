import fetch from "isomorphic-fetch";

export const FETCH_ARTICLES = 'fetch_articles';

// https://hn.algolia.com/api/v1/search?page=2&hitsPerPage=10
// https://hn.algolia.com/api/v1/search?query=react&page=1
export const getNews = (pageNo = 1) => async dispatch => {
  return fetch(
    `https://hn.algolia.com/api/v1/search?page=${pageNo}&query=react&hitsPerPage=15`
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
