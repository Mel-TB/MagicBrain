import styled, { css } from "styled-components";

export const sizes = {
  small: css`
    font-size: 1.3rem;
    padding: 0.4rem 0.8rem;
    font-weight: 500;
    text-align: center;
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
    width: 1%;
  `,
};

export const variations = {
  primary: css`
    color: var(--color-grey-0);
    background-color: var(--color-grey-800);

    &:hover {
      background-color: var(--color-grey-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-800);
    background: transparent;
    border: 1px solid var(--color-grey-400);

    &:hover {
      background-color: var(--color-silver-50);
    }
  `,
};

export const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};
