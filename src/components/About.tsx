import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { experiences } from "@/data/work-experience";
import { Profile } from "@/data/profile";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="dark:bg-gray-800 min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 dark:text-gray-200"
        >
          About Me
        </motion.h1>

        <div className="max-w-5xl mx-auto">
          {/* Bio Section */}
          <div ref={ref} className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              <div className="w-full md:w-1/3">
                <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-blue-500 dark:border-blue-400 shadow-lg">
                  <img
                    src={Profile.img}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mt-6 space-x-4">
                  <a
                    href={Profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href={Profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href={`mailto:${Profile.email}`}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href={Profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FileText className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">
                  Hello, I'm{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {Profile.name}
                  </span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  I'm a passionate full-stack developer with over 7 years of
                  experience building web applications. I specialize in React,
                  Node.js, and TypeScript, with a strong focus on creating
                  performant, accessible, and user-friendly interfaces.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  My journey in software development began during my first year
                  at Pitt where I discovered the power of solving problems with
                  code. Since then, I've worked with a vareity of startups and
                  established companies to deliver high-quality software
                  products.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me running, cycling, reading
                  science fiction, or watching action movies. I'm always eager
                  to learn and grow as a developer.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{Profile.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-8 dark:text-gray-200 border-b pb-2 border-gray-200 dark:border-gray-700">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 dark:text-gray-200">
                  Frontend Development
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      React & React Native
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      TypeScript
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Next.js
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Tailwind CSS
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Redux & Context API
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 dark:text-gray-200">
                  Backend Development
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Node.js & Express
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      GraphQL
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      MongoDB & PostgreSQL
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      REST API Design
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Authentication & Authorization
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 dark:text-gray-200">
                  DevOps & Tools
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Git & GitHub
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Docker & Kubernetes
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      AWS & Vercel
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      CI/CD Pipelines
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Jest & Testing Library
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-8 dark:text-gray-200 border-b pb-2 border-gray-200 dark:border-gray-700">
              Work Experience
            </h2>
            <div className="space-y-12">
              <div className="space-y-12">
                {experiences.map((experience) => (
                  <div
                    key={experience.id}
                    className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold dark:text-gray-200">
                        {experience.role}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Briefcase className="w-4 h-4 mr-1" />
                        <span>{experience.company}</span>
                        <span className="mx-2">•</span>
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {experience.responsibilities[0]}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {experience.responsibilities
                        .slice(1)
                        .map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 dark:text-gray-200 border-b pb-2 border-gray-200 dark:border-gray-700">
              Education
            </h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold dark:text-gray-200">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    <span>University of Pittsburgh</span>
                    <span className="mx-2">•</span>
                    <span>2013 - 2017</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Graduated with honors. Active member of the Computer Science
                  Club and Theta Tau.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
