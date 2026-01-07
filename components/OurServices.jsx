import React from "react";

export default function OurServices() {
  const services = [
    {
      icon: "/service-icon-1.png",
      title: "Personal Hygiene",
      description:
        "We provide personal hygiene support to \n help participants stay clean, comfortable,\n and confident.",
      side: "right",
    },
    {
      icon: "/service-icon-2.png",
      title: "Toileting and continence care",
      description:
        "We deliver compassionate toileting and\n continence support to help participants\n manage their daily needs with dignity.",
      side: "left",
    },
    {
      icon: "/service-icon-3.png",
      title: "Mobility care",
      description:
        "We offer reliable mobility care to help \nparticipants stay active, independent,\n and safe.",
      side: "right",
    },
    {
      icon: "/service-icon-4.png",
      title: "Feeding and Nutrition",
      description:
        "We offer reliable feeding and\n nutrition support to promote \nhealthy eating and daily wellness.",
      side: "left",
    },
    {
      icon: "/service-icon-5.png",
      title: "Medication Assistance",
      description:
        "We offer dependable medication \nassistance to support participants'\n daily health needs.",
      side: "right",
    },
    {
      icon: "/service-icon-6.png",
      title: "Wound care",
      description:
        "We deliver safe and attentive \nwound care to support healing\n and maintain participants' health.",
      side: "left",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className=" text-2xl sm:text-2xl md:text-3xl lg:text-[45px]  font-bold text-center mb-16 md:mb-20">
          Our <span className="text-cyan-400">Services</span>
        </h2>

        {/* Desktop Zigzag Layout */}
        <div className="hidden lg:block relative">
          {/* Vertical dashed line */}
          <div
            className="absolute left-1/2 top-[86px] bottom-[94px] -translate-x-1/2"
            style={{
              width: "2px",
              backgroundImage:
                "repeating-linear-gradient(to bottom, #B0B0B0 0 10px, transparent 10px 20px)",
            }}
          ></div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className="relative">
                {service.side === "right" ? (
                  // Icon on LEFT, Content on RIGHT
                  <div className="grid grid-cols-2 gap-0 items-center">
                    {/* Left side - Icon */}
                    <div className="flex justify-center pr-12">
                      <div className="relative">
                        <div className="w-36 h-36 flex items-center justify-center relative z-10">
                          {/* <div className="absolute inset-2 rounded-full border-2 border-gray-400"></div> */}
                          <img
                            src={service.icon}
                            alt={service.title}
                            className="w-[149px] h-[147px] relative z-10"
                          />
                        </div>
                        {/* Horizontal dashed line to center */}
                        <div
                          className="absolute right-0 top-1/2 w-48 min-[1132px]:w-58 translate-x-full -translate-y-1/2"
                          style={{
                            height: "2px",
                            backgroundImage:
                              "repeating-linear-gradient(to right, #B0B0B0 0 10px, transparent 10px 20px)",
                          }}
                        ></div>
                      </div>
                       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-8 bg-gray-50 z-30"></div>
                    </div>

                    {/* Right side - Content */}
                    <div className="pl-32">
                      <h3 className="text-2xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-black text-[20px] font-light leading-relaxed  max-w-md whitespace-pre-line">
                        {service.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-500 transition-colors font-medium"
                      >
                        <span>Learn More</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ) : (
                  // Icon on RIGHT, Content on LEFT
                  <div className="grid grid-cols-2 gap-0 items-center ">
                    {/* Left side - Content */}
                    <div className="pl-26">
                      <h3 className="text-[26px] font-medium mb-3">
                        {service.title}
                      </h3>
                      <p className="text-black font-light text-[20px] leading-relaxed  max-w-md whitespace-pre-line ">
                        {service.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-500 transition-colors font-medium justify-end mt-2"
                      >
                        <span>Learn More</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>

                    {/* Right side - Icon */}
                    <div className="flex justify-center pl-12">
                      <div className="relative">
                        <div className="w-36 h-36 rounded-full  flex items-center justify-center relative z-10">
                          {/* <div className="absolute inset-2 rounded-full border-2 border-gray-400"></div> */}
                          <img
                            src={service.icon}
                            alt={service.title}
                            className="w-[149px] h-[147px] relative z-10"
                          />
                        </div>
                        {/* Horizontal dashed line to center */}
                        <div
                          className="absolute left-0 top-1/2 w-48 min-[1132px]:w-58 -translate-x-full -translate-y-1/2"
                          style={{
                            height: "2px",
                            backgroundImage:
                              "repeating-linear-gradient(to right, #B0B0B0 0 10px, transparent 10px 20px)",
                          }}
                        ></div>
                      </div>
                       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-50 z-30"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-32 h-32 rounded-full bg-black border-4 border-gray-300 flex items-center justify-center relative mb-6">
                <div className="absolute inset-2 rounded-full border-2 border-gray-400"></div>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-14 h-14 relative z-10"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 max-w-sm">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-500 transition-colors font-medium"
              >
                <span>Learn More</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
