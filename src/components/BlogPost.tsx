import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, Tag, ArrowLeft } from "lucide-react";
import { useInView } from "react-intersection-observer";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

import { posts } from "@/data/blog";

interface BlogPostProps {
  blogId: string;
}

export const BlogPost = ({ blogId }: BlogPostProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const post = posts.find((p) => p.id === blogId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Blog Post Not Found
          </h1>
          <Link
            to="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Define custom components for markdown rendering
  const markdownComponents: Components = {
    h1: (props) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
    h2: (props) => <h2 className="text-2xl font-bold mt-6 mb-4" {...props} />,
    h3: (props) => <h3 className="text-xl font-bold mt-5 mb-3" {...props} />,
    p: (props) => <p className="my-4 leading-relaxed" {...props} />,
    ul: (props) => <ul className="list-disc pl-6 my-4" {...props} />,
    ol: (props) => <ol className="list-decimal pl-6 my-4" {...props} />,
    li: (props) => <li className="mb-1" {...props} />,
    a: (props) => (
      <a
        className="text-blue-600 dark:text-blue-400 hover:underline"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-4"
        {...props}
      />
    ),
    code: ({ className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      const isInline = !className;
      return isInline ? (
        <code
          className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono"
          {...props}
        >
          {children}
        </code>
      ) : (
        <code
          className={`block bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm font-mono overflow-x-auto my-4 ${match ? `language-${match[1]}` : ""}`}
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: (props) => (
      <pre
        className="bg-gray-100 dark:bg-gray-800 p-0 rounded-md overflow-x-auto my-4"
        {...props}
      />
    ),
  };

  return (
    <article className="min-h-screen py-20 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <Link
          to="/blog"
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto"
          >
            <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
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

            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
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

            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                components={markdownComponents}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
