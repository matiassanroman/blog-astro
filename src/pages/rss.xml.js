import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Blog de San Roman Matias",
    description: "Blog para compartir lo que he aprendido a lo largo del camino como desarrolador, intercambiar ideas y seguir creciendo junto con otros entusiastas de la tecnología.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}`,
    })),
  });
}
