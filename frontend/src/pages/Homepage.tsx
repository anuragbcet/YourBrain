import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Lock, Link2, Search, Code2, Rocket, Moon, Sun, Menu, X } from 'lucide-react';

export default function Homepage() {
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: '🔐', title: 'Military-Grade Security', desc: 'JWT-based authentication with password hashing for complete data protection' },
    { icon: '🔗', title: 'Universal Link Storage', desc: 'Save from YouTube, Instagram, or any website instantly' },
    { icon: '⚡', title: 'Lightning Fast Search', desc: 'Find exactly what you need with intelligent keyword search' },
    { icon: '🎯', title: 'Clean Interface', desc: 'Minimalist design focused on productivity and simplicity' },
    { icon: '🔧', title: 'Fully Typed Code', desc: 'Built with TypeScript for maximum safety and reliability' },
    { icon: '🚀', title: 'Modern Tech Stack', desc: 'Vite + React frontend, Express + MongoDB backend' },
  ];

  const techStack = [
    { category: '🎨 Frontend', items: ['⚡ Vite', '🟦 TypeScript', '⚛️ React', '🎨 Tailwind CSS'] },
    { category: '🔧 Backend', items: ['🟢 Node.js + Express', '🟦 TypeScript', '🍃 MongoDB', '🔐 JWT Auth'] },
    { category: '✨ Features', items: ['🔒 Secure Login', '🔎 Smart Search', '📱 Responsive UI', '⚡ Optimized API'] },
  ];

  return (
    <div className={`${isDark ? 'dark bg-slate-950' : 'bg-white'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-all duration-300 ${isDark ? 'bg-slate-950/80 border-slate-700' : 'bg-white/80 border-indigo-100'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">🧠</div>
            <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Brain</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className={`font-medium transition-colors ${isDark ? 'hover:text-indigo-400' : 'hover:text-indigo-600'}`}>Features</a>
            <a href="#tech" className={`font-medium transition-colors ${isDark ? 'hover:text-indigo-400' : 'hover:text-indigo-600'}`}>Tech</a>
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg transition-all">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:shadow-lg transition-all hover:scale-105">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${isDark ? 'border-slate-700 bg-slate-900' : 'border-indigo-100'} p-4 space-y-4`}>
            <a href="#features" className="block py-2">Features</a>
            <a href="#tech" className="block py-2">Tech</a>
            <button className="w-full px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold">Sign Up</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center pt-20 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-gradient-to-b from-white via-indigo-50/30 to-white'}`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-violet-600/20 rounded-full blur-3xl animate-pulse" style={{ top: '-10%', right: '-5%', animation: 'float 6s ease-in-out infinite' }}></div>
          <div className="absolute w-72 h-72 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ bottom: '-5%', left: '-2%', animation: 'float 8s ease-in-out infinite reverse' }}></div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(30px) rotate(5deg); }
          }
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInDown {
            from { opacity: 0; transform: translateY(-40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-in-up { animation: slideInUp 0.8s ease-out forwards; }
          .animate-slide-in-down { animation: slideInDown 0.8s ease-out forwards; }
        `}</style>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 font-semibold text-sm animate-slide-in-down">
            ✨ Welcome to Your Digital Memory
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent leading-tight animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            Remember Everything
          </h1>

          <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'} animate-slide-in-up`} style={{ animationDelay: '0.2s' }}>
            Save links from YouTube, Instagram, and everywhere. Find them instantly with powerful search. Your personal knowledge base, perfectly organized.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Free <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className={`px-8 py-4 rounded-full font-bold text-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-900 transition-all hover:scale-105 ${isDark ? 'dark:border-indigo-400 dark:text-indigo-400' : ''}`}>
              Watch Demo
            </button>
          </div>

          {/* Floating Cards */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 dark:border-slate-700/50 hover:scale-105 transition-transform cursor-pointer">
              <div className="text-2xl mb-2">📹</div>
              <div className="text-sm font-semibold">YouTube Links</div>
            </div>
            <div className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 dark:border-slate-700/50 hover:scale-105 transition-transform cursor-pointer">
              <div className="text-2xl mb-2">📷</div>
              <div className="text-sm font-semibold">Instagram Posts</div>
            </div>
            <div className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 dark:border-slate-700/50 hover:scale-105 transition-transform cursor-pointer">
              <div className="text-2xl mb-2">🔗</div>
              <div className="text-sm font-semibold">Any Website</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-20 relative ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Why Choose Your Brain?
            </h2>
            <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              A modern productivity tool built for how you work today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-sm ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800'
                    : 'bg-gradient-to-br from-white to-indigo-50/50 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50'
                }`}
                style={{ animation: `slideInUp 0.5s ease-out forwards`, animationDelay: `${idx * 0.1}s`, opacity: 0 }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className={`py-20 ${isDark ? 'bg-slate-950' : 'bg-gradient-to-b from-white to-indigo-50/30'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Built with Modern Technology
            </h2>
            <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Fully typed, production-ready, and blazingly fast
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700 hover:border-violet-500/50'
                    : 'bg-white border-indigo-200 hover:border-violet-400'
                } group`}
                style={{ animation: `slideInUp 0.5s ease-out forwards`, animationDelay: `${idx * 0.15}s`, opacity: 0 }}
              >
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform origin-left">
                  {tech.category}
                </h3>
                <div className="space-y-3">
                  {tech.items.map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-all hover:translate-x-2 ${isDark ? 'bg-slate-700/50 hover:bg-slate-700' : 'bg-indigo-50/50 hover:bg-indigo-100/50'}`}>
                      <span className="text-lg">{item.split(' ')[0]}</span>
                      <span className="font-medium">{item.slice(item.indexOf(' ') + 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={`py-20 relative overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            The Difference is in the Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 dark:from-slate-800 dark:to-slate-900 border border-red-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-red-900 dark:text-red-400">❌ Old Way</h3>
              <ul className="space-y-3 text-red-800 dark:text-slate-300">
                <li>✗ Browser bookmarks scattered everywhere</li>
                <li>✗ Hard to search and organize</li>
                <li>✗ Links break or get lost</li>
                <li>✗ No cloud sync</li>
                <li>✗ Limited to one device</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-slate-800 dark:to-slate-900 border border-emerald-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-emerald-900 dark:text-emerald-400">✅ Your Brain Way</h3>
              <ul className="space-y-3 text-emerald-800 dark:text-slate-300">
                <li>✓ Everything in one intelligent place</li>
                <li>✓ Search like you're thinking</li>
                <li>✓ Organized and always available</li>
                <li>✓ Synced across all devices</li>
                <li>✓ Access anywhere, anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative py-24 overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ top: '-10%', right: '-5%' }}></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ bottom: '-10%', left: '-5%' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Transform Your Memory?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of users who've organized their digital life. It's free to start, no credit card needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 rounded-full bg-white text-indigo-600 font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2">
              Start Building Your Brain <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full bg-white/20 text-white font-bold text-lg border border-white/50 hover:bg-white/30 transition-all hover:scale-105">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 border-slate-800'} border-t py-12`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-black mb-4">🧠 Your Brain</div>
              <p className="text-slate-400">Your personal digital memory and productivity hub.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Follow</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>

          <div className={`border-t ${isDark ? 'border-slate-800' : 'border-slate-700'} pt-8 text-center text-slate-400`}>
            <p>&copy; 2024 Your Brain. All rights reserved. | <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a> | <a href="#" className="hover:text-indigo-400 transition-colors">Terms</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}