import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-green-50 to-green-100 py-20 md:py-28 px-4 md:px-0 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full opacity-50 transform -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-green-200 rounded-full opacity-30 transform translate-x-20 translate-y-20"></div>
      <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-green-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-yellow-300 rounded-full animate-ping animation-delay-2000"></div>
      <div className="absolute top-2/3 right-1/3 w-10 h-10 border-2 border-green-400 rounded-full opacity-40"></div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-green-200 text-green-800 px-5 py-2 rounded-full text-sm font-semibold mb-5 animate-bounce shadow-lg">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Premium Property Management
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 mb-6 leading-tight">
              Effortless Property <span className="relative inline-block">
                Management
                <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="#047857" strokeWidth="2"/>
                </svg>
              </span> for <span className="bg-gradient-to-r from-green-600 to-emerald-500 inline-block text-transparent bg-clip-text">Maximum Returns</span>
            </h1>
            <p className="text-lg md:text-xl text-green-900 mb-8 leading-relaxed">
              Specialists in managing and marketing furnished rental properties for mid to long term stays. Our services simplify operations, boost market appeal, and optimize costs.
            </p>
            <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
              <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 w-36 transform transition-transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700">Simplified Operations</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 w-36 transform transition-transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700">Cost Optimization</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 w-36 transform transition-transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700">Market Appeal</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:-translate-y-1 text-lg">
                Get Started
              </a>
              <a href="#services" className="inline-block bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 text-lg">
                Learn More
              </a>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="flex-1 mt-10 md:mt-0">
            <div className="relative">
              {/* Main Image */}
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
                alt="Luxury furnished property" 
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto object-cover border-4 border-white z-10 relative transform transition-transform hover:scale-105 duration-500"
              />
              
              {/* Floating Images with Animation */}
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=250&q=80" 
                alt="Interior design" 
                className="absolute -top-10 -right-10 md:right-0 w-28 h-28 md:w-40 md:h-40 rounded-xl shadow-lg border-4 border-white object-cover z-20 transform rotate-6 hover:rotate-0 transition-all duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=250&q=80" 
                alt="Property exterior" 
                className="absolute -bottom-5 -left-5 md:left-0 w-24 h-24 md:w-36 md:h-36 rounded-xl shadow-lg border-4 border-white object-cover z-20 transform -rotate-6 hover:rotate-0 transition-all duration-500"
              />
              
              {/* Floating Statistics */}
              <div className="absolute top-1/2 -right-16 bg-white rounded-xl p-3 shadow-xl border border-green-100 hidden lg:block transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-green-600">98%</span>
                  <span className="text-xs text-gray-500">Client Satisfaction</span>
                </div>
              </div>
              <div className="absolute bottom-20 -left-20 bg-white rounded-xl p-3 shadow-xl border border-green-100 hidden lg:block transform -rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-green-600">24/7</span>
                  <span className="text-xs text-gray-500">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-green-200 hidden md:block">
          <p className="text-center text-green-800 font-medium mb-6">Trusted by leading companies</p>
          <div className="flex justify-center space-x-12 grayscale opacity-50">
            <div className="w-24">
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <div className="w-24">
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12c0 3.73 2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z" />
              </svg>
            </div>
            <div className="w-24">
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </div>
            <div className="w-24">
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
