import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { Table, Container, ButtonGroup } from './styled';
import { getNews } from '../actions/index';
import { getItem, setItem } from '../../helpers/localStorage';

import MyResponsiveLine from '../components/line-chart/index';
import ArticleHeader from '../components/article-header/index';
import Article from '../components/article/index';
import Loader from '../components/loader/index';

const HomePage = (props) => {
  const { getNews: loadArticles } = props;

  const [graphData, setGraphData] = useState([
    { name: 'Page A', uv: 4000 },
    { name: 'Page B', uv: 3000 },
    { name: 'Page C', uv: 2000 },
    { name: 'Page D' },
    { name: 'Page E', uv: 1890 },
    { name: 'Page F', uv: 2390 },
    { name: 'Page G', uv: 3490 },
  ]);

  const [hideNews, setHideNews] = useState(
    getItem('hide_news') ? JSON.parse(getItem('hide_news')) : []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    loadArticles();
  }, [loadArticles]);

  function hideNewsFunction(id) {
    const getAllHideNews = getItem('hide_news') ? JSON.parse(getItem('hide_news')) : [];
    setItem('hide_news', JSON.stringify([...getAllHideNews, id]));
    setHideNews([...getAllHideNews, id]);
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
        <Link to="/">Previous</Link>
        <span className="button_divider"></span>
        <Link to="/articles/2">Next</Link>
      </ButtonGroup>

      <br />
      <MyResponsiveLine data={graphData} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news.data,
    loading: state.news.loading,
  };
};

const loadData = (store) => {
  return store.dispatch(getNews());
};

HomePage.propTypes = {
  news: PropTypes.arrayOf(PropTypes.any),
  getNews: PropTypes.func,
  loading: PropTypes.bool,
};

HomePage.defaultProps = {
  news: [],
  getNews: null,
  loading: true,
};

export default {
  component: connect(mapStateToProps, { getNews })(HomePage),
  loadData,
};
