import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send, Loader2 } from 'lucide-react';
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };
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
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{
            opacity: 0,
            x: -30
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.2
          }}
          className="space-y-8">
          
          <div className="glass p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-4 group">
                
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    victor.kamau@example.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Location
                  </p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              <a href="#" className="flex items-center gap-4 group">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    LinkedIn
                  </p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    linkedin.com/in/victorkamau
                  </p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 group">
                <div className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    GitHub
                  </p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                    github.com/victorkamau
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Map Representation */}
          <div className="glass p-2 rounded-3xl h-64 relative overflow-hidden group">
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 z-0">
              {/* Simplified Map Pattern */}
              <div
                className="w-full h-full opacity-20 dark:opacity-10"
                style={{
                  backgroundImage:
                  'radial-gradient(#475569 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 mb-2 animate-bounce">
                  <MapPin size={24} />
                </div>
                <div className="px-4 py-2 bg-white dark:bg-slate-900 rounded-xl shadow-lg font-medium text-sm">
                  Based in Nairobi
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{
            opacity: 0,
            x: 30
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}>
          
          <div className="glass p-8 rounded-3xl h-full">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Send me a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                  placeholder="John Doe" />
                
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                  placeholder="john@example.com" />
                
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                  placeholder="Project Inquiry" />
                
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white resize-none"
                  placeholder="Hello Victor, I would like to discuss...">
                </textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium text-white transition-all ${isSubmitted ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'}`}>
                
                {isSubmitting ?
                <Loader2 className="animate-spin" size={20} /> :
                isSubmitted ?
                'Message Sent Successfully!' :

                <>
                    <Send size={20} />
                    Send Message
                  </>
                }
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>);

}