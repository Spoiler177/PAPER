import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Bug, Rocket, Target, Sparkles, BookOpen } from 'lucide-react';
export function About() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div className="max-w-4xl mx-auto py-8">
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
          My <span className="text-gradient">Story</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          The journey of a passionate developer and AI enthusiast.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12">
        
        {/* How I Started */}
        <motion.section
          variants={itemVariants}
          className="glass p-8 rounded-3xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Terminal size={120} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-2xl text-blue-600 dark:text-blue-400">
                <BookOpen size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                How I Started
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              My journey into technology began with a deep curiosity about how
              software shapes our world. I started by learning the fundamentals
              of programming, fascinated by the ability to create something out
              of nothing using just code. This initial spark quickly grew into a
              burning passion for Software Engineering and Artificial
              Intelligence, driving me to understand complex systems and build
              solutions that matter.
            </p>
          </div>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Challenges */}
          <motion.section
            variants={itemVariants}
            className="glass p-8 rounded-3xl">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-2xl text-red-600 dark:text-red-400">
                <Bug size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Challenges
              </h2>
            </div>
            <ul className="space-y-4">
              {[
              'Mastering complex programming fundamentals and data structures',
              'Spending countless hours debugging difficult, obscure issues',
              'Architecting and building scalable full-stack applications',
              'Managing large projects and maintaining clean codebases'].
              map((challenge, i) =>
              <li
                key={i}
                className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <span>{challenge}</span>
                </li>
              )}
            </ul>
          </motion.section>

          {/* Successes */}
          <motion.section
            variants={itemVariants}
            className="glass p-8 rounded-3xl">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-2xl text-green-600 dark:text-green-400">
                <Rocket size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Successes
              </h2>
            </div>
            <ul className="space-y-4">
              {[
              'Successfully building and deploying real-world projects',
              'Grasping advanced AI technologies and machine learning concepts',
              'Developing robust full-stack applications from scratch',
              'Continuous growth and evolution as a modern developer'].
              map((success, i) =>
              <li
                key={i}
                className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  <span>{success}</span>
                </li>
              )}
            </ul>
          </motion.section>
        </div>

        {/* Career Vision */}
        <motion.section
          variants={itemVariants}
          className="relative p-1 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
          
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[22px] h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl text-indigo-600 dark:text-indigo-400">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Career Vision
              </h2>
            </div>
            <div className="relative">
              <Sparkles
                className="absolute -top-4 -left-4 text-yellow-400 opacity-50"
                size={24} />
              
              <p className="text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic text-center px-4 py-6">
                "My goal is to become a world-class Software Engineer and AI
                Engineer capable of developing intelligent systems that
                positively impact society."
              </p>
              <Sparkles
                className="absolute -bottom-4 -right-4 text-yellow-400 opacity-50"
                size={24} />
              
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>);

}