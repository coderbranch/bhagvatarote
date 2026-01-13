import React from 'react'
import { allBoothsData } from '../data/boothsData'
import BoothTable from './BoothTable'
import BoothCard from './BoothCard'
import Hero from './Hero'

export default function HomePage() {
  const booths = allBoothsData.booths;

  const shareBooth = async (shareText) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Booth Information',
          text: shareText,
        });
      } catch (err) {
        console.log('Error sharing:', err);
        fallbackShare(shareText);
      }
    } else {
      fallbackShare(shareText);
    }
  };

  const fallbackShare = (shareText) => {
    const textArea = document.createElement('textarea');
    textArea.value = shareText;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      alert('Booth information copied to clipboard!');
    } catch (err) {
      alert('Please copy manually:\n\n' + shareText);
    }
    document.body.removeChild(textArea);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <div id="booths-section" className="p-2 sm:p-4 md:p-5 lg:p-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border border-gray-200">
          {/* Header Section */}
          <div className="mb-6 sm:mb-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-[#ffb366] via-[#ff9933] to-[#ffb366] bg-clip-text text-transparent">
                Booth Information
              </span>
            </h1>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#ffcc99] to-[#ffb366] rounded-full shadow-lg border-2 border-[#ffb366]/30">
              <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                Total Booths: <span className="text-[#ff9933] text-xl sm:text-2xl">{booths.length}</span>
              </span>
            </div>
          </div>

          <div className="overflow-x-visible md:overflow-x-auto">
            {/* Desktop Table */}
            <BoothTable booths={booths} onShare={shareBooth} />
            
            {/* Mobile Cards */}
            <div className="block md:hidden space-y-4 sm:space-y-3">
              {booths.map((booth, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.03}s` }}>
                  <BoothCard
                    booth={booth}
                    index={index}
                    onShare={shareBooth}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

