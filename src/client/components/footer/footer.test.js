import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

it('Footer Componenet', () => {
  const { container } = render(<Footer />);
  expect(container.innerHTML).toBe(
    `<div class="styled__FooterContainer-wnfq7x-0 gajCeU">Footer</div>`
  );
});
