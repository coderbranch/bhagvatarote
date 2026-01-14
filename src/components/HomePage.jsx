import React from 'react'
import { allBoothsData } from '../data/boothsData'
import BoothTable from './BoothTable'
import BoothCard from './BoothCard'
import Hero from './Hero'

export default function HomePage() {
  const booths = allBoothsData.booths;
  const totalBooths = booths.reduce((sum, booth) => sum + (booth.subBooths?.length || 0), 0);

  const handlePrint = async () => {
    // Create a temporary div with the content
    const printDiv = document.createElement('div');
    printDiv.style.position = 'absolute';
    printDiv.style.left = '-9999px';
    printDiv.style.width = '800px';
    printDiv.style.padding = '40px';
    printDiv.style.fontFamily = 'Arial, sans-serif';
    
    printDiv.innerHTML = `
      <h1 style="text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Booth Information</h1>
      <p style="text-align: center; font-size: 16px; margin-bottom: 30px;">Total Booths: ${totalBooths}</p>
      ${booths.map((booth) => `
        <div style="margin-bottom: 25px; page-break-inside: avoid;">
          <h2 style="font-size: 14px; font-weight: bold; margin-bottom: 10px; line-height: 1.6;">${booth.boothName}</h2>
          ${Array.isArray(booth.subBooths) && booth.subBooths.length > 0 ? `
            <div style="margin-left: 20px; margin-top: 10px;">
              <p style="font-size: 12px; font-weight: bold; margin-bottom: 8px;">बुथ क्र:</p>
              <ul style="list-style: none; padding: 0; margin: 0;">
                ${booth.subBooths.map((subBooth) => `
                  <li style="font-size: 12px; margin-bottom: 6px; line-height: 1.6; padding-left: 10px;">
                    <strong>${subBooth.subBoothNumber}.</strong> ${subBooth.subBoothName}
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `).join('')}
    `;
    
    document.body.appendChild(printDiv);
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Booth Information</title>
          <style>
            @media print {
              @page { margin: 20mm; }
              body { font-family: Arial, sans-serif; }
            }
          </style>
        </head>
        <body>
          ${printDiv.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
      document.body.removeChild(printDiv);
    }, 250);
  };

  const handleExport = async () => {
    try {
      // Dynamically import html2pdf
      const html2pdf = (await import('html2pdf.js')).default;
      
      // Create a temporary div with the content
      const exportDiv = document.createElement('div');
      exportDiv.style.width = '800px';
      exportDiv.style.padding = '40px';
      exportDiv.style.fontFamily = 'Arial, sans-serif';
      
      exportDiv.innerHTML = `
        <h1 style="text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Booth Information</h1>
        <p style="text-align: center; font-size: 16px; margin-bottom: 30px;">Total Booths: ${totalBooths}</p>
        ${booths.map((booth) => `
          <div style="margin-bottom: 25px; page-break-inside: avoid;">
            <h2 style="font-size: 14px; font-weight: bold; margin-bottom: 10px; line-height: 1.6;">${booth.boothName}</h2>
            ${Array.isArray(booth.subBooths) && booth.subBooths.length > 0 ? `
              <div style="margin-left: 20px; margin-top: 10px;">
                <p style="font-size: 12px; font-weight: bold; margin-bottom: 8px;">बुथ क्र:</p>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  ${booth.subBooths.map((subBooth) => `
                    <li style="font-size: 12px; margin-bottom: 6px; line-height: 1.6; padding-left: 10px;">
                      <strong>${subBooth.subBoothNumber}.</strong> ${subBooth.subBoothName}
                    </li>
                  `).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        `).join('')}
      `;
      
      document.body.appendChild(exportDiv);
      
      const opt = {
        margin: [15, 15, 15, 15],
        filename: 'booth-information.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      
      await html2pdf().set(opt).from(exportDiv).save();
      
      document.body.removeChild(exportDiv);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#ffcc99] to-[#ffb366] rounded-full shadow-lg border-2 border-[#ffb366]/30">
                <span className="text-sm sm:text-base md:text-lg font-bold text-black">
                  Total Booths: <span className="text-black text-xl sm:text-2xl">{totalBooths}</span>
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffb366] to-[#ff9933] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  <span>Print</span>
                </button>
                <button
                  onClick={handleExport}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff9933] to-[#ffb366] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Export</span>
                </button>
              </div>
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

