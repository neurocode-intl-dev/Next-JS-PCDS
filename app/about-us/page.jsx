"use client";
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import ContactSection from "./ContactSection";

export default function AboutUsPage() {
  const [selectedItem, setSelectedItem] = useState(0);

  const whyChooseUsData = [
    {
      id: 0,
      number: "01",
      title: "Expertise & Experience",
      numberColor: "#4FB8BE",
      titleColor: "#57C8CA",
      lineColor: "#57C8CA",
      description: "With over 20 years in the healthcare sector, we bring a wealth of expertise as both disability providers and recruitment specialists. Our in-depth knowledge and hands-on experience ensure that we offer unparalleled care for high-dependency patients and connect you with seasoned healthcare professionals across various specialties. Our long-standing commitment to excellence guarantees that we stay at the forefront of industry advancements and deliver the highest standards of service.",
      image: "/image7.png"
    },
    {
      id: 1,
      number: "02",
      title: "Commitment to Quality",
      numberColor: "#000000",
      titleColor: "#4FB8BE",
      lineColor: "#5D5A5A",
      description: "Quality is at the heart of everything we do. We maintain rigorous standards in recruitment and care delivery, ensuring that every healthcare professional we place and every service we provide meets the highest benchmarks. Our comprehensive vetting process, ongoing training programs, and continuous quality monitoring guarantee excellence in every interaction. We are committed to exceeding expectations and delivering outcomes that make a real difference.",
      image: "/image15.png"
    },
    {
      id: 2,
      number: "03",
      title: "Innovative Solutions",
      numberColor: "#000000",
      titleColor: "#4FB8BE",
      lineColor: "#5D5A5A",
      description: "We leverage cutting-edge technology and innovative approaches to deliver modern healthcare solutions. Our forward-thinking strategies combine traditional care values with contemporary methods, ensuring efficient service delivery and optimal outcomes. From digital recruitment platforms to advanced care management systems, we continuously evolve to meet the changing needs of the healthcare landscape and provide solutions that are both practical and transformative.",
      image: "/image16.png"
    },
    {
      id: 3,
      number: "04",
      title: "Proven Track Record",
      numberColor: "#000000",
      titleColor: "#4FB8BE",
      lineColor: "#5D5A5A",
      description: "Our success speaks for itself through countless satisfied clients and successful placements. We have built lasting relationships with healthcare facilities and professionals across the region, earning a reputation for reliability, professionalism, and results. Our track record demonstrates consistent delivery of high-quality services, with measurable positive outcomes for both care recipients and healthcare providers. Trust in our proven ability to deliver excellence every time.",
      image: "/image17.png"
    }
  ];

  // Auto-carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedItem((prev) => (prev + 1) % whyChooseUsData.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [whyChooseUsData.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative">
        {/* Background pattern ONLY */}
        <div className="absolute top-0 left-0 w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] overflow-hidden -z-10">
          <img
            src="/background-pattern.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex items-start justify-center px-2 sm:px-4 py-4 sm:py-8 lg:py-12">
          {/* White Card */}
          <div className="relative w-full max-w-[1400px] bg-[#FFFFFF] rounded-[20px] sm:rounded-[30px] lg:rounded-[65px] shadow-lg overflow-visible">
            {/* Navbar inside card */}
            <Navbar />

            {/* Content Wrapper with relative positioning for quote overlay */}
            <div className="relative pb-12 lg:pb-32 sm:pb-40 md:pb-48 lg:pb-18">
              {/* About Section */}
              <section className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-0 px-4 sm:px-6 lg:px-0">
                {/* Left Content */}
                <div className="px-2 sm:px-4 lg:px-12 py-4 flex flex-col justify-start">
                  {/* Title */}
                  <div className="relative mb-6 max-w-fit">
                    <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                      <span className="text-[#4FB8BE]">About</span>{" "}
                      <span className="text-gray-900">Us</span>
                    </h1>

                    {/* Underline image */}
                    <img
                      src="/image1.png"
                      alt="Underline"
                      className="absolute -left-4 -bottom-6 sm:-left-8 sm:-bottom-8 lg:-left-12 lg:-bottom-10 w-full scale-x-[1.1] max-w-full pointer-events-none mt-2"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-black max-w-lg text-sm sm:text-base md:text-lg xl:text-[24px] text-left font-medium leading-relaxed mt-4">
                    We connect top healthcare talent with rewarding
                    opportunities and deliver comprehensive NDIS support. Find
                    the perfect match for your care needs or career through our
                    expert recruitment and personalized services.
                  </p>
                </div>

                {/* Right Image */}
                <div className="relative min-h-[250px] sm:min-h-[300px] xl:min-h-[400px] px-4 sm:px-6 lg:px-0 mb-16 sm:mb-0 lg:mb-0">
                  <div className="relative lg:absolute xl:right-32 lg:top-0 bg-white rounded-[20px] sm:rounded-[30px] lg:rounded-[58px] overflow-hidden h-[250px] sm:h-[300px] xl:h-[320px] w-full xl:w-[500px]">
                    <img
                      src="/image6.png"
                      alt="Healthcare professionals"
                      className="w-full h-full object-contain lg:object-cover"
                    />
                  </div>
                </div>
              </section>

              {/* Quote Section - Positioned to overlap at bottom edge */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[50%] sm:translate-y-[55%] md:translate-y-[60%] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[950px] px-2 sm:px-4 lg:px-12 z-20">
                <div className="bg-white border border-[#4FB8BE] rounded-[12px] sm:rounded-[15px] lg:rounded-[17px] p-4 sm:p-6 lg:p-10 max-w-5xl mx-auto relative">
                  {/* Opening Quote */}
                  <img
                    src="/quote-open.png"
                    alt="Opening quote"
                    className="absolute top-2 left-2 sm:top-4 sm:left-4 lg:left-8 w-4 sm:w-8 lg:w-10"
                  />

                  {/* Quote Text */}
                  <p className="text-black font-light text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] leading-relaxed text-left px-4 sm:px-6 lg:px-12 pt-2">
                    At Care with Love, we help individuals overcome challenges
                    and reach their full potential. Our Registered Nurses and
                    experienced support workers deliver personalized mental
                    health and high-intensity care. Guided by integrity and
                    respect, we strengthen the healthcare industry through
                    specialized recruitment and compassionate, reliable NDIS 
                    support.
                  </p>

                  {/* Closing Quote */}
                  <img
                    src="/quote-close.png"
                    alt="Closing quote"
                    className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-8 lg:right-8 w-4 sm:w-8 lg:w-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section - White background area */}
      <div className="bg-white py-12 sm:py-16 lg:py-38">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <section>
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[45px] font-medium text-center text-gray-900 mb-6 sm:mb-8 lg:mb-12 italic mt-18 lg:mt-0">
              Our Values
            </h2>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Care */}
              <div className="bg-white rounded-[15px] sm:rounded-[20px] lg:rounded-[10px] shadow-md p-4 sm:p-6 lg:p-8 border border-[#57C8CA]">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                    <img
                      src="/value1.png"
                      alt="Care"
                      className="w-6 h-6 sm:w-6 sm:h-6 lg:w-12 lg:h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-sm sm:text-xl lg:text-2xl font-bold text-gray-900">
                    Care
                  </h3>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Care is one of our core values. We provide person-centred,
                  integrated support grounded in empathy and understanding,
                  ensuring each individual's unique needs are met with genuine
                  compassion.
                </p>
              </div>

              {/* Integrity */}
              <div className="bg-white rounded-[15px] sm:rounded-[20px] lg:rounded-[10px] shadow-md p-4 sm:p-6 lg:p-8 border border-[#57C8CA]">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                    <img
                      src="/value2.png"
                      alt="Integrity"
                      className="w-6 h-6 sm:w-6 sm:h-6 lg:w-12 lg:h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-sm sm:text-xl lg:text-2xl font-bold text-gray-900">
                    Integrity
                  </h3>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Integrity is one of our core pillars. We act ethically,
                  honestly, and transparently to build trust and foster a
                  culture of accountability and respect.
                </p>
              </div>

              {/* Respect */}
              <div className="bg-white rounded-[15px] sm:rounded-[20px] lg:rounded-[10px] shadow-md p-4 sm:p-6 lg:p-8 border border-[#57C8CA]">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                    <img
                      src="/value3.png"
                      alt="Respect"
                      className="w-6 h-6 sm:w-6 sm:h-6 lg:w-12 lg:h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-sm sm:text-xl lg:text-2xl font-bold text-gray-900">
                    Respect
                  </h3>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                  We show genuine compassion by understanding needs deeply and
                  taking meaningful action. Through active listening, we provide
                  empathetic, effective support.
                </p>
              </div>

              {/* Compassion */}
              <div className="bg-white rounded-[15px] sm:rounded-[20px] lg:rounded-[10px] shadow-md p-4 sm:p-6 lg:p-8 border border-[#57C8CA]">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                    <img
                      src="/value4.png"
                      alt="Compassion"
                      className="w-6 h-6 sm:w-6 sm:h-6 lg:w-12 lg:h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-sm sm:text-xl lg:text-2xl font-bold text-gray-900">
                    Compassion
                  </h3>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Compassion is at the heart of everything we do. We genuinely care for the people we support, offering empathy, patience, and kindness to ensure dignity, comfort, and meaningful care.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section - Full Width WITH AUTOMATIC CAROUSEL */}
          <section className="xl:ml-12 mt-12 sm:mt-16 md:mt-20 lg:mt-32">
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-medium text-left text-gray-900 mb-8 sm:mb-10 lg:mb-16 italic">
              Why Choose Us ?
            </h2>

            {/* Content Grid - Full width */}
            <div className="w-full grid sm:grid-cols-2 gap-8 sm:gap-6 md:gap-4 min-[1000px]:gap-8 lg:gap-14 items-start">
              {/* Left Side - Interactive Numbered List */}
              <div className="space-y-8 sm:space-y-10 lg:space-y-14 w-full mt-4 sm:mt-6 lg:mt-8">
                {whyChooseUsData.map((item, index) => (
                  <div 
                    key={item.id}
                    onClick={() => setSelectedItem(index)}
                    className="flex gap-3 sm:gap-4 lg:gap-6 items-start w-full cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <span 
                        className="text-2xl sm:text-3xl md:text-[32px] lg:text-[45px] font-medium block transition-all duration-300"
                        style={{ 
                          color: selectedItem === index ? item.numberColor : '#000000'
                        }}
                      >
                        {item.number}
                      </span>
                    </div>
                    <div className="relative pl-3 sm:pl-4 lg:pl-6 w-full">
                      {/* Vertical line */}
                      <div 
                        className="absolute left-0 ml-3 sm:ml-4 lg:ml-6 w-[2px] sm:w-[2.5px] lg:w-[3px] transition-all duration-500"
                        style={{ 
                          backgroundColor: selectedItem === index ? '#57C8CA' : '#5D5A5A',
                          top: index === 0 ? '-0.5rem' : index === 1 ? '-2.5rem' : index === 2 ? '-2rem' : '-1.5rem',
                          height: index === 0 
                            ? 'calc(100% + 2rem)' 
                            : index === 1 
                            ? 'calc(100% + 4rem)' 
                            : index === 2 
                            ? 'calc(100% + 4.2rem)' 
                            : 'calc(100% + 3rem)'
                        }}
                      ></div>
                      <h3 
                        className="text-base sm:text-xl md:text-[28px] lg:text-[45px] ml-4 sm:ml-8 lg:ml-12 font-semibold mb-2 transition-all duration-300"
                        style={{ 
                          color: selectedItem === index ? item.titleColor : '#B0B0B0'
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side - Dynamic Image Card with Text - AUTO CAROUSEL */}
              <div className="relative rounded-[20px] sm:rounded-[25px] lg:rounded-[40px] overflow-hidden shadow-xl h-[300px] min-[400px]:h-[320px] min-[500px]:h-[390px] sm:h-[400px] md:h-[500px] lg:h-[800px] xl:h-[590px] w-full sm:w-[300px] md:w-[370px] min-[1000px]:w-[400px] lg:w-[480px] xl:w-[650px] md:ml-auto lg:-top-8 mt-3 sm:mt-0">
                {/* Animated Background Image */}
                <img
                  key={selectedItem}
                  src={whyChooseUsData[selectedItem].image}
                  alt={whyChooseUsData[selectedItem].title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 animate-fadeIn"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Animated Text Content */}
                <div className="relative z-10 p-4 sm:p-6 md:p-6 lg:p-10 h-full flex items-center justify-center">
                  <p 
                    key={`text-${selectedItem}`}
                    className="text-white text-xs sm:text-sm md:text-[13px] lg:text-[22px] leading-relaxed text-center lg:text-left transition-opacity duration-500 animate-fadeIn"
                  >
                    {whyChooseUsData[selectedItem].description}
                  </p>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                  {whyChooseUsData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedItem(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        selectedItem === index 
                          ? 'w-8 bg-[#4FB8BE]' 
                          : 'w-2 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
          
        </div>
        <ContactSection/>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}