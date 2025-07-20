import { ArticleData } from "@/domain/articles";
import { GetStaticProps } from "next";
import React from "react";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getArticles = async (): Promise<ArticleData[]> => {
  const articles = await fetch(`${API_URL}/api/articles?populate=*`);
  const jsonArticles = await articles.json();
  return jsonArticles.data;
}

export type HomeProps = {
  articles: ArticleData[];
};

export default function Home({ articles }: HomeProps) {

  return (
    <div>
      {articles.map((article) => (
        <h2 key={article.slug}>{article.title}</h2>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ()=> {
  const articles = await getArticles();

  return {
    props: {articles},
    revalidate: 30,
  };
};

