import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Cloud, Cog, Palette } from 'lucide-react';
import type { Skill as SkillType } from '../types';

const skills: SkillType[] = [
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 95, icon: 'Code' },
  { name: 'TypeScript', category: 'Frontend', proficiency: 90, icon: 'Code' },
  { name: 'Next.js', category: 'Frontend', proficiency: 85, icon: 'Code' },
  { name: 'Vue.js', category: 'Frontend', proficiency: 80, icon: 'Code' },
  { name: 'CSS/SASS', category: 'Frontend', proficiency: 90, icon: 'Palette' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 90, icon: 'Server' },
  { name: 'Python', category: 'Backend', proficiency: 85, icon: 'Server' },
  { name: 'GraphQL', category: 'Backend', proficiency: 80, icon: 'Server' },
  { name: 'REST APIs', category: 'Backend', proficiency: 95, icon: 'Server' },
  
  // Database
  { name: 'PostgreSQL', category: 'Database', proficiency: 90, icon: 'Database' },
  { name: 'MongoDB', category: 'Database', proficiency: 85, icon: 'Database' },
  { name: 'Redis', category: 'Database', proficiency: 80, icon: 'Database' },
  
  // DevOps
  { name: 'Docker', category: 'DevOps', proficiency: 85, icon: 'Cloud' },
  { name: 'Kubernetes', category: 'DevOps', proficiency: 80, icon: 'Cloud' },
  { name: 'AWS', category: 'DevOps', proficiency: 85, icon: 'Cloud' },
  { name: 'CI/CD', category: 'DevOps', proficiency: 90, icon: 'Cog' },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps'];

const iconComponents = {
  Code,
  Server,
  Database,
  Cloud,
  Cog,
  Palette,
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredSkills = skills.filter(
    skill => selectedCategory === 'All' || skill.category === selectedCategory
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const Icon = iconComponents[skill.icon as keyof typeof iconComponents];
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      Proficiency
                    </span>
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100 dark:bg-blue-900">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.proficiency}%` } : {}}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;