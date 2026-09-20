import { getCollection } from "astro:content";

export async function getAllTags() {
  const posts = await getCollection("articulo");
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
  return (
    await getCollection("articulo", ({ data }) =>
      data.tags.map((tagItem) => tagItem.toLowerCase()).includes(tag)
    )
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const getDescription = (content: string, length = 100) => {
  // Elimina etiquetas HTML (si las hay) y corta el contenido
  return (
    content
      .replace(/<[^>]*>/g, "") // Eliminar etiquetas HTML
      .replace(/[#*_>`-]/g, "") // eliminar caracteres de markdown básicos
      .replace(/\[(.*?)\]\(.*?\)/g, "$1") // eliminar links manteniendo el texto
      .trim()
      .slice(0, length) + "..."
  );
};
