import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { Table, Container, ButtonGroup } from './styled'
import { getNews } from '../actions/index';

const NewsArticle = (props) => {
  const dispatch = useDispatch()
  const [pageNo, setPageNo] = useState(1)

  useEffect(() => {
    setPageNo(pageNo + 1)
  }, [])

  function getNextPage() {
    if (pageNo > 1) {
      setPageNo(pageNo + 1)
      dispatch(getNews(pageNo))
    }

  }

  function getPreviousPage() {
    if (pageNo >= 1) {
      setPageNo(pageNo - 1)
      dispatch(getNews(pageNo))
    }

  }

  return (
    <Container>
      <Helmet key={Math.random()}>
        <title>News Clone</title>
        <meta property="og:title" content="News Clone" />
        <meta
          name="description"
          content="Breaking news,latest articles, popular articles from most popular news websites of the world"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://react-ssr-news-clone.herokuapp.com" />
      </Helmet>
      <Table>
        <thead>
          <tr>
            <th>Comments</th>
            <th>Vote Count</th>
            <th>Up Vote</th>
            <th>News Details</th>
          </tr>
        </thead>
        <tbody>
          {props.news.map(({ points, title, relevancy_score }, index) => (
            <tr key={index}>
              <td>{points}</td>
              <td>{relevancy_score}</td>
              <td >
                <span className="up_vote">🔼</span>
              </td>
              <td style={{ textAlign: 'left' }}>{title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonGroup>
        <button onClick={getPreviousPage}>Previous</button>
        <span></span>
        <button onClick={getNextPage}>Next</button>
      </ButtonGroup>
    </Container>
  )
};


const mapStateToProps = state => {
  console.log(state.news.hits)
  return {
    news: state.news.hits
  };
};

const loadData = (store, param) => {
  console.log(param)
  return store.dispatch(getNews(param));
};

NewsArticle.propTypes = {
  news: PropTypes.arrayOf(PropTypes.any),
  location: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
  getNews: PropTypes.func
};

NewsArticle.defaultProps = {
  news: [],
  location: null,
  match: null,
  getNews: null
};

export default {
  component: connect(
    mapStateToProps,
    { getNews }
  )(NewsArticle),
  loadData
};
