import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    color: ${theme.colors.gray};
    margin: 0%;
    padding: 3rem;
    text-align: center;
    font-size: ${theme.font.sizes.small};
    background-color: ${theme.colors.darkGray};

    nav {
      margin-top: ${theme.spacings.small};
    }

    a {
      color: ${theme.colors.white};
      text-decoration: none;
      margin: 0 0.5rem;

      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 768px) {
      position: inherit;
      bottom: 0;
      left: 0;
    }
  `}
`;
