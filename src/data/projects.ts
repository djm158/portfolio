import { Project } from "@/types";
import runcalc from "@/assets/runcalc-splash-image.webp";

export const projects: Project[] = [
  {
    id: "1",
    title: "Run calculator",
    description:
      "Frontend web application for calculating running pace, determining race splits, and building mileage plans.",
    thumbnail: runcalc,
    techStack: [
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Formik",
      "Vite",
      "Vitest",
    ],
    demoUrl: "https://runcalc.xyz/",
    githubUrl: "https://github.com/djm158/runcalculator",
    category: ["Frontend"],
    overview:
      "Frontend web application for calculating running pace, determining race splits, and building mileage plans.",
    challenges: [
      {
        title: "Designing a user-friendly interface",
        description:
          "The application needed to be easy to use and navigate, with a clean and modern design.",
      },
    ],
    solution:
      "Implemented a responsive design using Tailwind CSS and shadcn/ui for optimal user experience.",
    features: [
      "Calculate running pace based on distance and time",
      "Determine race splits based on pace and distance",
      "Build mileage plans based on distance and time",
      "Responsive design for optimal user experience on all devices",
      "Use of shadcn/ui for consistent design and layout",
      "Dark mode and light mode support",
    ],
    gallery: [],
    architecture: [
      "Next.js for server-side rendering and optimal performance",
      "Tailwind CSS for responsive design",
      "shadcn/ui for consistent design and layout",
      "Netlify for easy deployment",
      "TypeScript for type safety",
      "React for building a fast and efficient user interface",
      "Formik for handling form state",
      "Vite and vitest for development and testing",
    ],
  },
  // Add more projects as needed
];
