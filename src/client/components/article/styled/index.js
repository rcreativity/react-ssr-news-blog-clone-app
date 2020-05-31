import styled from 'styled-components';

const Tr = styled.tr`
  img {
    width: 12px;
  }
  .articleTitle {
    span {
      font-size: 12px;
      &.web_url {
        margin-left: 10px;
        color: rgb(138, 136, 132);
        a {
          text-decoration: none;
          color: rgb(138, 136, 132);
          transition: all 200ms;
          &:hover {
            color: #333;
          }
        }
      }
      &.author_name {
        margin-left: 5px;
      }
      &.posted_time {
        margin-left: 5px;
      }
    }
  }
`;

export { Tr };
