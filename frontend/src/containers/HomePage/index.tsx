import React from "react";
import { ArticleData } from "@/domain/articles";
import { Container } from "./styles";
import { Header } from "@/components/header";

export type HomePageProps = {
  articles: ArticleData[];
}

export default function HomePage({ articles }: HomePageProps) {
  return (
    <>
    <Header />
    <Container>
      {articles.map((article) => (
        <h2 key={article.slug}>{article.title}</h2>
      ))}
    </Container>
  </>
  )
}
