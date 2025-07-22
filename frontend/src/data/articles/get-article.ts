import { ALL_POSTS_URL } from "@/config/app-config";
import { ArticleData } from "@/domain/articles";
import { fetchJson } from "@/utils/fetch-json";

export const getArticle = async (
  slug: string | string[]
): Promise<ArticleData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${ALL_POSTS_URL}?filters[slug][$eq]=${slugString}&populate=*`;
  const jsonArticles = await fetchJson<ArticleData[]>(url);
  return jsonArticles;
};
