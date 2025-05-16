import React from 'react';

const Third = () => {
  const services = [
    {
      title: "PROPERTY MANAGEMENT",
      description: "Comprehensive property oversight including maintenance, tenant relations, and financial reporting to maximize your investment returns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "DESIGN, SETUP & STAGING",
      description: "Transform spaces with expert design services, meticulous setup, and strategic staging that highlights property potential and creates lasting impressions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "SPEND MANAGEMENT",
      description: "Strategic financial planning and expense tracking to optimize property investments, control costs, and ensure budget adherence for maximum profitability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    }
  ];  
  
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Stylish Background with layered design */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-24 bg-white opacity-10 -skew-y-3 transform origin-top-left z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-green-200 opacity-30 skew-y-3 transform origin-bottom-right z-0"></div>
      
      {/* Modern geometric decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border-4 border-green-200 rounded-lg opacity-20 transform rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 border-4 border-green-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-yellow-300 opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-green-300 rounded-full animate-ping animation-delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-20 h-3 bg-green-400 opacity-20 skew-x-12 transform"></div>
      <div className="absolute bottom-1/2 right-10 w-20 h-3 bg-green-400 opacity-20 -skew-x-12 transform"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-widest text-green-600 uppercase bg-green-100 py-1 px-3 rounded-full">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Our Premium <span className="relative text-green-700 italic">Services
              <span className="absolute bottom-1 left-0 w-full h-1 bg-green-400 opacity-50"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer exceptional solutions to meet your property needs with professional expertise and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-200 transform -translate-y-1/2 z-0"></div>
          
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative z-10"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 h-full flex flex-col">
                {/* Numbered badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg shadow-lg z-20">
                  {index + 1}
                </div>
                
                {/* Diagonal corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 transform rotate-45 translate-x-12 -translate-y-12 opacity-30"></div>
                
                {/* Icon with pulsing background */}
                <div className="relative mt-8 mb-6 mx-auto">
                  <div className="absolute inset-0 bg-green-200 rounded-full transform scale-75 opacity-30 group-hover:scale-150 group-hover:opacity-10 transition-all duration-700"></div>
                  <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-br from-green-50 to-green-200 text-green-700 relative z-10 border-4 border-white shadow-md">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-extrabold text-gray-800 mb-4 text-center tracking-tight relative">
                    {service.title}
                    <span className="block h-1 w-12 bg-green-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  </h3>
                  
                  <p className="text-gray-600 text-center flex-grow">
                    {service.description}
                  </p>
                  {/* Learn More Link */}
                  <div className="mt-6 text-center">
                    <a href="#services" className="inline-flex items-center text-green-600 font-medium group-hover:text-green-800 transition-colors duration-300">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Colored bottom bar that animates on hover */}
                <div className="h-1.5 bg-gradient-to-r from-green-400 to-green-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 relative">
          {/* Decorative line elements */}
          <div className="absolute left-0 top-1/2 w-1/6 h-px bg-green-300 transform -translate-y-1/2 hidden md:block"></div>
          <div className="absolute right-0 top-1/2 w-1/6 h-px bg-green-300 transform -translate-y-1/2 hidden md:block"></div>
          
          {/* CTA Box */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8 md:p-12 relative border border-green-100">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-green-400 -translate-x-2 -translate-y-2"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-green-400 translate-x-2 translate-y-2"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">Ready to Transform Your Property Experience?</h3>
            <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
              Take the first step toward optimizing your property investment with our expert team. Schedule a consultation today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-green-600 text-white font-medium rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 bg-white text-green-600 font-medium border border-green-500 rounded-lg hover:bg-green-50 transition-all duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;