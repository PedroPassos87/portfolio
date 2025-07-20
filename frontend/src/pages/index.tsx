import HomePage from "@/containers/HomePage";
import { getAllArticles } from "@/data/articles/get-all-articles";
import { ArticleData } from "@/domain/articles";
import { GetStaticProps } from "next";
import React from "react";


export type HomeProps = {
  articles: ArticleData [];
};

export default function Home({ articles }: HomeProps) {

  return (
    <HomePage articles={articles} />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllArticles();

  return {
    props: { articles },
    revalidate: 30,
  };
};

