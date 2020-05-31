import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer } from './styled';

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src="https://news.ycombinator.com/y18.gif" alt="logo" /> <span>Hacker News</span>
      </Link>
    </HeaderContainer>
  );
}
