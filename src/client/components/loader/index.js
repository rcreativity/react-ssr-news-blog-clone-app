import React from 'react';
import { Tr } from './styled';

export default function Loader() {
  return (
    <Tr>
      <td></td>
      <td></td>
      <td>
        <span className="up_vote">
          <div className="loader"></div>
        </span>
      </td>
      <td></td>
    </Tr>
  );
}
