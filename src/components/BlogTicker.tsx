import { Link } from "react-router-dom";
import { blogPosts } from '../data/blogContent';

const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const BlogTicker = () => {
  return (
    <div className="blog-ticker">
      <div className="blog-ticker-wrapper text-primary">
        {blogPosts.map((post) => (
          <Link
            to={`/blog/${createSlug(post.title)}`}
            key={post.id}
            title={post.title}
            aria-label={`Read more about ${post.title}`}
          >
            <span className="blog-ticker-item">{post.emoji} {post.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogTicker;
