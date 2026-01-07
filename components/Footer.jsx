import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden">
      {/* First Background Image Layer (bottom layer) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/background-pattern.png" 
          alt="Footer Background 1" 
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="absolute inset-0 z-[1]">
        <img 
          src="/footer.png" 
          alt="Footer Background 2" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-900 text-base lg:text-lg font-semibold hover:text-gray-700 transition">
                  HOME
                </a>
              </li>
              <li>
                <a href="about-us" className="text-gray-900 text-base lg:text-lg font-semibold hover:text-gray-700 transition">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="/ndis" className="text-gray-900 text-base lg:text-lg font-semibold hover:text-gray-700 transition">
                  NDIS
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-900 text-base lg:text-lg font-semibold hover:text-gray-700 transition">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="text-center md:text-left">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex justify-center md:justify-start items-center gap-3">
                  <img
      src="/phone.png"
      alt="Phone"
      className="w-4 h-4 lg:w-6 lg:h-6 object-contain"
    />
                <a href="tel:0434810910" className="text-gray-900 text-base lg:text-lg font-semibold hover:text-gray-700 transition">
                  0434810910
                </a>
              </div>

              {/* Email */}
              <div className="flex justify-center md:justify-start items-center gap-3">
                  <img
      src="/email.png"
      alt="Email"
      className="w-4 h-4 lg:w-6 lg:h-6 object-contain"
    />
                <a href="mailto:pcds@outlook.com.au" className="text-gray-900 text-base lg:text-lg font-semibold hover:text-gray-700 transition">
                  pcds@outlook.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div className="text-center lg:text-left md:ml-8 lg:ml-0">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
              Connect
            </h3>
            <div className="flex justify-center lg:justify-start items-center gap-4">
              {/* Facebook */}
              <a href="#" className="hover:opacity-80 transition">
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="w-4 h-4 lg:w-6 lg:h-6 object-contain"
                />
              </a>

              {/* Instagram */}
              <a href="#" className="hover:opacity-80 transition">
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="w-4 h-4 lg:w-6 lg:h-6 object-contain"
                />
              </a>

              {/* LinkedIn */}
              <a href="#" className="hover:opacity-80 transition">
                <img
                  src="/linked-in.png"
                  alt="LinkedIn"
                  className="w-4 h-4 lg:w-6 lg:h-6 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:-mt-6 lg:-mt-8 lg:justify-end">
            <div className="text-center">
              <img 
                src="/logo.png" 
                alt="Care with Heart Logo"
                className="w-24 h-24 md:w-[120px] md:h-[120px] lg:w-[155px] lg:h-[151px] mx-auto mb-2"
              />
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div>
          <p className="text-center text-[#100F0F] text-sm lg:text-[21px] font-medium">
            © 2026 Professionals Care. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}