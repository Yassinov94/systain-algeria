import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPreview({ dict, lang }) {
  const posts = blogPosts.slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            {dict.blog.title}
          </h2>
          <Link
            href={`/${lang}/blog`}
            className="text-primary font-medium hover:text-primary-dark transition-colors"
          >
            {dict.blog.read_more} →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title[lang] || post.title.en}
                  fill
                  className="object-cover"
                />
                {post.category === "press" && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    {dict.blog.press}
                  </span>
                )}
              </div>
              <div className="p-5">
                <time className="text-xs text-muted">{post.date}</time>
                {post.publishedIn && (
                  <span className="text-xs text-muted">
                    {" "}
                    · {dict.blog.published_in} {post.publishedIn}
                  </span>
                )}
                <h3 className="font-semibold text-heading mt-2 mb-2 line-clamp-2">
                  {post.title[lang] || post.title.en}
                </h3>
                <p className="text-sm text-foreground/70 line-clamp-3">
                  {post.excerpt[lang] || post.excerpt.en}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
