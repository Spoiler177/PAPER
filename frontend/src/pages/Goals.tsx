import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Rocket, Globe } from 'lucide-react';
const goalCategories = [
{
  title: 'Short-Term Goals',
  icon: Zap,
  color: 'text-yellow-500',
  bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
  timeframe: 'Next 6-12 Months',
  goals: [
  'Master advanced Django concepts and architecture',
  'Build and deploy production-ready applications',
  'Learn advanced React patterns and performance optimization']

},
{
  title: 'Medium-Term Goals',
  icon: Rocket,
  color: 'text-blue-500',
  bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  timeframe: '1-3 Years',
  goals: [
  'Transition fully into a Full-Stack Engineer role',
  'Design and deploy highly scalable distributed systems',
  'Build and launch innovative AI-powered products']

},
{
  title: 'Long-Term Goals',
  icon: Globe,
  color: 'text-purple-500',
  bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  timeframe: '5+ Years',
  goals: [
  'Become a leading AI Engineer and Solutions Architect',
  'Launch impactful technology startups solving real problems',
  'Contribute significantly to global technology innovation']

}];

export function Goals() {
  return (
    <div className="py-8 max-w-5xl mx-auto">
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
          <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-500">
            <Target size={40} />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          My <span className="text-gradient">Goals</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A clear vision of where I am heading and what I aim to achieve in my
          career.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {goalCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2
              }}
              className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              
              <div
                className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity ${category.color}`}>
                
                <Icon size={100} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-2xl ${category.bgColor} ${category.color}`}>
                    
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h2>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {category.timeframe}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {category.goals.map((goal, i) =>
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                    
                      <div
                      className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${category.color.replace('text-', 'bg-')}`} />
                    
                      <span className="leading-relaxed">{goal}</span>
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>);

        })}
      </div>
    </div>);

}