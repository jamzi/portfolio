import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { formatDate } from "app/utils/date";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my thoughts on software development, improving productivity, and more.",
};

export default async function BlogPage() {
  return (
    <section>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-8"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col gap-y-0.5">
              <p className="text-neutral-900 font-bold text-lg tracking-tight">
                {post.title}
              </p>
              <p className="text-neutral-700 text-sm tracking-tight">
                {formatDate(post.publishedAt)}
              </p>
              <p className="text-neutral-900 font-medium tracking-tight">
                {post.summary}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
