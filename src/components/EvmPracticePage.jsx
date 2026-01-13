import { useState } from "react";
import EvmMachine from "./EvmMachine";

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

  const handleGlobalReset = () => {
    setResetKey(prev => prev + 1);
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
