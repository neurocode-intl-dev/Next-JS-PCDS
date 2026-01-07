import Navbar from "@/components/Navbar";

export default function ContactUsPage() {
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
        <div className="relative z-10 flex items-start justify-center px-4 py-6 sm:py-8 lg:py-12">
          {/* White Card */}
          <div className="relative w-full max-w-[1400px] bg-[#FFFFFF] rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-[65px] shadow-lg overflow-visible">
            {/* Navbar inside card */}
            <Navbar />

            {/* Content Wrapper */}
            <div className="relative pb-16 md:pb-20 lg:pb-18">
              {/* Contact Section */}
              <section className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-0 px-4 lg:px-0">
                {/* Left Content */}
                <div className="px-2 sm:px-4 lg:px-12 py-4 flex flex-col justify-start">
                  {/* Title */}
                  <div className="relative mb-4 sm:mb-5 md:mb-6 max-w-fit">
                    <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                      <span className="text-[#4FB8BE]">Contact</span>{" "}
                      <span className="text-gray-900">Us</span>
                    </h1>

                    {/* Underline image */}
                    <img
                      src="/image1.png"
                      alt="Underline"
                      className="absolute -left-6 -bottom-6 sm:-left-7 sm:-bottom-7 md:-left-8 md:-bottom-8 lg:-left-12 lg:-bottom-10 w-full scale-x-[1.1] max-w-full pointer-events-none mt-2"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-black max-w-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] text-left font-medium leading-relaxed mt-3 sm:mt-4">
                    Every message is a step towards better. Contact us and let's make positive changes together.
                  </p>
                </div>

                {/* Right Image */}
                <div className="relative min-h-[250px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[400px] px-4 sm:px-6 lg:px-0 mb-12 sm:mb-14 md:mb-16 lg:mb-0">
                  <div className="relative lg:absolute lg:right-32 lg:top-0 bg-white rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-[58px] overflow-hidden h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] lg:w-[500px]">
                    <img
                      src="/contact.png"
                      alt="Healthcare professional on phone"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info & Map Section - White background area */}
      <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-8xl h-auto sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[491px] mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-4 lg:gap-12 items-start">
            {/* Left Side - Contact Info Card */}
            <div className="bg-[#F0F0F0] rounded-[20px] sm:rounded-[22px] md:rounded-[25px] lg:rounded-[22px] p-6 sm:p-7 md:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[50px] font-normal text-gray-900 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                Contact <span className="text-[#4FB8BE] font-normal">Info</span>
              </h2>

              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                {/* Phone */}
                <div className="bg-white rounded-[15px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[25px] p-4 sm:p-5 md:p-6 lg:p-8 shadow-sm">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-4 lg:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 sm:w-7 sm:h-7 md:w-12 md:h-12 lg:w-14 lg:h-14 text-[#4FB8BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-sm md:text-xl lg:text-2xl xl:text-[28px] font-normal text-gray-900 mb-1 truncate">  0400 000 000</h3>
                      <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] font-light">Call Today</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-[15px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[25px] p-4 sm:p-5 md:p-6 lg:p-8 shadow-sm">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-4 lg:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 sm:w-7 sm:h-7 md:w-12 md:h-12 lg:w-14 lg:h-14 text-[#4FB8BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-[28px] font-normal text-gray-900 mb-1 ">abc@gmail.com</h3>
                      <p className="text-gray-400 text-xs sm:text-xs md:text-base lg:text-lg xl:text-[18px] font-light">Feel Free To Mail Us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Map */}
            <div className=" overflow-hidden shadow-lg h-[300px] sm:h-[330px] md:h-[400px] lg:h-[470px] xl:h-[491px] lg:w-full xl:w-[646px] mt-4 sm:mt-0 ">
              <img
                src="/map.png"
                alt="Map showing Queensland location"
                className="w-full h-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}