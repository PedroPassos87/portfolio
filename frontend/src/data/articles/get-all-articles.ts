import { ALL_POSTS_URL } from "@/config/app-config";
import { ArticleData } from "@/domain/articles";
import { fetchJson } from "@/utils/fetch-json";

export const getAllArticles = async (query = ''): Promise<ArticleData[]> => {
  const url = `${ALL_POSTS_URL}?&${query}`;
  const articles = await fetchJson<ArticleData[]>(url);
  return articles;
}
