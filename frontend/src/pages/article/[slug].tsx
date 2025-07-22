import React from "react";
import { getAllArticles } from "@/data/articles/get-all-articles";
import { GetStaticPaths } from "next";

const DynamicArticle = () => {
  return <p>AIjaia</p>;
};

export default DynamicArticle;

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getAllArticles();
}
