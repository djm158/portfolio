import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Tag } from "lucide-react";
import type { BlogPost } from "../types";

const posts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Microservices with Node.js",
    summary:
      "Learn how to design and implement scalable microservices architecture using Node.js and Docker.",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2024-03-01",
    readingTime: "8 min read",
    tags: ["Node.js", "Microservices", "Docker"],
  },
  {
    id: "2",
    title: "React Performance Optimization Techniques",
    summary:
      "Discover advanced techniques to optimize your React applications for better performance.",
    thumbnail:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2024-02-15",
    readingTime: "6 min read",
    tags: ["React", "Performance", "JavaScript"],
  },
  {
    id: "3",
    title: "Introduction to GraphQL with TypeScript",
    summary:
      "A comprehensive guide to building type-safe GraphQL APIs using TypeScript and Apollo Server.",
    thumbnail:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2024-02-01",
    readingTime: "10 min read",
    tags: ["GraphQL", "TypeScript", "API"],
  },
];

const Blog = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-20 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-center mb-12 dark:text-gray-300"
        >
          Latest Blog Posts
        </motion.h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readingTime}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a
                    href={`/blog/${post.id}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300 transition-colors"
                  >
                    {post.title}
                  </a>
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
