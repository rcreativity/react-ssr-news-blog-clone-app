import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './index';

it('Header component', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(getByTestId('site_title').textContent).toBe('Hacker News');
});
