import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { blogPosts } from '../data/blogContent';
import type { ReactElement } from 'react';

const BlogPost = () => {
  const { slug } = useParams();

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const post = blogPosts.find(p => createSlug(p.title) === slug);

  if (!post) {
    return (
      <section className="py-20 px-6 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Post not found</h1>
          <p className="text-secondary mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-accent hover:text-primary transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const parts: ReactElement[] = [];
    let lastIndex = 0;
    let match;
    let keyCounter = 0;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        const textBefore = content.slice(lastIndex, match.index);
        parts.push(...formatTextContent(textBefore, keyCounter));
      }

      const language = match[1] || 'text';
      const code = match[2].trim();

      parts.push(
        <SyntaxHighlighter
          key={`code-${keyCounter++}`}
          language={language}
          style={darcula}
          customStyle={{
            margin: '16px 0',
            borderRadius: '8px',
            fontSize: '14px'
          }}
        >
          {code}
        </SyntaxHighlighter>
      );

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < content.length) {
      const remainingText = content.slice(lastIndex);
      parts.push(...formatTextContent(remainingText, keyCounter));
    }

    return parts.length > 0 ? parts : formatTextContent(content, 0);
  };

  const formatTextContent = (text: string, baseKey: number) => {
    let formattedText = text.replace(/`([^`]+)`/g, '$1');
    formattedText = formattedText.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-primary">$1</strong>');

    const paragraphs = formattedText.split('\n\n').map((paragraph, index) => {
      if (paragraph.trim()) {
        return (
          <p key={`p-${baseKey}-${index}`} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\n/g, '<br>') }} />
        );
      }
      return null;
    }).filter(Boolean) as ReactElement[];

    return paragraphs;
  };

  return (
    <section className="py-20 px-6 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <article className="bg-background rounded-2xl p-8 border border-accent">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded bg-white border border-muted text-xs font-medium ${post.category === 'technical' ? 'text-blue-800' :
                  post.category === 'career' ? 'text-green-800' :
                    post.category === 'industry' ? 'text-purple-800' :
                      post.category === 'reflection' ? 'text-yellow-800' :
                        post.category === 'agile' ? 'text-red-800' :
                          'text-gray-800'
                  }`}>
                  {post.category}
                </span>
                <span className="text-sm text-muted">{post.readTime}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {post.title}
              </h1>

              <div className="flex justify-between items-center gap-4 text-sm text-muted">

                <time dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                {post.link && (
                  <Link to={post.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
                    <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6m4.586 8.586L16.414 9l-4.586 4.586M18.414 7l-4.586 4.586L18.414 16" />
                    </svg>
                    View on LinkedIn
                  </Link>
                )}
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-secondary leading-relaxed">
              {formatContent(post.content)}
            </div>

            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-muted">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white text-muted border border-muted px-3 py-1 rounded text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPost;
