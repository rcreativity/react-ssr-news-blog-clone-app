import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { Table, Container, ButtonGroup } from './styled'
import { getNews } from '../actions/index';


const NewsArticle = (props) => {
  const { match } = props;
  const { getNews: loadArticles } = props;

  const dispatch = useDispatch()
  const [pageNo, setPageNo] = useState(1);
  const [nextPage, setNextPage] = useState(match.params.id)

  useEffect(() => {
    setPageNo(pageNo + 1)
  }, [])



  useEffect(() => {
    window.scrollTo(0, 0);
    if (match.params.id) {
      loadArticles(match.params.id);
      setNextPage(Number(match.params.id) + 1)
    } else {
      loadArticles();
    }
  }, [loadArticles, match.params.id]);

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
          {props.news.length === 0 ? (
            <tr>
              <td></td>
              <td></td>
              <td >
                <span className="up_vote">
                  <h1 style={{ color: '#ff732e' }}>No Data Available</h1>
                </span>
              </td>
              <td></td>
            </tr>
          ) : (
              props.news.map(({ num_comments, points, title, created_at_i }, index) => (
                <tr key={index}>
                  <td>{num_comments ? num_comments : 0}</td>
                  <td>{points ? points : 0}</td>
                  <td >
                    <span className="up_vote">
                      <img style={{ width: '12px' }} src="https://news.ycombinator.com/grayarrow2x.gif" alt="vote up" />
                    </span>
                  </td>
                  <td className="articleTitle">
                    <span>{title ? title : 'No Title'}</span>
                    <span id={created_at_i}>
                      <button type='button'>[ Hide ]</button>
                    </span>
                  </td>
                </tr>
              ))
            )}
        </tbody>
      </Table>
      {/* <Link to="/articles/${match.params.id}">Page 2</Link> */}
      <Link to={'/articles/' + nextPage}> Page {nextPage}</Link>
      <ButtonGroup>
        <button onClick={getPreviousPage}>Previous</button>
        <span></span>
        <button onClick={getNextPage}>Next</button>
      </ButtonGroup>
    </Container >
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
