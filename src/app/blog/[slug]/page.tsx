import Link from "next/link";
import { getPost, getAllPosts } from "@/lib/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { meta, contentHtml } = await getPost(params.slug);

  return (
    <div className="container">
      <header className="header">
        <div className="header-info">
          <h1>
            <Link href="/">Stan Lee</Link>
          </h1>
          <p className="subtitle">
            Stanford University · M.S. & B.S. Candidate, Electrical Engineering
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/stanminlee/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/stanminlee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:slee93@stanford.edu" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </header>

      <main>
        <nav className="page-nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
        </nav>

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
      </main>
    </div>
  );
}
