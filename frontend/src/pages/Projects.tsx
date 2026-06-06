import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
const projects = [
{
  title: 'MediGuide',
  description:
  'A medical education and disease awareness platform designed to help students and patients learn about diseases through educational content, quizzes, FAQs, and healthcare resources.',
  image:
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  technologies: ['React', 'Django', 'PostgreSQL', 'REST API'],
  features: [
  'Disease database',
  'Interactive quizzes',
  'FAQs',
  'Educational resources'],

  links: {
    demo: '#',
    github: '#',
    preview: '#'
  }
},
{
  title: 'AgroMonitor',
  description:
  'A smart agriculture monitoring system that helps farmers track crop health and environmental conditions.',
  image:
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  technologies: ['React', 'Django', 'IoT Integration'],
  features: ['Farm monitoring', 'Crop tracking', 'Analytics dashboard'],
  links: {
    demo: '#',
    github: '#',
    preview: '#'
  }
},
{
  title: 'AgriSeller',
  description:
  'An online agricultural marketplace connecting farmers and buyers through a digital platform.',
  image:
  'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  technologies: ['React', 'Django', 'PostgreSQL'],
  features: [
  'Product listings',
  'Buyer-seller communication',
  'Market insights'],

  links: {
    demo: '#',
    github: '#',
    preview: '#'
  }
},
{
  title: 'AI Agent Platform',
  description:
  'An intelligent AI-powered assistant platform capable of handling multiple tasks using advanced language models and automation.',
  image:
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  technologies: ['Python', 'Django', 'OpenAI APIs', 'AI Agents'],
  features: ['Agent management', 'AI conversations', 'Automation workflows'],
  links: {
    demo: '#',
    github: '#',
    preview: '#'
  }
}];

export function Projects() {
  return (
    <div className="py-8">
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
          Featured <span className="text-gradient">Projects</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A selection of my recent work in software engineering and artificial
          intelligence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) =>
        <motion.div
          key={project.title}
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
            delay: index * 0.1
          }}
          className="glass rounded-3xl overflow-hidden group flex flex-col">
          
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
              <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            
            </div>

            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) =>
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium border border-blue-100 dark:border-blue-800/50">
                  
                      {tech}
                    </span>
                )}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">
                  Key Features
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature) =>
                <li
                  key={feature}
                  className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {feature}
                    </li>
                )}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
                <a
                href={project.links.demo}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-colors">
                
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                href={project.links.github}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl text-sm font-medium transition-colors">
                
                  <Github size={16} />
                  GitHub
                </a>
                <a
                href={project.links.preview}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl text-sm font-medium transition-colors">
                
                  <Eye size={16} />
                  Preview
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>);

}