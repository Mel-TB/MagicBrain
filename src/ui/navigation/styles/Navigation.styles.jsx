import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const P = styled.p`
  font-size: 1.5rem;
  opacity: 1;
  transition: opacity 0.15s ease-in;
  text-decoration: underline;
  padding: 0.5rem;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
    cursor: pointer;
  }
`;

export { StyledNav, P };
