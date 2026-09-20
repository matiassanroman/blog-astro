import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
export async function GET(context) {
  const posts = await getCollection("articulo");
  return rss({
    title: "Portfolio de San Roman Matias",
    description:
      "Artículos sobre desarrollo de software, proyectos personales y tecnologías que exploro y utilizo a lo largo de mi experiencia profesional.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/articles/article/${post.slug}`,
    })),
  });
}
