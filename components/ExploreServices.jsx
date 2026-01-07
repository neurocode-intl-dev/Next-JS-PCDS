export default function ExploreServices() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      {/* Teal section container */}
      <div className="relative w-full max-w-[1394px] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[45px] overflow-hidden bg-[#57C7C6]">
        {/* Background image overlay */}
        <img
          src="/image5.png"
          alt="Background texture"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Content */}
        <div className="relative z-10 px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
          {/* Title */}
          <h2 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-[45px] font-semibold text-center mb-8 sm:mb-10 md:mb-12">
            EXPLORE SERVICES WITH US
          </h2>

          {/* Cards - Modified grid breakpoints */}
          <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-4 sm:gap-5 md:gap-6 min-[1432px]:gap-8">
            {/* Card 1 */}
            <div className="bg-white/80 rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-4 sm:p-6 md:p-8 shadow-md min-h-[300px] sm:min-h-[350px] md:min-h-[400px] min-[1432px]:h-[420px]">
              <h3 className="text-lg sm:text-xl md:text-xl min-[1432px]:text-[30px] font-bold mb-4 sm:mb-5 md:mb-6">
                NDIS and Disability Services:
              </h3>

              {/* Changed lg:flex-row to min-[1432px]:flex-row */}
              <div className="flex flex-col min-[1432px]:flex-row gap-4 sm:gap-5 md:gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src="/image4.png"
                    alt="NDIS Services"
                    className="w-full h-[180px] sm:h-[200px] md:h-[250px] min-[1432px]:h-[281px] min-[1432px]:w-[290px] object-contain lg:object-contain min-[1432px]:object-cover rounded-[12px] sm:rounded-[16px] md:rounded-[20px]"
                  />
                </div>

                {/* Text + Button */}
                <div className="flex flex-col justify-between flex-1">
                  <p className="text-black/70 leading-relaxed text-sm sm:text-base min-[881px]:text-lg min-[1432px]:text-[20px] mb-4 sm:mb-5 md:mb-6 min-[1432px]:mt-8">
                    We provide personalised, compassionate disability care that
                    enhances quality of life and supports each person's unique
                    needs.
                  </p>

                  <button className="bg-[#57C8CA] text-white text-sm sm:text-base md:text-lg min-[1432px]:text-[22px] font-semibold px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-[12px] sm:rounded-[14px] md:rounded-[16px] w-full min-[1432px]:w-[180px] h-[40px] sm:h-[44px] md:h-[54px]">
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-4 sm:p-6 md:p-8 shadow-md min-h-[300px] sm:min-h-[350px] md:min-h-[400px] min-[1432px]:h-[420px]">
              <h3 className="text-lg sm:text-xl md:text-xl min-[1432px]:text-[30px] font-bold mb-4 sm:mb-5 md:mb-6">
                Recruitment:
              </h3>

              {/* Changed lg:flex-row to min-[1432px]:flex-row */}
              <div className="flex flex-col min-[1432px]:flex-row gap-4 sm:gap-5 md:gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src="/image3.png"
                    alt="Recruitment"
                    className="w-full h-[180px] sm:h-[200px] md:h-[250px] min-[1432px]:h-[281px] min-[1432px]:w-[290px] object-contain rounded-[12px] sm:rounded-[16px] md:rounded-[20px] min-[768px]:mt-8 min-[851px]:mt-0"
                  />
                </div>

                {/* Text + Button */}
                <div className="flex flex-col justify-between flex-1">
                  <p className="text-black/70 leading-relaxed text-sm sm:text-base min-[881px]:text-lg min-[1432px]:text-[20px] mb-4 sm:mb-5 md:mb-6 min-[1432px]:mt-8">
                    We connect skilled medical professionals and nurses with
                    hospitals and clinics to support quality patient care.
                  </p>

                  <button className="bg-[#57C8CA] text-white text-sm sm:text-base md:text-lg min-[1432px]:text-[22px] font-semibold min-[768px]:mt-5 min-[816px]:mt-0 min-[879px]:mt-5 min-[898px]:mt-0 min-[1116px]:mt-5 min-[1214px]:mt-0 px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-[12px] sm:rounded-[14px] md:rounded-[16px] w-full min-[1432px]:w-[180px] h-[40px] sm:h-[44px] md:h-[54px] min-[1214px]:mt-6 min-[1265px]:mt-0">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}