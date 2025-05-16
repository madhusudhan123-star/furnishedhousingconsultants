import React, { useState } from 'react'
import logo from '../assets/logo.webp'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Furnished Housing Consultants" className="h-16" />
          <span className="hidden sm:block text-xl font-bold text-green-700 tracking-tight">Property Services</span>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-green-800 hover:text-green-600 font-medium transition-colors duration-300">Home</a>
          <a href="#about" className="text-green-800 hover:text-green-600 font-medium transition-colors duration-300">About</a>
          <a href="#services" className="text-green-800 hover:text-green-600 font-medium transition-colors duration-300">Services</a>
          <a href="#contact" className="text-green-800 hover:text-green-600 font-medium transition-colors duration-300">Contact</a>
        </div>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:from-green-600 hover:to-green-800 transform hover:-translate-y-1 transition-all duration-300">
            Get a Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          type="button" 
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-white hover:bg-green-600 transition-colors duration-300" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-green-800 hover:text-green-600 font-medium transition-colors duration-300">Home</a>
            <a href="#about" className="text-green-800 hover:text-green-600 font-medium transition-colors duration-300">About</a>
            <a href="#services" className="text-green-800 hover:text-green-600 font-medium transition-colors duration-300">Services</a>
            <a href="#contact" className="text-green-800 hover:text-green-600 font-medium transition-colors duration-300">Contact</a>
            <a href="#contact" className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-center text-white px-6 py-2 rounded-full font-semibold shadow-md hover:from-green-600 hover:to-green-800 transition-colors duration-300">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header