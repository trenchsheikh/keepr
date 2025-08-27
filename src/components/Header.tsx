'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-20 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-4">
          <h1 className="text-5xl text-[#478600]" style={{ fontFamily: 'Stadio Now Display, sans-serif', fontWeight: 700 }}>
            keepr.
          </h1>
          <p className="text-sm text-[#478600] font-[--font-stadio] whitespace-nowrap">
            where fantasy football and budgeting meet. with real-time consequences
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#how-it-works" className="text-[#478600] font-[--font-stadio] font-bold uppercase hover:text-[--color-keepr-lime-green] transition-colors">
            HOW IT WORKS
          </a>
          <a href="#join-league" className="text-[#478600] font-[--font-stadio] font-bold uppercase hover:text-[--color-keepr-lime-green] transition-colors">
            JOIN A LEAGUE
          </a>
          <a href="#new-league" className="text-[#478600] font-[--font-stadio] font-bold uppercase hover:text-[--color-keepr-lime-green] transition-colors">
            MAKE A NEW LEAGUE
          </a>
          <a href="#your-leagues" className="text-[#478600] font-[--font-stadio] font-bold uppercase hover:text-[--color-keepr-lime-green] transition-colors">
            YOUR LEAGUES
          </a>
          <a href="#your-budget" className="text-[#478600] font-[--font-stadio] font-bold uppercase hover:text-[--color-keepr-lime-green] transition-colors">
            YOUR BUDGET
          </a>
        </nav>

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-12 h-12 bg-[#478600] rounded-full flex items-center justify-center text-white font-[--font-stadio] hover:bg-[--color-keepr-lime-green] transition-colors"
        >
          menu
        </button>
      </div>

      {/* Hand-drawn arrow pointing down */}
      <div className="absolute left-32 top-20 z-10">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none" className="text-[#478600]">
          <path
            d="M30 10 Q40 30 30 50 Q20 70 30 80"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M25 65 L30 80 L35 65"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-[#478600] shadow-lg">
          <nav className="flex flex-col space-y-4 p-6">
            <a href="#how-it-works" className="text-[#478600] font-[--font-stadio] font-bold uppercase hover:text-[--color-keepr-lime-green] transition-colors">
              HOW IT WORKS
            </a>
            <a href="#join-league" className="text-[#478600] font-[--font-stadio] font-bold uppercase hover:text-[--color-keepr-lime-green] transition-colors">
              JOIN A LEAGUE
            </a>
            <a href="#new-league" className="text-[#478600] font-[--font-stadio] font-bold uppercase hover:text-[--color-keepr-lime-green] transition-colors">
              MAKE A NEW LEAGUE
            </a>
            <a href="#your-leagues" className="text-[#478600] font-[--font-stadio] font-bold uppercase hover:text-[--color-keepr-lime-green] transition-colors">
              YOUR LEAGUES
            </a>
            <a href="#your-budget" className="text-[#478600] font-[--font-stadio] font-bold uppercase hover:text-[--color-keepr-lime-green] transition-colors">
              YOUR BUDGET
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
