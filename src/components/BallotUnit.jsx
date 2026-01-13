import { useState } from "react";

// Function to play beep sound - Real EVM machine beep
const playBeep = () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  // Real EVM beep characteristics: short, sharp, high frequency
  const frequency = 1200; // Higher frequency for sharper beep
  const duration = 120; // Short duration (120ms) like real EVM
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  // Use square wave for sharper, more electronic sound
  oscillator.type = 'square';
  oscillator.frequency.value = frequency;

  // Sharp attack and quick decay for realistic EVM beep
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 0.01); // Quick attack
  gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.03); // Slight sustain
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000); // Quick decay

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration / 1000);
};

export default function BallotUnit({ ballot, onVote, isVoted }) {
  const [showSlip, setShowSlip] = useState(false);

  const handleVote = () => {
    if (isVoted) return;
    
    // Play beep sound (real EVM beep)
    playBeep();
    
    // Show VVPAT slip
    setShowSlip(true);
    setTimeout(() => setShowSlip(false), 3000); // VVPAT hides after 3 sec
    
    // Notify parent
    onVote(ballot.id);
  };

  // Generate all 6 rows (1-6)
  const candidateSerial = ballot.serialNumber || 1;
  const allRows = [];
  
  // Generate rows 1 through 6
  for (let i = 1; i <= 6; i++) {
    const isCandidateRow = i === candidateSerial;
    allRows.push({
      number: i,
      isCandidate: isCandidateRow,
      candidate: isCandidateRow ? ballot.candidate : null
    });
  }

  const getMarathiNumber = (num) => {
    const map = { 1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६' };
    return map[num] || num.toString();
  };

  return (
    <div className={`${ballot.bgColor} rounded-lg p-4 shadow-xl border-2 border-gray-500 relative`}>
      {/* Header */}
      <div className="bg-white rounded-full px-4 py-1.5 text-center font-bold mb-2 text-sm">
        प्रभाग क्र. {ballot.number}
      </div>

      {/* Ready Status */}
      <div className="flex items-center text-sm mb-2">
        <span className="text-gray-800">Ready</span>
        <span className="ml-2 w-3 h-3 bg-green-600 rounded-full"></span>
        <span className="ml-auto font-semibold text-gray-700">Ballot Unit</span>
      </div>

      {/* Body */}
      <div className="border border-gray-400 rounded bg-white overflow-hidden">
        {/* All Rows */}
        {allRows.map((row, index) => (
          <div 
            key={row.number} 
            className={`flex items-center ${index < 5 ? 'border-b border-gray-300' : ''}`}
          >
            {/* Candidate Paper Section */}
            <div className={`flex-1 ${ballot.innerBg} p-2 flex items-center`}>
              {row.isCandidate ? (
                <>
                  <span className="text-red-600 font-bold mr-2 text-lg min-w-[20px]">
                    {getMarathiNumber(row.number)}
                  </span>
                  <span className="font-medium text-base flex-1 mr-2">{row.candidate}</span>
                  <span className="ml-auto flex flex-col items-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Indian_Election_Symbol_Bow_And_Arrow2.svg/2560px-Indian_Election_Symbol_Bow_And_Arrow2.svg.png" 
                      alt="Bow and Arrow Election Symbol" 
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-xs text-gray-700 mt-0.5">धनुष्यबाण</span>
                  </span>
                </>
              ) : (
                <>
                  <span className="text-gray-400 font-bold mr-2 text-lg min-w-[20px]">
                    {getMarathiNumber(row.number)}
                  </span>
                  <span className="font-medium text-sm text-gray-300 flex-1">—</span>
                  <span className="ml-auto text-gray-300 text-xl">—</span>
                </>
              )}
            </div>

            {/* Button Column - Only show for candidate row */}
            {row.isCandidate ? (
              <div className="w-24 bg-gray-100 border-l border-gray-400 p-2 flex flex-row items-center justify-center gap-3">
                {/* LED - Black by default, turns red when voted */}
                <div className={`w-4 h-4 rounded-full transition-all ${
                  isVoted ? "bg-red-600" : "bg-black"
                }`}></div>

                {/* Vote Button - Oval shaped */}
                <button
                  onClick={handleVote}
                  disabled={isVoted}
                  className={`w-12 h-6 transition-all ${
                    isVoted 
                      ? "bg-blue-300 cursor-not-allowed" 
                      : "bg-blue-700 hover:bg-blue-800 active:scale-95 cursor-pointer shadow-md"
                  }`}
                  title={isVoted ? "Already Voted" : "Click to Vote"}
                  style={{ borderRadius: '12px' }}
                ></button>
              </div>
            ) : (
              <div className="w-24 bg-gray-100 border-l border-gray-400 p-2">
                {/* Empty space for non-candidate rows */}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* VVPAT Slip */}
      {showSlip && (
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 bg-white border-2 border-gray-600 shadow-2xl px-4 py-3 text-center animate-slide z-50 min-w-[220px]">
          <div className="border-b border-gray-300 pb-1 mb-1">
            <p className="text-xs font-semibold text-gray-700">VVPAT</p>
          </div>
          <p className="text-xs text-gray-600 mb-1">आपण मत दिले:</p>
          <p className="font-bold text-sm text-gray-900">{ballot.candidate}</p>
          <p className="text-xs text-gray-500 mt-1">प्रभाग क्र. {ballot.number}</p>
        </div>
      )}

      {/* Status */}
      {isVoted && (
        <div className="text-center mt-2 text-green-700 font-semibold text-sm">
          Vote Recorded
        </div>
      )}

      {/* Reset Button */}
      <button
        onClick={() => { 
          if (onVote) {
            // Reset logic would be handled by parent
          }
        }}
        className="mt-2 w-full bg-gray-700 hover:bg-gray-800 text-white py-1.5 rounded text-sm font-semibold transition-all"
        style={{ display: 'none' }} // Hidden as per image - reset handled elsewhere
      >
        Reset (Polling Officer)
      </button>
    </div>
  );
}
