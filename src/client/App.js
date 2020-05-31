import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

import ErrorBoundary from './components/error-boundry/index';
import Header from './components/header/index';
import Footer from './components/footer/index';

const App = ({ route }) => {
  return (
    <div className="container">
      <Header />
      <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
      <Footer />
    </div>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  route: null,
};

export default {
  component: App,
};
