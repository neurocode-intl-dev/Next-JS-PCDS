import Navbar from "@/components/Navbar";
import ContactSection from "../about-us/ContactSection";

export default function NDISPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative">
        {/* Background pattern ONLY */}
        <div className="absolute top-0 left-0 w-full h-[600px] lg:h-[650px] overflow-hidden -z-10">
          <img
            src="/background-pattern.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex items-start justify-center px-4 py-8 lg:py-12">
          {/* White Card */}
          <div className="relative w-full max-w-[1400px] bg-[#FFFFFF] rounded-[40px] lg:rounded-[65px] shadow-lg overflow-visible">
            {/* Navbar inside card */}
            <Navbar />

            {/* Content Wrapper with relative positioning for quote overlay */}
            <div className="relative pb-24 md:pb-12 lg:pb-32">
              {/* NDIS Hero Section */}
              <section className="grid md:grid-cols-2 gap-8 lg:gap-0 px-4 lg:px-0">
                {/* Left Content */}
                <div className="px-2 lg:px-12 py-4 flex flex-col justify-start">
                  {/* Title */}
                  <div className="relative mb-6 max-w-fit">
                    <h1 className="relative text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight">
                      <span className="text-[#4FB8BE]">Personalized</span>{" "}
                      <span className="text-gray-900">NDIS &</span>
                    </h1>
                    <h1 className="relative text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight mt-2">
                      <span className="text-gray-900">Disability</span>{" "}
                      <span className="text-[#4FB8BE]">Solutions</span>
                    </h1>

                    {/* Underline image */}
                    <img
                      src="/image1.png"
                      alt="Underline"
                      className="absolute -left-8 -bottom-8 lg:-left-12 lg:-bottom-10 w-full scale-x-[1.1] max-w-full pointer-events-none mt-2"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-black max-w-lg text-sm lg:text-base xl:text-lg text-left leading-relaxed mt-8">
                    Experience tailored care and support; Enquire about our
                    comprehensive NDIS and disability services today for a
                    brighter tomorrow.
                  </p>
                </div>

                {/* Right Image */}
                <div className="relative min-h-[300px] xl:min-h-[400px] px-6 lg:px-0 mb-16 lg:mb-0">
                  <div className="relative lg:absolute xl:right-32 lg:top-0 bg-white rounded-[40px] lg:rounded-[58px] overflow-hidden h-[300px] lg:h-[320px] xl:w-[500px] shadow-lg">
                    <img
                      src="/ndis.png"
                      alt="Healthcare consultation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </section>

              {/* Quote Section - Positioned to overlap at bottom edge */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2  translate-y-1/2 lg:translate-y-[60%] w-full max-w-[950px] px-4 lg:px-12 z-20">
                <div className="bg-white border-2 border-[#4FB8BE] rounded-[17px] lg:rounded-[20px] p-6 lg:p-10 mx-auto relative shadow-lg">
                  {/* Opening Quote */}
                  <img
                    src="/quote-open.png"
                    alt="Opening quote"
                    className="absolute top-2 left-2 sm:top-4 sm:left-4 lg:left-8 w-4 sm:w-6 lg:w-10"
                  />

                  {/* Quote Text */}
                  <p className="text-black font-light text-[12px] sm:text-sm lg:text-base xl:text-lg leading-relaxed text-left  sm:px-8 lg:px-12 py-4">
                    As trusted NDIS providers, we offer personalized support
                    designed to empower independence. From tailored care plans
                    to community participation, daily living, and short-term
                    accommodation, we deliver compassionate, expert support that
                    enhances your quality of life.
                  </p>

                  {/* Closing Quote */}
                  <img
                    src="/quote-close.png"
                    alt="Closing quote"
                    className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-8 lg:right-8 w-4 sm:w-6 lg:w-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquire Section - Full Width Below Hero */}

      <div className="bg-white py-16 lg:py-24 mt-16 lg:mt-24">
        <div className="w-full px-4 lg:px-12 max-w-[1400px] mx-auto">
          <div className="relative min-h-[280px] lg:min-h-[320px] bg-gradient-to-r from-[#4FB8BE] to-[#5DD5D8] rounded-[30px] lg:rounded-[40px] overflow-visible px-6 lg:px-12 py-8 lg:py-12">
            {/* Title - Centered */}
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-[45px] font-medium text-white text-center mb-8 md:mb-2 lg:mb-10 whitespace-nowrap">
              Enquire more about our NDIS
            </h2>

            {/* Content Layout - Text Left, Image Right */}
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 lg:gap-8">
              {/* Left Text Content */}
              <div className="flex-1 lg:pr-8">
                <p className="text-white text-xs sm:text-sm md:text-lg lg:text-[18px] xl:text-[22px] leading-relaxed mb-6 lg:mb-8 md:mt-[-50px] lg:mt-2">
                  With over 20 years in healthcare, we bring strong expertise as
                  disability providers and recruitment specialists. Our
                  experience ensures high-quality care for complex needs and
                  reliable connections with skilled healthcare professionals. We
                  stay ahead of industry changes and remain committed to
                  building long-term, trusted relationships through excellence.
                </p>

                <button className="bg-white text-center text-gray-900 font-semibold text-xs sm:text-base lg:text-[22px] px-8 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-[16px] hover:bg-gray-100 transition-colors shadow-lg">
                  Enquire
                </button>
              </div>

              {/* Right Image */}
              <div className="flex-shrink-0 w-[320px] sm:w-[400px] md:w-[300px] lg:w-[280px] xl:w-[290px]">
                <div className="w-full lg:h-[370px] xl:h-[400px] rounded-[50px] lg:rounded-[25px] overflow-hidden shadow-xl xl:mt-[-44px]">
                  <img
                    src="/image8.png"
                    alt="Caregiver with wheelchair user"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Main Services Section */}
      <div className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 mt-[-65px] ">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text- font-medium text-gray-900 italic relative inline-block">
              Our Main Services
              {/* Underline Circle */}
              <img
                src="/headline.png"
                alt=""
                className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 lg:-bottom-5 xl:-bottom-7 -right-2 sm:-right-2 md:-right-3 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-34 h-auto"
              />
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {/* Personal Hygiene */}
            <div className="bg-white border-2 border-[#4FB8BE] rounded-[30px] p-6 flex flex-col h-full">
              <h3 className="text-sm sm:text-xl md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Personal Hygiene
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base mb-4  sm:mb-5 md:mb-6 xl:mb-12 leading-relaxed">
                Personal hygiene support to help participants stay clean,
                comfortable and confident.
              </p>

              <div className="mt-auto">
                {/* Image */}
                <div className="w-full max-w-[320px] mx-auto mb-4">
                  <img
                    src="/image9.png"
                    alt="Service"
                    className="w-full h-auto"
                  />
                </div>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-[#4FB8BE] transition-colors"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Toileting & continance care */}
            <div className="bg-white border-2 border-[#4FB8BE] rounded-[30px] p-6 flex flex-col h-full">
              <h3 className="text-sm sm:text-xl md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Toileting & continance care
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                Compassionate toileting and continence support to help
                participants manages there body needs with dignity.
              </p>

              <div className="mt-auto">
                {/* Image */}
                <div className="w-full max-w-[320px] mx-auto mb-4">
                  <img
                    src="/image10.png"
                    alt="Service"
                    className="w-full h-auto"
                  />
                </div>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-[#4FB8BE] transition-colors"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobility Care */}
            <div className="bg-white border-2 border-[#4FB8BE] rounded-[30px] p-6 flex flex-col h-full">
              <h3 className="text-sm sm:text-xl md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Mobility Care
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 xl:mb-12 leading-relaxed">
                Mobility care to help participants stay active,independent and
                safe
              </p>

              <div className="mt-auto">
                {/* Image */}
                <div className="w-full max-w-[320px] mx-auto mb-4">
                  <img
                    src="/image11.png"
                    alt="Service"
                    className="w-full h-auto"
                  />
                </div>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-[#4FB8BE] transition-colors"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Feeding & Nutrition */}
            <div className="bg-white border-2 border-[#4FB8BE] rounded-[30px] p-6 flex flex-col h-full">
              <h3 className="text-sm sm:text-xl md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Feeding & Nutrition
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                Feeding and nutrition support to promote healthy eating and
                daily wellness
              </p>

              <div className="mt-auto">
                {/* Image */}
                <div className="w-full max-w-[320px] mx-auto mb-4">
                  <img
                    src="/image12.png"
                    alt="Service"
                    className="w-full h-auto"
                  />
                </div>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-[#4FB8BE] transition-colors"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Medication Assistance */}
            <div className="bg-white border-2 border-[#4FB8BE] rounded-[30px] p-6 flex flex-col h-full">
              <h3 className="text-sm sm:text-xl md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Medication Assistance
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                Organized medication assistance to support participants daily
                health need
              </p>

              {/* Image + Read More aligned */}
              <div className="mt-auto">
                {/* Image */}
                <div className="w-full max-w-[320px] mx-auto mb-4">
                  <img
                    src="/image13.png"
                    alt="Service"
                    className="w-full h-auto"
                  />
                </div>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-[#4FB8BE] transition-colors"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Wound care */}
            <div className="bg-white border-2 border-[#4FB8BE] rounded-[30px] p-6 flex flex-col h-full">
              <h3 className="text-sm sm:text-xl md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Wound care
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                Mobility care to help participants stay active,independent and
                safe
              </p>

              <div className="mt-auto">
                {/* Image */}
                <div className="w-full max-w-[320px] mx-auto mb-4">
                  <img
                    src="/image14.png"
                    alt="Service"
                    className="w-full h-auto"
                  />
                </div>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-[#4FB8BE] transition-colors"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    </div>
  );
}
