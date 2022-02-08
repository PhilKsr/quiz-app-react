import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <AppHeader>
      <div className='header__shaky'>
        <h2>WAS</h2>
        <h2 className='header__h2'>IST</h2>
        <h2>WAS</h2>
      </div>
      <h1>
        <Link to='/'>QUIZ-APP</Link>
      </h1>
    </AppHeader>
  );
}

export default Header;

const AppHeader = styled.header`
  background-color: var(--primary);
  color: black;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 90;

  h2 {
    background-color: white;
    color: black;
    padding-right: 15px;
    padding-left: 15px;
    margin-left: 15px;
    font-size: 15px;
    justify-self: flex-start;
  }

  h1 {
    align-self: center;
    padding-left: 10px;
    font-size: 35px;
  }

  .header__h2 {
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
  }

  .header__shaky {
    position: fixed;
    left: 0;
    margin: 1px;
    padding: 5px;
  }

  .header__shaky:hover {
    transform: rotate(360deg);
    transition: transform 0.8s ease;
  }

  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;
