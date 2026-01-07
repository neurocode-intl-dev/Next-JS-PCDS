import Navbar from "@/components/Navbar";
import ContactSection from "./ContactSection";

export default function AboutUsPage() {
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
                  <p className="text-black max-w-lg text-sm sm:text-base md:text-lg xl:text-[24px] xl:text-[24px] text-left font-medium leading-relaxed mt-4">
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
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-12 lg:h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
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
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-12 lg:h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
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
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-12 lg:h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
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
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-12 lg:h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    Compassion
                  </h3>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Integrity is one of our core pillars. We act ethically,
                  honestly, and transparently to build trust and foster a
                  culture of accountability and respect.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section - Full Width */}
          <section className="xl:ml-12 mt-12 sm:mt-16 md:mt-20 lg:mt-32">
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-medium text-left text-gray-900 mb-8 sm:mb-10 lg:mb-16 italic">
              Why Choose Us ?
            </h2>

            {/* Content Grid - Full width */}
            <div className="w-full grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start">
              {/* Left Side - Numbered List */}
              <div className="space-y-8 sm:space-y-10 lg:space-y-14 w-full mt-4 sm:mt-6 lg:mt-8">
                {/* Item 1 */}
                <div className="flex gap-3 sm:gap-4 lg:gap-6 items-start w-full">
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl md:text-[32px] lg:text-[45px] font-medium text-[#4FB8BE] block">01</span>
                  </div>
                  <div className="relative pl-3 sm:pl-4 lg:pl-6 w-full">
                    {/* Vertical line */}
                    <div className="absolute left-0 -top-4 sm:-top-6 lg:-top-8 ml-3 sm:ml-4 lg:ml-6 bottom-0 w-[2px] sm:w-[2.5px] lg:w-[3px] h-[60px] sm:h-[80px] lg:h-[100px] bg-[#57C8CA]"></div>
                    <h3 className="text-base sm:text-xl md:text-[28px] lg:text-[45px] ml-4 sm:ml-8 lg:ml-12 font-semibold text-[#57C8CA] mb-2">
                      Expertise & Experience
                    </h3>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-3 sm:gap-4 lg:gap-6 items-start w-full">
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl md:text-[32px] lg:text-[45px] font-medium text-black block">02</span>
                  </div>
                  <div className="relative pl-3 sm:pl-4 lg:pl-6 w-full">
                    {/* Vertical line */}
                    <div className="absolute left-0 -top-8 sm:-top-12 md:-top-14 lg:-top-16 ml-3 sm:ml-4 lg:ml-6 bottom-0 w-[2px] sm:w-[2.5px] lg:w-[3px] h-[120px] sm:h-[160px] md:h-[180px] lg:h-[210px] bg-[#5D5A5A]"></div>
                    <h3 className="text-base sm:text-xl md:text-[28px] lg:text-[45px] ml-4 sm:ml-8 lg:ml-12 font-semibold text-[#B0B0B0] mb-2">
                      Commitment to Quality
                    </h3>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-3 sm:gap-4 lg:gap-6 items-start w-full">
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl md:text-[32px] lg:text-[45px] font-medium text-black block">03</span>
                  </div>
                  <div className="relative pl-3 sm:pl-4 lg:pl-6 w-full">
                    {/* Vertical line */}
                    <div className="absolute left-0 ml-3 sm:ml-4 lg:ml-6 top-0 bottom-0 w-[2px] sm:w-[2.5px] lg:w-[3px] h-[100px] sm:h-[130px] md:h-[150px] lg:h-[170px] bg-[#5D5A5A]"></div>
                    <h3 className="text-base sm:text-xl md:text-[28px] lg:text-[45px] ml-4 sm:ml-8 lg:ml-12 font-semibold text-[#B0B0B0] mb-2">
                      Innovative Solutions
                    </h3>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-3 sm:gap-4 lg:gap-6 items-start w-full">
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl md:text-[32px] lg:text-[45px] font-medium text-black block">04</span>
                  </div>
                  <div className="relative pl-3 sm:pl-4 lg:pl-6 w-full">
                    {/* Vertical line */}
                    <div className="absolute left-0 ml-3 sm:ml-4 lg:ml-6 top-0 bottom-0 w-[2px] sm:w-[2.5px] lg:w-[3px] h-[60px] sm:h-[80px] lg:h-[100px] bg-[#5D5A5A]"></div>
                    <h3 className="text-base sm:text-xl md:text-[28px] lg:text-[45px] ml-4 sm:ml-8 lg:ml-12 font-semibold text-[#B0B0B0] mb-2">
                      Proven Track Record
                    </h3>
                  </div>
                </div>
              </div>

              {/* Right Side - Image Card with Text */}
              <div className="relative rounded-[20px] sm:rounded-[25px] lg:rounded-[40px] overflow-hidden shadow-xl h-[300px] min-[400px]:h-[320px] min-[500px]:h-[390px] sm:h-[400px] md:h-[500px] lg:h-[900px] xl:h-[590px] w-full sm:w-[md:w-[350px] lg:w-[480px] xl:w-[650px] md:ml-auto lg:-top-8">
                {/* Background Image */}
                <img
                  src="/image7.png"
                  alt="Healthcare team"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Text Content */}
                <div className="relative z-10 p-4 sm:p-6 md:p-6 lg:p-10 h-full flex items-center justify-center">
                  <p className="text-white text-xs sm:text-sm md:text-[13px] lg:text-[22px] leading-relaxed text-center lg:text-left">
                    With over 20 years in the healthcare sector, we bring a wealth of expertise as both disability providers and recruitment specialists. Our in-depth knowledge and hands-on experience ensure that we offer unparalleled care for high-dependency patients and connect you with seasoned healthcare professionals across various specialties. Our long-standing commitment to excellence guarantees that we stay at the forefront of industry advancements and deliver the highest standards of service.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
        </div>
        <ContactSection/>
      </div>
      
    </div>
  );
}