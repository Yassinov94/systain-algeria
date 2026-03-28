import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import { blogPosts } from "@/data/blog-posts";

export default async function BlogPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const pressArticles = blogPosts.filter((p) => p.category === "press");
  const blogArticles = blogPosts.filter((p) => p.category === "blog");

  return (
    <>
      <section className="relative py-24 bg-dark-slate text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{dict.blog.title}</h1>
        </div>
      </section>

      {/* Press */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            {dict.blog.press}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pressArticles.map((post) => (
              <a
                key={post.slug}
                href={post.externalUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="relative h-44 bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title[lang] || post.title.en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    {dict.blog.press}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted mb-2">
                    {post.date}
                    {post.publishedIn && ` · ${dict.blog.published_in} ${post.publishedIn}`}
                  </div>
                  <h3 className="font-semibold text-heading mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title[lang] || post.title.en}
                  </h3>
                  <p className="text-sm text-foreground/70 line-clamp-3">
                    {post.excerpt[lang] || post.excerpt.en}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            {dict.blog.articles}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((post) => (
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
                </div>
                <div className="p-5">
                  <time className="text-xs text-muted">{post.date}</time>
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
    </>
  );
}
