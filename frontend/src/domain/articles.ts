export type ArticleID = number;

export type ArticleAuthor = {
  id: ArticleID;

  name: string;

  created_by: number;

  updated_by: number;

  created_at: string;

  updated_at: string;
};

export type ArticleCategory = {
  id: ArticleID;

  name: string;

  created_by: number;

  updated_by: number;

  created_at: string;

  updated_at: string;
};

export type ArticleCreatedBy = {
  id: ArticleID;

  firstname: string;

  lastname: string;

  username: null;
};

export type ArticleCoverFormat = {
  ext: string;

  url: string;

  hash: string;

  mime: string;

  name: string;

  path: null;

  size: number;

  width: number;

  height: number;

  provider_metadata: {
    public_id: string;

    resource_type: string;
  };
};

export type ArticleCover = ArticleCoverFormat & {
  id: ArticleID;

  alternativeText: string;

  caption: string;

  previewUrl: null;

  provider: string;

  created_by: number;

  updated_by: number;

  created_at: string;

  updated_at: string;

  formats: {
    thumbnail: ArticleCoverFormat;

    small: ArticleCoverFormat;

    medium: ArticleCoverFormat;

    large: ArticleCoverFormat;
  };
};

export type ArticleData = {
  id: ArticleID;

  title: string;

  content: string;

  slug: string;

  author: ArticleAuthor;

  category: ArticleCategory;

  created_by: ArticleCreatedBy;

  updated_by: ArticleCreatedBy;

  created_at: string;

  updated_at: string;

  cover: ArticleCover;
};
