import { motion } from "framer-motion";

import { Profile } from "@/data/profile";

import BlogPostPreview from "./BlogPostPreview";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";


export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <Hero
        name={Profile.name}
        description={Profile.description}
        email={Profile.email}
        linkedin={Profile.linkedin}
        github={Profile.github}
      />
      <WorkExperience />
      <Skills />
      <Projects />
      <BlogPostPreview />
      <Contact />
    </motion.div>
  );
};
