import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/raja.svg';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 60px;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Logo = styled.img`
  height: 40px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
  transition: color 0.3s ease;

  &:hover, &.active {
    color: #666666;
  }

  &.active {
    font-weight: 600;
  }
`;

const NavNumber = styled.span`
  font-size: 0.8rem;
  color: #666666;
  margin-right: 0.5rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" />
      <NavLinks>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          <NavNumber>01</NavNumber>Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          <NavNumber>02</NavNumber>About me
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>
          <NavNumber>03</NavNumber>Works
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
          <NavNumber>04</NavNumber>Contact
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;