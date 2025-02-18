import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, Check } from "lucide-react";
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
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-blue-200 dark:bg-blue-800" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 md:mb-20`}
            >
              <div className={`flex items-center mb-4`}>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                </div>
              </div>

              <div
                className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6`}
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {experience.duration}
                  </span>
                </div>

                <h4 className="text-lg font-semibold mb-4">
                  {experience.company}
                </h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    {experience.achievements.length > 0 && (
                      <>
                        <h5 className="font-medium mb-2">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
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
