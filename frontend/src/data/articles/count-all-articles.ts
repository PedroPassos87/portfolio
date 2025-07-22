import { ALL_POSTS_URL } from "@/config/app-config";
import { fetchJson } from "@/utils/fetch-json";

type MetaPagination = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

type StrapiResponseMetaOnly = {
  meta: MetaPagination;
};

export const countAllArticles = async (query = ''): Promise<number> => {
  const url = `${ALL_POSTS_URL}?pagination[pageSize]=1&${query}`;
  const articles = await fetchJson<StrapiResponseMetaOnly>(url);
  return articles.meta.pagination.total;
}
