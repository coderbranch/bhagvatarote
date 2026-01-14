import React from 'react';
import heroImage from '../assets/DSC_5588a.jpg';
import candidatesImage from '../assets/ChatGPT Image Jan 14, 2026, 10_21_24 PM.png';

const Hero = () => {

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
            
            {/* Partner Candidates */}
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-[#ffcc99]/30 to-[#ffb366]/20 rounded-xl p-4 sm:p-5 border-2 border-[#ffb366]/40">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center lg:text-left">
                प्रभाग २६  शिवसेना अधिकृत उमेदवार
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-gray-700">
                  <span className="font-bold text-[#ff9933]">प्रभाग क्र. २६ अ</span>
                  <span className="text-gray-500">|</span>
                  <span className="font-semibold">१</span>
                  <span className="text-gray-500">|</span>
                  <span className="font-semibold">इंगोले निवृत्ती हरिभाऊ</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-gray-700">
                  <span className="font-bold text-[#ff9933]">प्रभाग क्र. २६ ब</span>
                  <span className="text-gray-500">|</span>
                  <span className="font-semibold">१</span>
                  <span className="text-gray-500">|</span>
                  <span className="font-semibold">गायकर हर्षदा समाधान</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-gray-700">
                  <span className="font-bold text-[#ff9933]">प्रभाग क्र. २६ क</span>
                  <span className="text-gray-500">|</span>
                  <span className="font-semibold">२</span>
                  <span className="text-gray-500">|</span>
                  <span className="font-semibold">जाधव नयना निलेश</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-gray-700">
                  <span className="font-bold text-[#ff9933]">प्रभाग क्र. २६ ड</span>
                  <span className="text-gray-500">|</span>
                  <span className="font-semibold">१</span>
                  <span className="text-gray-500">|</span>
                  <span className="font-semibold">भागवत पाराजी आरोटे</span>
                </div>
              </div>
            </div>
            
            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              आपला विश्वास, आपली जबाबदारी, आपले नेतृत्व
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              २०२६ महानगरपालिका निवडणुकीसाठी हे संकेतस्थळ नागरिकांना त्यांचे मतदान केंद्र (बूथ) सहज शोधण्यासाठी तयार करण्यात आले आहे.
            </p>
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
