import React from 'react';
import { Tr } from './styled';
export default function ArticleHeader() {
  return (
    <Tr>
      <th>Comments</th>
      <th>Vote Count</th>
      <th>Up Vote</th>
      <th>News Details</th>
    </Tr>
  );
}
