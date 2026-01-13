import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/DSC_5588a.jpg';

const Hero = () => {
  const scrollToBooths = () => {
    const boothsSection = document.getElementById('booths-section');
    if (boothsSection) {
      boothsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#ffcc99]/40 via-white to-[#ffb366]/30 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Title Badge at Top Center */}
        <div className="lg:hidden flex justify-center mb-6">
          <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-[#ffb366] to-[#ff9933] rounded-full shadow-lg">
            <span className="text-white text-base sm:text-lg font-bold">
              प्रभाग २६ ड | अनु.क्र. १
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content (Marathi) */}
          <div className="order-3 lg:order-1 text-center lg:text-left">
            {/* Desktop: Title Badge */}
            <div className="hidden lg:inline-block mb-6 px-5 py-2.5 bg-gradient-to-r from-[#ffb366] to-[#ff9933] rounded-full shadow-lg">
              <span className="text-white text-base sm:text-lg md:text-xl font-bold">
                प्रभाग २६ ड | अनु.क्र. १
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
              शिवसेना अधिकृत उमेदवार
              <br />
              <span className="bg-gradient-to-r from-[#ffb366] via-[#ff9933] to-[#ffb366] bg-clip-text text-transparent">
                श्री. भागवत पाराजी आरोटे
              </span>
            </h1>
            
            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              आपला विश्वास, आपली जबाबदारी, आपले नेतृत्व
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              २०२६ महानगरपालिका निवडणुकीसाठी हे संकेतस्थळ नागरिकांना त्यांचे मतदान केंद्र (बूथ) सहज शोधण्यासाठी तयार करण्यात आले आहे.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToBooths}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ffb366] to-[#ff9933] hover:from-[#ff9933] hover:to-[#ff7700] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg lg:text-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 transform"
              >
                <span className="text-xl sm:text-2xl">🗳️</span>
                <span>आपले मतदान केंद्र शोधा</span>
              </button>
              
              <Link
                to="/evm-practice"
                className="inline-flex items-center justify-center gap-3 bg-white border-2 border-[#ffb366] hover:bg-[#ffb366] text-[#ff9933] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg lg:text-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 transform"
              >
                <span className="text-xl sm:text-2xl">📱</span>
                <span>EVM Practice</span>
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glow Effect */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#ffb366] to-[#ff9933] rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative">
                <img
                  src={heroImage}
                  alt="श्री. भागवत पाराजी आरोटे - शिवसेना अधिकृत उमेदवार"
                  className="relative w-full rounded-3xl shadow-2xl border-4 border-white object-cover aspect-[3/4]"
                />
                
                {/* Decorative Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-[#ffb366]/50 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
