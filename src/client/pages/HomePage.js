import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { Table, Container, ButtonGroup, Hr } from './styled';
import { getNews } from '../actions/index';
import { getItem, setItem } from '../../helpers/localStorage';

import MyResponsiveLine from '../components/line-chart/index';
import ArticleHeader from '../components/article-header/index';
import Article from '../components/article/index';
import Loader from '../components/loader/index';

const HomePage = (props) => {
  const { getNews: loadArticles, match } = props;

  const [graphData, setGraphData] = useState([]);

  const [nextPage, setNextPage] = useState(match.params.id ? match.params.id : 2);
  const [prevPage, setPrevPage] = useState(match.params.id);

  const [hideNews, setHideNews] = useState(
    getItem('hide_news') ? JSON.parse(getItem('hide_news')) : []
  );

  function loopData() {
    setGraphData([]);
    let graphValues = props.news.reduce(function (result, item, index) {
      console.log(item);
      var pointsValue = item['points'];
      var IdValue = item['objectID'];
      var obj = {};
      obj['name'] = IdValue;
      obj['uv'] = pointsValue;
      result.push(obj);
      return result;
    }, []);
    setGraphData([...graphValues]);
    console.log(graphData);
  }

  useEffect(() => {
    loopData();
  }, [props.loading]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (match.params.id) {
      loadArticles(match.params.id);
      setNextPage(Number(match.params.id) + 1);
      if (Number(match.params.id) > 1) {
        setPrevPage(Number(match.params.id) - 1);
      }
    } else {
      loadArticles();
    }
  }, [loadArticles, match.params.id]);

  function hideNewsFunction(id) {
    const getAllHideNews = getItem('hide_news') ? JSON.parse(getItem('hide_news')) : [];
    setItem('hide_news', JSON.stringify([...getAllHideNews, id]));
    setHideNews([...getAllHideNews, id]);
    setGraphData([...getAllHideNews, id]);
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
          <ArticleHeader />
        </thead>
        <tbody>
          {props.loading ? (
            <Loader />
          ) : (
            props.news.map(
              ({ objectID, num_comments, points, title, url, author, created_at }, index) => {
                if (hideNews.indexOf(objectID) > -1) return null;
                return (
                  <Article
                    key={index}
                    id={objectID}
                    comments={num_comments}
                    points={points}
                    title={title}
                    posted_on={created_at}
                    web_url={url}
                    author={author}
                    hideHandlerFunction={hideNewsFunction}
                  />
                );
              }
            )
          )}
        </tbody>
      </Table>
      <ButtonGroup>
        {Number(match.params.id) === 2 || !match.params.id ? (
          <Link to="/"> Previous</Link>
        ) : (
          <Link to={'/articles/' + prevPage}> Previous</Link>
        )}

        <span className="button_divider"></span>
        <Link to={'/articles/' + nextPage}> Next</Link>
      </ButtonGroup>
      <Hr />
      <br />
      {graphData && <MyResponsiveLine data={graphData} />}
      <br />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news.data,
    loading: state.news.loading,
  };
};

const loadData = (store, params) => {
  return store.dispatch(getNews(params));
};

HomePage.propTypes = {
  news: PropTypes.arrayOf(PropTypes.any),
  getNews: PropTypes.func,
  loading: PropTypes.bool,
  location: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
};

HomePage.defaultProps = {
  news: [],
  location: null,
  match: null,
  getNews: null,
  loading: true,
};

export default {
  component: connect(mapStateToProps, { getNews })(HomePage),
  loadData,
};
