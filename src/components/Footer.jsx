import { NavLink } from "react-router-dom";
import styled from "styled-components";
import home from "../images/home.svg";
import add from "../images/add.svg";
import person from "../images/person.svg";
import star from "../images/star.svg";

function Footer() {
  return (
    <AppFooter className='footer'>
      <nav className='footer__navbar'>
        <ul className='footer__list'>
          <li>
            <NavLink to='/'>
              <img src={home} className='footer__icon1' />
            </NavLink>
          </li>
          <li>
            <NavLink to='bookmarks'>
              <img src={star} className='footer__icon2' />
            </NavLink>
          </li>
          <li>
            <NavLink to='new-card'>
              <img src={add} className='footer__icon3' />
            </NavLink>
          </li>
          <li>
            <NavLink to='profile'>
              <img src={person} className='footer__icon4' />
            </NavLink>
          </li>
        </ul>
      </nav>
    </AppFooter>
  );
}

export default Footer;

const AppFooter = styled.footer`
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  .footer__list {
    background-color: var(--primary);
    display: flex;
    align-items: center;
    list-style: none;
    height: 70px;
    margin: 0;
    padding: 0;
    font-size: 20px;
  }

  .footer__list li {
    width: 25%;
  }
`;
