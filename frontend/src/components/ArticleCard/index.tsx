import { ArticleCardCover, ArticleCardHeading, Container } from "./styled";
import Link from "next/link";
import React from "react";

export type ArticleCardProps = {
  slug: string;
  title: string;
  cover: string
}

export const ArticleCard = ({ slug, title, cover }: ArticleCardProps) => {
  return (
    <Container>
      <ArticleCardCover>
        <Link href='/api/articles/[slug]' as={`/api/articles/${slug}`}>
            <img src={cover} alt={title} />
        </Link>
      </ArticleCardCover>

      <ArticleCardHeading>
        <Link href='/api/articles/[slug]' as={`/api/articles/${slug}`}>
          {title}
        </Link>

      </ArticleCardHeading>
    </Container>
  );
}
