import type { WorkExperience } from "@/types";

export const experiences: WorkExperience[] = [
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
