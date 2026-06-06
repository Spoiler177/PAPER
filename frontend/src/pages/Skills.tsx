import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutTemplate,
  Server,
  Database,
  BrainCircuit,
  Wrench } from
'lucide-react';
const skillCategories = [
{
  title: 'Frontend',
  icon: LayoutTemplate,
  color: 'text-blue-500',
  bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  skills: [
  {
    name: 'HTML',
    level: 95
  },
  {
    name: 'CSS',
    level: 90
  },
  {
    name: 'JavaScript',
    level: 85
  },
  {
    name: 'React.js',
    level: 88
  },
  {
    name: 'Tailwind CSS',
    level: 92
  }]

},
{
  title: 'Backend',
  icon: Server,
  color: 'text-green-500',
  bgColor: 'bg-green-100 dark:bg-green-900/30',
  skills: [
  {
    name: 'Python',
    level: 90
  },
  {
    name: 'Django',
    level: 85
  },
  {
    name: 'Django REST Framework',
    level: 82
  }]

},
{
  title: 'Databases',
  icon: Database,
  color: 'text-yellow-500',
  bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
  skills: [
  {
    name: 'PostgreSQL',
    level: 80
  },
  {
    name: 'SQLite',
    level: 85
  },
  {
    name: 'MySQL',
    level: 75
  }]

},
{
  title: 'AI & Machine Learning',
  icon: BrainCircuit,
  color: 'text-purple-500',
  bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  skills: [
  {
    name: 'Python',
    level: 90
  },
  {
    name: 'Machine Learning',
    level: 75
  },
  {
    name: 'AI Agents',
    level: 80
  },
  {
    name: 'Prompt Engineering',
    level: 85
  },
  {
    name: 'LLM Applications',
    level: 78
  }]

},
{
  title: 'Tools',
  icon: Wrench,
  color: 'text-slate-500',
  bgColor: 'bg-slate-200 dark:bg-slate-800',
  skills: [
  {
    name: 'Git',
    level: 88
  },
  {
    name: 'GitHub',
    level: 90
  },
  {
    name: 'VS Code',
    level: 95
  },
  {
    name: 'Postman',
    level: 85
  },
  {
    name: 'Docker',
    level: 70
  }]

}];

export function Skills() {
  return (
    <div className="py-8 max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.5
        }}>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise, tools, and
          technologies I work with.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1
              }}
              className="glass p-6 rounded-3xl">
              
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-2xl ${category.bgColor} ${category.color}`}>
                  
                  <Icon size={24} />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) =>
                <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                      className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500`}
                      initial={{
                        width: 0
                      }}
                      animate={{
                        width: `${skill.level}%`
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.5 + skillIndex * 0.1,
                        ease: 'easeOut'
                      }} />
                    
                    </div>
                  </div>
                )}
              </div>
            </motion.div>);

        })}
      </div>
    </div>);

}