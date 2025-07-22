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
        <Link href='/articles/[slug]' as={`/articles/${slug}`}>
            <img src={cover} alt={title} />
        </Link>
      </ArticleCardCover>

      <ArticleCardHeading>
        <Link href='/articles/[slug]' as={`/articles/${slug}`}>
          {title}
        </Link>

      </ArticleCardHeading>
    </Container>
  );
}
