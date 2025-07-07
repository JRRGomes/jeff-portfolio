import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogContent';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'technical', name: 'Technical', count: blogPosts.filter(post => post.category === 'technical').length },
    { id: 'career', name: 'Career', count: blogPosts.filter(post => post.category === 'career').length },
    { id: 'industry', name: 'Industry', count: blogPosts.filter(post => post.category === 'industry').length },
    { id: 'reflection', name: 'Reflection', count: blogPosts.filter(post => post.category === 'reflection').length },
    { id: 'agile', name: 'Agile', count: blogPosts.filter(post => post.category === 'agile').length },
    { id: 'books', name: 'Books', count: blogPosts.filter(post => post.category === 'books').length }
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  return (
    <section className="pt-30 px-6 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-4">Blog</h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Thoughts, insights, and experiences from my journey as a fullstack developer.
            From technical deep-dives to career reflections and industry observations.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              aria-label={`Filter by ${category.name}`}
              onClick={() => setSelectedCategory(category.id)}
              className={`cursor-pointer px-4 py-2 rounded-full text-sm transition-colors border border-accent ${selectedCategory === category.id
                ? 'bg-accent/20 text-primary font-bold'
                : 'bg-background text-secondary hover:bg-accent/20 hover:text-accent'
                }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${createSlug(post.title)}`}
                className="block h-full bg-background rounded-2xl p-6 border border-accent hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1"
              >
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

                <h2 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <time dateTime={post.date} className="text-sm text-muted block mb-4">
                  {formatDate(post.date)}
                </time>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-muted border border-muted px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary text-lg">No posts found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
