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

const BoothTable = ({ booths, onShare }) => {
  return (
    <div className="overflow-x-auto w-full rounded-lg border border-gray-200 shadow-inner -mx-2 sm:mx-0">
      <table className="w-full border-collapse hidden md:table min-w-full">
        <thead className="bg-gradient-to-r from-[#ffb366] to-[#ff9933] text-white sticky top-0 z-10">
          <tr>
            <th className="py-4 px-3 sm:px-4 md:px-5 text-left font-bold text-xs sm:text-sm md:text-base sticky top-0 z-10 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] shadow-md">
              Booth Name
            </th>
            <th className="py-4 px-3 sm:px-4 md:px-5 text-left font-bold text-xs sm:text-sm md:text-base sticky top-0 z-10 w-[180px] sm:w-[200px] min-w-[160px] sm:min-w-[180px] text-center shadow-md">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {booths.map((booth, index) => {
            const subBoothsText = (booth.subBooths || [])
              .map((sb) => `${sb.subBoothNumber}. ${sb.subBoothName}`)
              .join("\n");

            const shareText = [
              booth.boothName,
              `Location: ${booth.boothLocation}`,
              subBoothsText ? `\nबुथ क्र:\n${subBoothsText}` : "",
            ]
              .filter(Boolean)
              .join("\n");
            return (
              <tr 
                key={index} 
                className="border-b border-gray-100 transition-all duration-200 hover:bg-orange-50 last:border-b-0 group"
              >
                <td className="py-4 px-3 sm:px-4 md:px-5 align-top leading-relaxed">
                  <div className="space-y-2">
                    <div className="text-gray-900 text-sm sm:text-base font-semibold leading-relaxed break-words">
                      {booth.boothName}
                    </div>
                    {Array.isArray(booth.subBooths) && booth.subBooths.length > 0 && (
                      <div className="mt-3">
                        <ul className="list-none pl-0 space-y-2 sm:space-y-1">
                          {booth.subBooths.map((sb, sbIndex) => (
                            <li key={sbIndex} className="text-xs sm:text-sm text-gray-700">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="inline-flex items-center justify-center w-fit min-w-[34px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#ffb366] to-[#ff9933] text-white font-extrabold text-xs shadow-sm">
                                  {sb.subBoothNumber}
                                </span>
                                <span className="font-semibold break-words flex-1">
                                  {sb.subBoothName}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-4 px-3 sm:px-4 md:px-5 align-top text-center">
                  <div className="flex gap-2 sm:gap-2.5 justify-center flex-wrap items-center">
                    <a
                      href={booth.boothLocation}
                      className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#ffb366] to-[#ff9933] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm no-underline whitespace-nowrap shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LocationIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Location</span>
                      <span className="sm:hidden">Loc</span>
                    </a>
                    <button
                      onClick={() => onShare(shareText)}
                      className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#ff9933] to-[#ffb366] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm whitespace-nowrap shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                      <ShareIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BoothTable;

