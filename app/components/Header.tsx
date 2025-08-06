'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center bg-emerald-600 text-white rounded-lg">
              <i className="ri-book-open-line text-lg"></i>
            </div>
            <span className="font-['Pacifico'] text-2xl text-emerald-600">Raadi.Cilmi.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/search" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer">
              Search
            </Link>
            <Link href="/tafsir" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer">
              Tafsir
            </Link>
            <Link href="/duas" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer">
              Du'as
            </Link>
            <Link href="/lectures" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer">
              Lectures
            </Link>
            <Link href="/ask-ai" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer">
              Ask AI
            </Link>
            <a 
              href="https://t.me/raadi_cilmi_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Telegram Bot
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-gray-700 hover:text-emerald-600 cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-3">
              <Link 
                href="/search" 
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </Link>
              <Link 
                href="/tafsir" 
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Tafsir
              </Link>
              <Link 
                href="/duas" 
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Du'as
              </Link>
              <Link 
                href="/lectures" 
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Lectures
              </Link>
              <Link 
                href="/ask-ai" 
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Ask AI
              </Link>
              <a 
                href="https://t.me/raadi_cilmi_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors mt-2 text-center cursor-pointer whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                Telegram Bot
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}