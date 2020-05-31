import React from 'react';
import { render } from '@testing-library/react';
import ArticleHeader from './index';

it('News Article Header', () => {
  const { getByTestId } = render(
    <table>
      <thead>
        <ArticleHeader />
      </thead>
    </table>
  );
  expect(getByTestId('article_header').innerHTML).toBe(
    `<th>Comments</th><th>Vote Count</th><th>Up Vote</th><th>News Details</th>`
  );
});
