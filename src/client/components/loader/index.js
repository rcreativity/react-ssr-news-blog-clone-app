import React from 'react';
import { Tr } from './styled';

export default function Loader() {
  return (
    <Tr>
      <td></td>
      <td></td>
      <td>
        <span className="up_vote">
          <img src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif" alt="loader" />
        </span>
      </td>
      <td></td>
    </Tr>
  );
}
