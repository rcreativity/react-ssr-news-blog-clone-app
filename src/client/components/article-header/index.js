import React from 'react';
import { Tr } from './styled';
export default function ArticleHeader() {
  return (
    <Tr data-testid="article_header">
      <th>Comments</th>
      <th>Vote Count</th>
      <th>Up Vote</th>
      <th>News Details</th>
    </Tr>
  );
}
