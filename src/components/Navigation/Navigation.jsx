import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { NavBar, Wrapper, BoxLinks } from './Navigation.styled';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #2b2730;
  font-size: 20px;

  &.active {
    color: #fb6090;
  }
`;

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <NavBar>
      <Wrapper>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn ? (
          <>
            <StyledLink to="/contacts">ContactBook</StyledLink>
            <UserMenu />
          </>
        ) : (
          <BoxLinks>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Log in</StyledLink>
          </BoxLinks>
        )}
      </Wrapper>
    </NavBar>
  );
}