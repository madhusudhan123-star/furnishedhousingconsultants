import React from 'react'

const About = () => {
  // Key company facts
  const companyFacts = [
    {
      title: "10+ Years",
      description: "Experience managing premium properties",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "500+",
      description: "Properties successfully managed",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "94%",
      description: "Average occupancy rate",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="bg-white py-24 px-4 md:px-0 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-green-50 -skew-x-12 transform -translate-x-1/4 z-0"></div>
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-green-100 rounded-full opacity-60"></div>
      <div className="absolute left-1/4 bottom-10 w-6 h-6 bg-yellow-300 rounded-full animate-ping"></div>
      <div className="absolute right-1/3 top-20 w-10 h-10 bg-green-200 rounded-full animate-pulse"></div>
      <div className="absolute left-1/2 top-1/2 w-24 h-24 border border-green-200 rounded-full opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-green-100 rounded-full text-green-700 font-semibold text-sm mb-4">DISCOVER OUR STORY</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Who We Are & What We Do</h2>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-24 bg-green-600 rounded"></div>
          </div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            We're a dedicated team of property management experts with a passion for creating exceptional experiences for property owners and tenants alike.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=800&q=80" 
                alt="Our team of property management experts" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-green-600 rounded-lg transform rotate-12 opacity-60 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-300 rounded-lg transform -rotate-12 opacity-60 hidden md:block"></div>
            
            {/* Small floating image */}
            <div className="absolute bottom-12 -right-12 w-32 hidden lg:block">
              <div className="bg-white p-3 rounded-lg shadow-lg transform rotate-6">
                <img 
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=240&q=80" 
                  alt="Office detail" 
                  className="rounded w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Transforming Property Management Since 2010</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We started with a simple mission: to transform how property management services are delivered. 
              Today, we're proud to manage over 500 properties across the country, with a focus on furnished rentals 
              for mid to long-term stays.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Our comprehensive approach combines traditional property management excellence with innovative 
              design services and financial optimization strategies to maximize returns for property owners.
            </p>
            
            {/* Company facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {companyFacts.map((fact, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-green-100 transform transition-transform hover:scale-105">
                  <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {fact.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-green-700">{fact.title}</h4>
                  <p className="text-gray-600 mt-2">{fact.description}</p>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:-translate-y-1 text-center">
                Explore Our Services
              </a>
              <a href="#contact" className="inline-block bg-white border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 text-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About