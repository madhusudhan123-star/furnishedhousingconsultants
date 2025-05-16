import React from 'react';

const Fourth = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      content: "Working with this property management team has been a game-changer for our investment portfolio. Their attention to detail and proactive approach has increased our rental income by 20%.",
      author: "Sarah Johnson",
      position: "Property Investor",
      image: "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
      id: 2,
      content: "The design and staging services transformed our property completely. We received multiple offers within days of listing, all above asking price!",
      author: "Michael Chen",
      position: "Homeowner",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      content: "Their spend management expertise helped us cut unnecessary costs while improving the quality of our property maintenance. True professionals who understand the business.",
      author: "Rebecca Martinez",
      position: "Real Estate Developer",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  // Statistics data
  const stats = [
    { value: "97%", label: "Client Satisfaction" },
    { value: "350+", label: "Properties Managed" },
    { value: "15+", label: "Years Experience" },
    { value: "28%", label: "Average ROI Increase" }
  ];
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200 rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-300 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-green-300 rounded-full animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about our exceptional property services.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-6 italic">"{item.content}"</p>

              <div className="flex items-center">
                <img src={item.image} alt={item.author} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>                  <h4 className="font-semibold text-gray-800">{item.author}</h4>
                  <p className="text-green-600 text-sm">{item.position}</p>
                </div>
              </div>
              <div className="h-1 w-1/3 bg-gradient-to-r from-green-400 to-green-600 mt-6"></div>
            </div>
          ))}
        </div>        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 transform -rotate-1 hover:rotate-0 transition-all duration-500">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Our Impact in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform transition-all duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1">
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fourth;