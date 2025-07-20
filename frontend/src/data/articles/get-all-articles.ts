import { ALL_POSTS_URL } from "@/config/app-config";
import { ArticleData } from "@/domain/articles";
import { fetchJson } from "@/utils/fetch-json";

export const getAllArticles = async (): Promise<ArticleData[]> => {
  const articles = await fetchJson<ArticleData[]>(ALL_POSTS_URL);
  return articles;
}
