import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 48px;
`;

export const NavLinkStyled = styled.li`
  font-size: 32px;
  display: flex;
  padding: 12px;
  border-radius: 14px;
  background-color: var(--secondTextCl);
  transition: color 250ms ease-in, background-color 250ms ease-in;
  &:hover {
    a {
      color: var(--secondTextCl);
    }
    background-color: white;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
`;