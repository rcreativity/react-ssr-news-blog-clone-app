import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs-ext/plugin/relativeTime';

import { Tr } from './styled';

import { extractHostnameFromURLString } from '../../../helpers/domainExtractor';

dayjs.extend(relativeTime);

export default function Article(props) {
  const {
    id,
    comments,
    points,
    title,
    posted_on,
    author,
    web_url,
    hideHandlerFunction,
    votesNewsHandlerFunction,
    votes,
  } = props;

  const urlExtracted = extractHostnameFromURLString(web_url);
  const posted_date_format = dayjs(posted_on).fromNow();

  return (
    <Tr>
      <td data-testid="comments_count">{comments}</td>
      <td data-testid="votes_count">{points + votes}</td>
      <td data-testid="votes_clicker">
        <span
          className="up_vote"
          data-testid="vote_news_article"
          onClick={() => votesNewsHandlerFunction(id)}
        >
          <img src="https://news.ycombinator.com/grayarrow2x.gif" alt="vote up" />
        </span>
      </td>
      <td className="articleTitle" data-testid="news_title">
        {title}
        <span className="web_url" data-testid="news_weburl">
          (
          <a href={web_url} target="_blank" rel="noopener noreferrer">
            {urlExtracted}
          </a>
          )
        </span>
        <span className="author_name" data-testid="news_author">
          by {author}
        </span>
        <span className="posted_time" data-testid="news_posted_date">
          {posted_date_format}
        </span>
        <span>
          <button
            data-testid="hide_news_article"
            type="button"
            onClick={() => hideHandlerFunction(id)}
          >
            [ Hide ]
          </button>
        </span>
      </td>
    </Tr>
  );
}
