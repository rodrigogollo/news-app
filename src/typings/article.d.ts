export type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: null | string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};
