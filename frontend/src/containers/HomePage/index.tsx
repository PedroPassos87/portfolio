import React from "react";
import { ArticleData } from "@/domain/articles";
import { Container } from "./styles";
import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { ArticleCard } from "@/components/ArticleCard";

export type HomePageProps = {
  articles: ArticleData[];
}

export default function HomePage({ articles }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {articles.map((article) => (
            <><ArticleCard
              key={article.slug}
              cover={article.cover.formats.small.url}
              slug={article.slug}
              title={article.title} />
            </>
          ))}
        </Container>
      </MainContainer>
    </>
  )
}
