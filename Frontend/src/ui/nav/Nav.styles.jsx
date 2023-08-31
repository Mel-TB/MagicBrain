import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 3rem;
  cursor: pointer;
  font-size: 1.9rem;

  :hover {
    text-decoration: underline;
    color: var(--color-grey-500);
  }
`;

export const NavSign = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1.4rem 3rem;
  cursor: pointer;
  font-size: 1.9rem;
  gap: 3rem;

  :hover {
    text-decoration: underline;
    color: var(--color-grey-500);
  }
`;
