import styled from "styled-components";

export const StyledImageLinkForm = styled.div`
  text-align: center;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -14px;
`;

export const StyledFormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: ${(props) =>
      props.orientation === "vertical"
        ? "none"
        : "1px solid var(--color-grey-100)"};
  }
`;
