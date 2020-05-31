import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs-ext/plugin/relativeTime';

import Article from './index';
import { extractHostnameFromURLString } from '../../../helpers/domainExtractor';
dayjs.extend(relativeTime);

describe('Article Component', () => {
  const hideHandlerfn = jest.fn();
  const votesNewsHandlerfn = jest.fn();
  const props = {
    comments: '204',
    title: 'Blueprint – A React UI toolkit for the web',
    author: 'ika',
    posted_on: '2016-11-12T18:17:01.000Z',
    id: '12939232',
    web_url: 'https://blueprintjs.com/docs/',
    points: 603,
    votes: 4,
    hideHandlerFunction: hideHandlerfn,
    votesNewsHandlerFunction: votesNewsHandlerfn,
  };

  it('Get Total Comments of the News Article component', () => {
    const { getByTestId } = render(
      <table>
        <thead>
          <Article {...props} />
        </thead>
      </table>
    );
    expect(getByTestId('comments_count').textContent).toBe(props.comments);
  });

  it('Get Total Votes of the News Article component', () => {
    const { getByTestId } = render(
      <table>
        <thead>
          <Article {...props} />
        </thead>
      </table>
    );
    expect(Number(getByTestId('votes_count').textContent)).toBe(props.votes + props.points);
  });

  it('Get Title of the News Article component with author and years', () => {
    const { getByTestId } = render(
      <table>
        <thead>
          <Article {...props} />
        </thead>
      </table>
    );
    // debug();
    expect(getByTestId('news_title').textContent).toBe(
      `Blueprint – A React UI toolkit for the web(blueprintjs.com)by ika4 years ago[ Hide ]`
    );
  });

  it('Get Web URl of the News Article component', () => {
    const { getByTestId } = render(
      <table>
        <thead>
          <Article {...props} />
        </thead>
      </table>
    );
    expect(getByTestId('news_weburl').textContent).toBe(
      `(${extractHostnameFromURLString(props.web_url)})`
    );
  });

  it('Get Author of the News Article component', () => {
    const { getByTestId } = render(
      <table>
        <thead>
          <Article {...props} />
        </thead>
      </table>
    );
    expect(getByTestId('news_author').textContent).toBe(`by ${props.author}`);
  });

  it('Get Years of the News Article component', () => {
    const { getByTestId } = render(
      <table>
        <thead>
          <Article {...props} />
        </thead>
      </table>
    );
    expect(getByTestId('news_posted_date').textContent).toBe(dayjs(props.posted_on).fromNow());
  });
});
