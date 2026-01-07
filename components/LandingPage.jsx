import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/background-pattern.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Foreground Content */}
      <div className="relative z-10 min-h-screen flex items-start justify-center px-4 py-8 lg:py-12">
        {/* White Card */}
        <div className="w-full max-w-[1400px] bg-[#F6F6F6] rounded-[65px] shadow-lg overflow-hidden mx-auto">
          {/* Navbar inside card */}
          <Navbar />

          {/* Hero Section - Mobile: column, Desktop: grid (from 900px) */}
          <section className="flex flex-col min-[900px]:grid min-[900px]:grid-cols-2">
            {/* Left Content - Mobile: order-2, Desktop: order-1 */}
            <div className="px-6 lg:px-12 py-4 flex flex-col order-2 min-[900px]:order-1">
              {/* Title + underline */}
              <div className="relative inline-block mb-6">
                <div className="relative mb-6 max-w-fit">
                  {/* Heading */}
                  <h1 className="relative text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
                    <span className="text-[#4FB8BE]">CARE</span>{" "}
                    <span className="text-gray-900">WITH</span>{" "}
                    <span className="text-[#4FB8BE]">HEART</span>
                  </h1>

                  {/* Underline image */}
                  <img
                    src="/image1.png"
                    alt="Underline"
                    className="absolute -left-12 -bottom-10 w-full scale-x-[1.1] max-w-full pointer-events-none mt-2"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 max-w-lg text-base lg:text-[24px] text-left font-medium leading-relaxed">
                We connect top healthcare talent with rewarding roles and
                deliver comprehensive NDIS support to enhance lives.
              </p>

              {/* EXPLORE BUTTON */}
              <button className="bg-[#4FB8BE] hover:bg-[#4FB8BE] text-white text-lg px-8 py-4 rounded-[63px] w-[151px] h-[50px] flex items-center gap-2 shadow-md hover:shadow-lg transition mt-8">
                Explore
                <span className="w-8 h-8 rounded-full flex items-center justify-center">
                  <img
                    src="/image2.png"
                    alt="Arrow"
                    className="w-6 h-6 object-contain"
                  />
                </span>
              </button>
            </div>

            {/* Right Image - Mobile: order-1, Desktop: order-2 */}
            <div className="relative min-h-[300px] min-[640px]:min-h-[440px] min-[768px]:min-h-[520px] min-[900px]:min-h-[480px] order-1 min-[900px]:order-2">
              <div className="absolute inset-4 min-[900px]:inset-6 lg:inset-10 min-[900px]:-translate-y-12 bg-white rounded-[40px] min-[900px]:rounded-[58px] shadow-lg min-[900px]:shadow-2xl overflow-hidden">
                <img
                  src="/hero.png"
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}