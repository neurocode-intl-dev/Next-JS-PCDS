import React from "react";

export default function MissionVision() {
  return (
    <section className="w-full bg-gray-50 py-12 lg:py-20 px-4">
      <div className="max-w-[1360px] mx-auto">
        {/* Grid Container */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Our Mission Card */}
          <div
            className=" bg-white rounded-4xl  overflow-hidden border border-t-2 border-l-2 border-r-4 border-b-6 border-[#57C8CA] p-8 lg:p-10
  shadow-[2px_2px_0_rgba(87,200,202,0.35)]"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-4 mb-6">
              {/* Mission Icon */}
              <div className="flex-shrink-0">
                <img
                  src="/mission-icon.png"
                  alt="Mission Icon"
                  className="w-12 h-12 lg:w-14 lg:h-14"
                />
              </div>

              {/* Title */}
              <h2 className=" text-2xl sm:text-2xl md:text-3xl lg:text-[45px]  font-bold text-[#57C8CA]">
                Our Mission
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-800 text-base font-light text-left lg:text-[20px] leading-relaxed">
              At Care With Heart, we enhance the lives of individuals with
              disabilities through compassionate, personalised support. We
              empower clients to reach their full potential while maintaining
              integrity, respect, and a safe, supportive environment. We also
              connect skilled healthcare professionals with meaningful job
              opportunities to ensure exceptional care standards.
            </p>
          </div>

          {/* Our Vision Card */}
          <div
            className=" bg-white rounded-4xl  overflow-hidden border border-t-2 border-l-2 border-r-4 border-b-6 border-[#57C8CA] p-8 lg:p-10
  shadow-[2px_2px_0_rgba(87,200,202,0.35)]"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-4 mb-6">
              {/* Vision Icon */}
              <div className="flex-shrink-0">
                <img
                  src="/vision-icon.png"
                  alt="Vision Icon"
                  className="w-14 h-14 lg:w-14 lg:h-14"
                />
              </div>

              {/* Title */}
              <h2 className=" text-2xl sm:text-2xl md:text-3xl lg:text-[45px]  font-bold text-[#57C8CA]">
                Our Vision
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-800 text-base font-light text-left lg:text-[20px] leading-relaxed">
              Our vision at Professionals Care is to lead in delivering
              exceptional disability support by fostering an inclusive community
              where every individual is valued and empowered. We strive to set
              the standard for quality care through continuous innovation,
              strong partnerships, and a commitment to accessibility and respect
              for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
