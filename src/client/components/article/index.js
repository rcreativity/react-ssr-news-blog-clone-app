import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs-ext/plugin/relativeTime';

import { Tr } from './styled';

import { extractHostnameFromURLString } from '../../../helpers/domainExtractor';

dayjs.extend(relativeTime);

export default function Article(props) {
  const { id, comments, points, title, posted_on, author, web_url, hideHandlerFunction } = props;

  const urlExtracted = extractHostnameFromURLString(web_url);
  const posted_date_format = dayjs(posted_on).fromNow();

  return (
    <Tr>
      <td>{comments}</td>
      <td>{points}</td>
      <td>
        <span className="up_vote">
          <img src="https://news.ycombinator.com/grayarrow2x.gif" alt="vote up" />
        </span>
      </td>
      <td className="articleTitle">
        {title}
        <span className="web_url">
          (
          <a href={web_url} target="_blank">
            {urlExtracted}
          </a>
          )
        </span>
        <span className="author_name">by {author}</span>
        <span className="posted_time">{posted_date_format}</span>
        <span>
          <button type="button" onClick={() => hideHandlerFunction(id)}>
            [ Hide ]
          </button>
        </span>
      </td>
    </Tr>
  );
}
