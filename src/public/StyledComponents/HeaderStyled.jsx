import Styled from 'styled-components';
import palets from './Theme/Palets.jsx';

const HeaderStyled = Styled.header`
  padding: 28px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  nav {
    margin-right: 60px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${palets.text};
    margin-right: 20px;
    padding: 4px 12px;
    transition: 100ms;
    border-radius: 16px;
  }

  a:hover {
    background-color: ${palets.text};
    color: rgb(31, 31, 31);
    padding: 8px 12px;
    border-radius: 16px;
    transition: 300ms;
  }

  .link_logo{
    text-decoration: none;
    color: ${palets.text};
  }
`;

export default HeaderStyled;
