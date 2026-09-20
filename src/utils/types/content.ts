export interface ContentItem {
  image: string;
  title: string;
  description: string;
  pubDate?: Date;
  tags: string[];
  href?: string;
  articleHref: string;
}
