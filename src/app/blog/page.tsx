import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section>
      <h2>Blog</h2>
      <div className="experience-list">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="experience-item blog-row"
          >
            <div className="experience-header">
              <span className="company">{post.title}</span>
              <span className="date">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </span>
            </div>
            <p className="desc">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
