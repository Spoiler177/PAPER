import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Code2,
  Layers,
  BrainCircuit,
  Cpu,
  Network } from
'lucide-react';
const stages = [
{
  stage: 'Stage 1',
  role: 'Software Engineering Student',
  description:
  'Learning fundamentals, data structures, algorithms, and basic web development.',
  icon: GraduationCap,
  status: 'completed'
},
{
  stage: 'Stage 2',
  role: 'Frontend Developer',
  description:
  'Mastering UI/UX, React.js, state management, and responsive design.',
  icon: Code2,
  status: 'completed'
},
{
  stage: 'Stage 3',
  role: 'Full-Stack Developer',
  description:
  'Building end-to-end applications with Django, REST APIs, and databases.',
  icon: Layers,
  status: 'current'
},
{
  stage: 'Stage 4',
  role: 'Machine Learning Engineer',
  description:
  'Developing predictive models, understanding neural networks and data pipelines.',
  icon: BrainCircuit,
  status: 'upcoming'
},
{
  stage: 'Stage 5',
  role: 'AI Engineer',
  description:
  'Building intelligent systems, working with LLMs, and deploying AI agents.',
  icon: Cpu,
  status: 'upcoming'
},
{
  stage: 'Stage 6',
  role: 'Senior AI Solutions Architect',
  description:
  'Designing scalable, enterprise-grade AI systems that solve complex global problems.',
  icon: Network,
  status: 'upcoming'
}];

export function Career() {
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
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Career <span className="text-gradient">Roadmap</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          My professional progression and future aspirations in the tech
          industry.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isCompleted = stage.status === 'completed';
          const isCurrent = stage.status === 'current';
          return (
            <motion.div
              key={stage.stage}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className={`relative glass p-6 rounded-3xl overflow-hidden ${isCurrent ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/20' : ''}`}>
              
              {/* Status Indicator */}
              <div className="absolute top-6 right-6">
                {isCompleted &&
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider">
                    Completed
                  </span>
                }
                {isCurrent &&
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider animate-pulse">
                    Current
                  </span>
                }
                {!isCompleted && !isCurrent &&
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold rounded-full uppercase tracking-wider">
                    Upcoming
                  </span>
                }
              </div>

              <div className="mb-6">
                <span className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  {stage.stage}
                </span>
              </div>

              <div
                className={`p-4 inline-block rounded-2xl mb-4 ${isCompleted ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : isCurrent ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                
                <Icon size={32} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {stage.role}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {stage.description}
              </p>

              {/* Connecting Line for Desktop */}
              {index < stages.length - 1 &&
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200 dark:bg-slate-700 z-0" />
              }
            </motion.div>);

        })}
      </div>
    </div>);

}