import React from 'react';

// Location Icon SVG
const LocationIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// Share Icon SVG
const ShareIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342c.400 0 .812-.04 1.23-.114 1.188-.207 2.29-.5 3.28-.88.99-.38 1.86-.84 2.58-1.36.72-.52 1.28-1.1 1.66-1.72.38-.62.57-1.28.57-1.98 0-.7-.19-1.36-.57-1.98-.38-.62-.94-1.2-1.66-1.72-.72-.52-1.59-.98-2.58-1.36-.99-.38-2.09-.67-3.28-.88-.418-.074-.83-.114-1.23-.114-1.4 0-2.72.28-3.96.84-1.24.56-2.3 1.34-3.18 2.34-.88 1-1.54 2.18-1.98 3.54-.44 1.36-.66 2.8-.66 4.32 0 1.52.22 2.96.66 4.32.44 1.36 1.1 2.54 1.98 3.54.88 1 1.94 1.78 3.18 2.34 1.24.56 2.56.84 3.96.84zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const BoothCard = ({ booth, index, onShare }) => {
  const subBoothsText = (booth.subBooths || [])
    .map((sb) => `${sb.subBoothNumber}. ${sb.subBoothName} >> ${sb.subBoothAgentName || "N"} | ${sb.subBoothAgentContact || "N"}`)
    .join("\n");

  const shareText = [
    booth.boothName,
    `Location: ${booth.boothLocation}`,
    subBoothsText ? `\nबुथ क्र:\n${subBoothsText}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#ffb366] group">
      {/* Header with Number Badge */}
      <div className="mb-4 pb-3 border-b-2 border-[#ffb366] bg-gradient-to-r from-[#ffcc99]/20 to-[#ffb366]/20 -mx-4 sm:-mx-5 px-4 sm:px-5 rounded-t-xl sm:rounded-t-2xl" />

      {/* Booth Information */}
      <div className="mb-5 sm:mb-6 space-y-2">
        <div className="text-gray-900 text-sm sm:text-base leading-relaxed font-medium break-words">
          {booth.boothName}
        </div>
        {Array.isArray(booth.subBooths) && booth.subBooths.length > 0 && (
          <div className="pt-2">
            <ul className="list-none pl-0 space-y-2 sm:space-y-1">
              {booth.subBooths.map((sb, sbIndex) => (
                <li key={sbIndex} className="text-xs sm:text-sm text-gray-700">
                  {/* Mobile: Row 1 - Booth number + Sub-booth name */}
                  <div className="flex flex-row items-center gap-2 sm:hidden mb-1">
                    <span className="inline-flex items-center justify-center w-fit min-w-[34px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#ffb366] to-[#ff9933] text-white font-extrabold text-xs shadow-sm">
                      {sb.subBoothNumber}
                    </span>
                    <span className="font-semibold break-words flex-1">
                      {sb.subBoothName}
                    </span>
                  </div>
                  {/* Mobile: Row 2 - Agent info */}
                  <div className="text-gray-600 text-xs sm:hidden pl-[42px]">
                    {sb.subBoothAgentName || "N"} | <a href={`tel:${sb.subBoothAgentContact || ""}`} className="text-blue-600 hover:text-blue-800 underline">{sb.subBoothAgentContact || "N"}</a>
                  </div>
                  {/* Desktop: All in one row */}
                  <div className="hidden sm:flex sm:items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center justify-center w-fit min-w-[34px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#ffb366] to-[#ff9933] text-white font-extrabold text-xs shadow-sm">
                      {sb.subBoothNumber}
                    </span>
                    <span className="font-semibold break-words flex-1">
                      <span className="break-words">{sb.subBoothName}</span>
                      <span className="text-gray-600 text-xs sm:text-sm"> {'>>'} {sb.subBoothAgentName || "N"} | <a href={`tel:${sb.subBoothAgentContact || ""}`} className="text-blue-600 hover:text-blue-800 underline">{sb.subBoothAgentContact || "N"}</a></span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center items-center">
        <a
          href={booth.boothLocation}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffb366] to-[#ff9933] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base no-underline whitespace-nowrap shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LocationIcon className="w-5 h-5" />
          <span>Location</span>
        </a>
        <button
          onClick={() => onShare(shareText)}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff9933] to-[#ffb366] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base whitespace-nowrap shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <ShareIcon className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default BoothCard;

