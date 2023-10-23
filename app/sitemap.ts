import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://janez.tech/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/blog", "/uses"].map((route) => ({
    url: `https://janez.tech${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
