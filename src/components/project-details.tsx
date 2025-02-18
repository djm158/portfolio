import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Code,
  Server,
  Database,
  Cog,
} from "lucide-react";
import type { Project } from "@/types";

export const ProjectDetails = ({ project }: { project: Project }) => {
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {project.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-6"
            >
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-600 bg-opacity-80 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.overview}
              </p>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <Code className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Challenges & Solutions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Technical Challenges</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Solution */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Solution</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </motion.section>

            {/* Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technical Architecture */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Technical Architecture</h3>
              <ul className="space-y-4">
                {project.architecture.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    {index % 4 === 0 && (
                      <Code className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    )}
                    {index % 4 === 1 && (
                      <Server className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    )}
                    {index % 4 === 2 && (
                      <Database className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    )}
                    {index % 4 === 3 && (
                      <Cog className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    )}
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Back to Projects */}
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
