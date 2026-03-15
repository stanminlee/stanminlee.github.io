import { getPost, getAllPosts } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { meta, contentHtml } = await getPost(params.slug);

  return (
    <article className="post">
      <div className="post-header">
        <h1 className="post-title">{meta.title}</h1>
        <span className="date">
          {new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })}
        </span>
      </div>
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
