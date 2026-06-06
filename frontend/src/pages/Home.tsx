import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code2,
  Brain,
  Rocket,
  Trophy } from
'lucide-react';
import { Link } from 'react-router-dom';
export function Home() {
  const stats = [
  {
    label: 'Projects Completed',
    value: '15+',
    icon: Rocket
  },
  {
    label: 'Technologies Learned',
    value: '20+',
    icon: Code2
  },
  {
    label: 'Certifications',
    value: '5+',
    icon: Trophy
  },
  {
    label: 'Years of Learning',
    value: '3+',
    icon: Brain
  }];

  return (
    <div className="flex flex-col gap-16 pb-8">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-8">
        <motion.div
          className="flex-1 flex flex-col gap-6 text-center lg:text-left"
          initial={{
            opacity: 0,
            x: -50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.2
          }}>
          
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
              Victor Kamau
            </h1>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4">
              <span className="px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800">
                Software Engineering Student
              </span>
              <span className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-sm font-medium border border-purple-200 dark:border-purple-800">
                AI Enthusiast
              </span>
              <span className="px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium border border-indigo-200 dark:border-indigo-800">
                Full-Stack Developer
              </span>
            </div>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            A passionate Software Engineering and Artificial Intelligence
            student dedicated to building innovative digital solutions that
            solve real-world problems.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5">
              <Download size={20} />
              Download CV
            </button>
            <Link
              to="/projects"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-medium transition-all shadow-sm hover:-translate-y-0.5">
              
              View Projects
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              
              Contact Me
            </Link>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 border-t border-slate-200 dark:border-slate-800 mt-4">
            <a
              href="#"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
              
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full">
              
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors p-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full">
              
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-2 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full">
              
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}>
          
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Victor Kamau"
                className="w-full h-full object-cover" />
              
            </div>
            {/* Floating Badges */}
            <motion.div
              className="absolute top-10 -left-6 glass p-3 rounded-2xl flex items-center gap-3"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut'
              }}>
              
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
                <Code2 size={20} />
              </div>
              <span className="font-medium text-sm">Developer</span>
            </motion.div>
            <motion.div
              className="absolute bottom-10 -right-6 glass p-3 rounded-2xl flex items-center gap-3"
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut'
              }}>
              
              <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg text-purple-600 dark:text-purple-400">
                <Brain size={20} />
              </div>
              <span className="font-medium text-sm">AI Engineer</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
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
                  delay: 0.6 + index * 0.1
                }}
                className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-3 group hover:bg-white/90 dark:hover:bg-slate-800/80 transition-colors">
                
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>);

          })}
        </div>
      </section>
    </div>);

}