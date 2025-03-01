import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Check,
  Building2,
  Code2,
  Trophy,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

import type { WorkExperience as WorkExperienceType } from "../types";

const experiences: WorkExperienceType[] = [
  {
    id: "1",
    company: "NearForm",
    role: "Senior Software Engineer",
    duration: "2022 - Present",
    responsibilities: [
      "Designed and implemented end-to-end features for Fortune 500 e-commerce clients using Next.js and GraphQL.",
      "Facilitated a transition from Angular to React/Next.js, focusing on a redesign of the navigation menu with Tailwind, leading to improved user experience and engagement.",
      "Established frontend best practices and mentored junior engineers, fostering team growth and eﬀiciency.",
      "Actively contributed to open-source projects, sharing best practices and improving community adoption.",
    ],
    technologies: ["React", "Next.js", "Typescript", "GraphQL", "AWS"],
    achievements: [],
  },
  {
    id: "2",
    company: "WizeHive",
    role: "Full Stack Engineer",
    duration: "2020 - 2022",
    responsibilities: [
      "Built a new grant management platform from scratch, streamlining application processing and user workflows.",
      "Developed an interactive workflow builder using React flow and Apollo GraphQL, improving user efficiency and usability.",
      "Addressed key user pain points, improving the overall user experience and satisfaction.",
      "Optimized application performance, ensuring a faster and more reliable platform for end-users.",
    ],
    technologies: [
      "React",
      "Typescript",
      "GraphQL",
      "Apollo",
      "Postgres",
      "AWS",
    ],
    achievements: [],
  },
  {
    id: "3",
    company: "Vistar Media",
    role: "Software Engineer",
    duration: "2018 - 2019",
    responsibilities: [
      "Developed UI features for digital out of home ad-tech platform using TypeScript, React, and Redux",
      "Built and maintained REST APIs using Python and Flask, improving data retrieval and application responsiveness.",
      "Deployed and monitored microservices with AWS and Datadog, enhancing system reliability.",
    ],
    technologies: ["React", "Typescript", "Python", "Flask", "AWS", "Datadog"],
    achievements: [],
  },
  {
    id: "4",
    company: "Computer Enterprises Inc",
    role: "Software Engineer",
    duration: "2018 ",
    responsibilities: [
      "Leveraged Azure Batch, Microsoft R Open to deploy massively parallel R application to Azure Cloud",
      "Developed insurance policy web application using Web Components",
    ],
    technologies: ["JavaScript", "Web Components", "R", "Azure"],
    achievements: [],
  },
];

const WorkExperience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey through my professional career, showcasing my growth and
            impact in the tech industry.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={`relative mb-12 md:mb-20 group`}
            >
              <div
                className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 pl-[60px] md:pl-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div
                  className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-11 h-11 md:w-12 md:h-12 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10 top-0 md:top-1/2 md:-mt-6`}
                >
                  <Building2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>

                {/* Content card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">
                          {experience.role}
                        </h3>
                        <h4 className="text-base text-gray-700 dark:text-gray-300 font-medium mb-1">
                          {experience.company}
                        </h4>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1.5" />
                          <span>{experience.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {experience.responsibilities.map(
                          (responsibility, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i }}
                              className="flex items-start group"
                            >
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                                {responsibility}
                              </span>
                            </motion.li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 flex items-center">
                        <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {experience.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.05 * i }}
                            className="px-2.5 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white rounded-full font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
