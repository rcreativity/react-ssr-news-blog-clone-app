import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-color:red
`;

const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  text-align: center;
  background: #f6f6ef;
  @media only screen and (max-width: 767px) {
    width: 90%;
		padding: 0 40px;
  }
`

const Table = styled.table`
  width: 100%; 
  border-collapse: collapse; 
  tr{
    &:nth-of-type(odd) { 
      background: #E5E6E0; 
    }
  }
  th { 
  background: #ff732e; 
  color: white; 
  font-weight: bold; 
  }
  td, th { 
    padding: 6px; 
    /* border: 1px solid #ccc;  */
    text-align: left; 
  }
  .up_vote{
    cursor: pointer;
  }

  @media only screen and (max-width: 767px) {
    display: block; 
      thead, tbody, th, td, tr { 
        display: block; 
      }
      thead tr { 
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    
    tr { border: 1px solid #ccc; }
    
    td { 
      border: none;
      border-bottom: 1px solid #eee; 
      position: relative;
      padding-left: 50%; 
      &:before { 
        position: absolute;
        top: 6px;
        left: 6px;
        width: 45%; 
        padding-right: 10px; 
        white-space: nowrap;
      }

      &:nth-of-type(1):before { content: "Comments"; }
      &:nth-of-type(2):before { content: "Vote Count"; }
      &:nth-of-type(3):before { content: "Up Vote"; }
      &:nth-of-type(4):before { content: "News Details"; }
    }
  }
`

const ButtonGroup = styled.div`
  display: block;
  text-align: right;
  button {
      background: transparent;
      border: 0;
      color: #ff732c;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
  }
  span{
     border-right: 4px solid #ff732e;
    }
`

export {
  Title,
  Table,
  Container,
  ButtonGroup
}