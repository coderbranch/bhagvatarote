import { useState, useEffect } from "react";
import EvmMachine from "./EvmMachine";

// Function to play completion beep (1 second)
const playCompletionBeep = () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  const frequency = 1000;
  const duration = 1000; // 1 second
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.type = 'square';
  oscillator.frequency.value = frequency;

  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 0.01);
  gainNode.gain.linearRampToValueAtTime(0.35, audioContext.currentTime + 0.1);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration / 1000);
};

// Ballot data organized into 2 EVM machines
const machineData = [
  {
    machineId: 1,
    ballots: [
      { 
        id: 1, 
        number: '२६ अ', 
        serialNumber: 1,
        bgColor: 'bg-gray-200', 
        innerBg: 'bg-gray-50', 
        candidate: 'इंगोले निवृत्ती हरिभाऊ' 
      },
      { 
        id: 3, 
        number: '२६ ब', 
        serialNumber: 1,
        bgColor: 'bg-pink-200', 
        innerBg: 'bg-pink-100', 
        candidate: 'गायकर हर्षदा समाधान' 
      }
    ]
  },
  {
    machineId: 2,
    ballots: [
      { 
        id: 2, 
        number: '२६ क', 
        serialNumber: 2,
        bgColor: 'bg-yellow-200', 
        innerBg: 'bg-yellow-50', 
        candidate: 'जाधव नयना निलेश' 
      },
      { 
        id: 4, 
        number: '२६ ड', 
        serialNumber: 1,
        bgColor: 'bg-blue-200', 
        innerBg: 'bg-blue-100', 
        candidate: 'आरोटे भागवत पाराजी' 
      }
    ]
  }
];

export default function EvmPracticePage() {
  const [resetKey, setResetKey] = useState(0);
  const [allVotedBallots, setAllVotedBallots] = useState(new Set());
  const [hasPlayedCompletionBeep, setHasPlayedCompletionBeep] = useState(false);

  const handleVote = (ballotId) => {
    setAllVotedBallots(prev => {
      const newSet = new Set([...prev, ballotId]);
      return newSet;
    });
  };

  // Check if all 4 votes are recorded and play completion beep
  useEffect(() => {
    if (allVotedBallots.size === 4 && !hasPlayedCompletionBeep) {
      // Small delay to ensure all votes are processed
      setTimeout(() => {
        playCompletionBeep();
        setHasPlayedCompletionBeep(true);
      }, 100);
    }
  }, [allVotedBallots.size, hasPlayedCompletionBeep]);

  const handleGlobalReset = () => {
    setResetKey(prev => prev + 1);
    setAllVotedBallots(new Set());
    setHasPlayedCompletionBeep(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">
          EVM Voting Practice Simulator
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-4">
          प्रभाग क्र. २६ - २ EVM मशीन
        </p>
      </div>

      {/* EVM Machines */}
      <div className="max-w-7xl mx-auto space-y-6">
        {machineData.map((machine) => (
          <EvmMachine
            key={`${machine.machineId}-${resetKey}`}
            machineId={machine.machineId}
            ballots={machine.ballots}
            onReset={handleGlobalReset}
            onVote={handleVote}
            allVotedBallots={allVotedBallots}
          />
        ))}
      </div>

      {/* Global Reset Button */}
      <div className="max-w-7xl mx-auto mt-6 flex justify-center">
        <button
          onClick={handleGlobalReset}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-2.5 rounded-lg font-semibold text-sm transition-all active:scale-95 shadow-lg"
        >
          Reset All Machines (Polling Officer)
        </button>
      </div>
    </div>
  );
}
