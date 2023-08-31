import styled, { css } from "styled-components";

export const FormBox = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;
      width: 25%;
      height: auto;
      margin-left: auto;

      margin-right: auto;
      /* Box */
      background: transparent;
      border: 1px solid var(--color-grey-400);
      border-radius: var(--border-radius-md);
      
      overflow: hidden;
      font-size: 1.4rem;
      
      @media screen and (max-width: 768px) {
        width: auto;
  
      `}
`;

FormBox.defaultProps = {
  type: "regular",
};
