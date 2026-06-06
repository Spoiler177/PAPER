import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Star,
  Code,
  Rocket,
  Brain,
  HeartPulse,
  Bot } from
'lucide-react';
const achievements = [
{
  title: 'Learned Python Programming',
  description:
  'Mastered the fundamentals of Python, data structures, and algorithms.',
  icon: Code,
  color: 'text-blue-500',
  bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  date: '2021'
},
{
  title: 'Built First Web Application',
  description:
  'Developed and deployed a functional web application using HTML, CSS, and JavaScript.',
  icon: Star,
  color: 'text-yellow-500',
  bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
  date: '2022'
},
{
  title: 'Developed Full-Stack Projects',
  description:
  'Created robust applications using React for the frontend and Django for the backend.',
  icon: Rocket,
  color: 'text-green-500',
  bgColor: 'bg-green-100 dark:bg-green-900/30',
  date: '2023'
},
{
  title: 'Started AI Engineering Journey',
  description:
  'Began exploring machine learning, neural networks, and artificial intelligence concepts.',
  icon: Brain,
  color: 'text-purple-500',
  bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  date: '2023'
},
{
  title: 'Created Medical Education Platform',
  description:
  'Launched MediGuide, a comprehensive platform for medical education and disease awareness.',
  icon: HeartPulse,
  color: 'text-red-500',
  bgColor: 'bg-red-100 dark:bg-red-900/30',
  date: '2024'
},
{
  title: 'Built AI Agent Applications',
  description:
  'Developed intelligent platforms capable of handling complex tasks using LLMs.',
  icon: Bot,
  color: 'text-indigo-500',
  bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
  date: '2024'
}];

export function Achievements() {
  return (
    <div className="py-8 max-w-4xl mx-auto">
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
        
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-yellow-500">
            <Trophy size={40} />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Key <span className="text-gradient">Achievements</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Milestones and significant accomplishments in my learning journey.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={achievement.title}
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
                  delay: index * 0.1
                }}
                className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                  
                  <div className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 rounded-xl ${achievement.bgColor} ${achievement.color}`}>
                        
                        <Icon size={24} />
                      </div>
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium">
                        {achievement.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </div>);

}