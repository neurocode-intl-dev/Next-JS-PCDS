import React from 'react';

export default function CompanionshipCare() {
  const services = [
    {
      icon: '/companionship-icon-1.png',
      title: 'Social Outings',
      description: 'We organize social outings to help you stay connected, engaged, and active in your community'
    },
    {
      icon: '/companionship-icon-2.png',
      title: 'Friendly visits',
      description: 'We provide friendly visits and conversation to offer companionship and brighten your day.'
    },
    {
      icon: '/companionship-icon-3.png',
      title: 'Transportation assistance',
      description: 'We organize social outings to help you stay connected, engaged, and active in your community'
    },
    {
      icon: '/companionship-icon-4.png',
      title: 'Emotional support',
      description: 'We offer emotional support to help you feel heard, valued, and cared for during challenging times.'
    }
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
          <span className="text-teal-400">Companionship</span> <span className="text-gray-900">Care</span>
        </h2>

        {/* Services Grid - 2 columns */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border-2 border-teal-400 p-8 lg:p-10 hover:shadow-xl transition duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}