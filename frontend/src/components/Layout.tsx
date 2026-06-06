import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Twitter } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [
{
  name: 'Home',
  path: '/'
},
{
  name: 'About',
  path: '/about'
},
{
  name: 'Skills',
  path: '/skills'
},
{
  name: 'Projects',
  path: '/projects'
},
{
  name: 'Achievements',
  path: '/achievements'
},
{
  name: 'Career',
  path: '/career'
},
{
  name: 'Goals',
  path: '/goals'
},
{
  name: 'Contact',
  path: '/contact'
}];

export function Layout() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  const toggleTheme = () => setIsDark(!isDark);
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-blue-900/20"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:bg-purple-900/20"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:bg-indigo-900/20"></div>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 glass border-b-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <NavLink
              to="/"
              className="text-2xl font-bold text-gradient tracking-tight">
              
              MyProfile.
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) =>
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`
                }>
                
                  {link.name}
                </NavLink>
              )}

              <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme">
                
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleTheme}
                className="mr-2 p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            className="md:hidden glass border-t border-slate-200 dark:border-slate-800">
            
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) =>
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`
                }>
                
                    {link.name}
                  </NavLink>
              )}
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.3
            }}>
            
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="glass mt-auto z-10 border-t-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <span className="text-xl font-bold text-gradient">
                MyProfile.
              </span>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 italic">
                "Building technology today that shapes the future tomorrow."
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-500 transition-colors">
                
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-500 transition-colors">
                
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-500 transition-colors">
                
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-500 transition-colors">
                
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Victor Kamau. All rights reserved.
          </div>
        </div>
      </footer>
    </div>);

}