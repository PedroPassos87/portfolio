import styled, { css } from "styled-components";

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover{
    opacity: 0.6;
  }

`;

export const ArticleCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  img {
    width: 100%;
    display: block;
  }
`;

export const ArticleCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;
