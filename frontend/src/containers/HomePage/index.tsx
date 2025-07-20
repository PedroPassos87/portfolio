import React from "react";
import { ArticleData } from "@/domain/articles";
import { Container } from "./styles";

export type HomePageProps = {
  articles: ArticleData[];
}

export default function HomePage({ articles }: HomePageProps) {
  return (
    <Container>
      {articles.map((article) => (
        <h2 key={article.slug}>{article.title}</h2>
      ))}
    </Container>
  )
}
