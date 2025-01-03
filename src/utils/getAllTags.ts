import { getCollection } from "astro:content";

export async function getAllTags() {
  const posts = await getCollection("blog");
  return Array.from(
    new Set(
      posts
        .map((post) => post.data.tags)
        .flat()
        .sort()
    )
  );
}

export async function getCollectionForTag(tag: string) {
  return (await getCollection("blog", ({ data }) =>
    data.tags.map((tagItem) => tagItem.toLowerCase()).includes(tag)
  )).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}