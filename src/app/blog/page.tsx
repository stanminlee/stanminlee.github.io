import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function BlogIndex() {
  const posts = getAllPosts();

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
          <span className="nav-link active">Blog</span>
        </nav>

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
      </main>
    </div>
  );
}
