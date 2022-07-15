import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

import { Link as LinkS } from 'react-scroll';

import { BsFillCalendar2CheckFill } from 'react-icons/bs';

export const Title = styled.h1`
  color: white;
`;

export const Nav = styled.nav`
  top: 0;
  position: sticky;
  border-bottom: 3px solid #de80b0;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0.5rem calc((100vw - 1500px) / 2);
  z-index: 10;
`;

export const NavLogo = styled.div`
  display: block;
  margin-left: 1rem;

  img {
    width: 250px;

    @media screen and (max-width: 360px) {
      width: 170px;
    }
  }
`;

export const NavLink = styled(LinkS)`
  color: black;
  display: block;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;

  img {
    height: 64px;
  }

  &:hover {
    color: #de80b0;
    transform: scale(1.1);
    transition: all 0.1s ease-in-out;
  }

  &:active {
    color: #de80b0;
    transform: scale(1.1);
    transition: all 0.1s ease-in-out;
  }

  @media screen and (max-width: 1180px) {
    padding: 0 1rem;
  }
`;

export const Calendar = styled(BsFillCalendar2CheckFill)`
  margin-right: 10px;
`;

export const Hamburger = styled(FaBars)`
  display: none;
  color: black;
  margin-right: 1.5rem;

  @media screen and (max-width: 1060px) {
    color: #de80b0;
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 1060px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 1060px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  display: flex;
  border-radius: 4px;
  background: #de80b0;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transform: scale(1.03);
  }
`;
