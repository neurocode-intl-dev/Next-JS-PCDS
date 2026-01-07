export default function ContactSection() {
  return (
    <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[431px] overflow-hidden mt-8">
      {/* Background Image - Full width */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/contact-bg.png"
          alt="Contact background"
          className="w-full h-full object-cover object-center sm:object-left"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content - Centered within section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-bold text-white leading-tight mb-1 sm:mb-2">
          Any Inquiry? Contact Us
        </h2>
        
        {/* Subheading */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-bold text-white leading-tight mb-6 sm:mb-8 lg:mb-12">
          As Needed.
        </p>

        {/* Contact Button */}
        <button className="bg-white hover:bg-gray-100 transition-colors duration-300 text-gray-900 font-semibold text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full shadow-lg flex items-center gap-2 sm:gap-3">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="whitespace-nowrap">CONTACT US</span>
        </button>
      </div>
    </section>
  );
}