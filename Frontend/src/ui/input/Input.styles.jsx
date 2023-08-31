import styled, { css } from "styled-components";

export const sizes = {
  small: css`
    font-size: 1.6rem;
    padding: 0.4rem 0.8rem;
    font-weight: 600;
  `,

  medium: css`
    font-size: 1.4rem;
    padding: 1.4rem 2rem;
    font-weight: 500;
  `,

  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    width: 40%;
  `,
};

export const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-50);
  opacity: 0.9;
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  color: var(--color-grey-900);

  ${(props) => sizes[props.size]}

  @media screen and
    (max-width: 768px) {
    width: 80%;
  }
`;

Input.defaultProps = {
  size: "small",
};
