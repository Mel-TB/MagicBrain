import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.5rem;
  width: 10%;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  border-radius: 0.8rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
