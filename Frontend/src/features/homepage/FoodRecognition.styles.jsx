import styled from "styled-components";

export const StyledFood = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  text-align: center;
`;

export const StyledIMG = styled.img`
  width: 450px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 230px;
    max-height: 400px;
  }
`;
