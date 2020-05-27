import React from 'react';
import { renderRoutes } from 'react-router-config';
import ErrorBoundary from './components/ErrorBoundry';

import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
};

export default {
  component: App,
};
