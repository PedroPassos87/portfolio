import React from "react";
import { getAllArticles } from "@/data/articles/get-all-articles";
import { GetStaticPaths, GetStaticProps } from "next";
import { getArticle } from "@/data/articles/get-article";
import { ArticleData } from "@/domain/articles";

export type DynamicArticleProps = {
  article: ArticleData;
}

const DynamicArticle = ({ article }: DynamicArticleProps) => {
  return <p>{article.title}</p>;
};

export default DynamicArticle;

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getAllArticles();

  return {
    paths: articles.map(article => {
      return {
        params: {
          slug: article.slug,
        }
      }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;

  const articles = await getArticle(slug);

  return {
    props: { article: articles[0] },
  };
};
