import { useState } from "react";
import BallotUnit from "./BallotUnit";

export default function EvmMachine({ machineId, ballots, onReset, onVote, allVotedBallots }) {
  const handleVote = (ballotId) => {
    if (onVote) {
      onVote(ballotId);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-2xl border-4 border-gray-600">
      {/* Machine Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-4 py-2 text-center font-bold mb-4 shadow-lg">
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg">
            {machineId === 1 ? 'EVM मशीन १' : 'EVM मशीन २'}
          </span>
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        </div>
        <div className="text-xs font-normal mt-1 opacity-90">
          {ballots.length} Ballot Units
        </div>
      </div>

      {/* Ballot Units */}
      <div className="mb-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Ballot Units:</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ballots.map((ballot) => (
          <BallotUnit
            key={ballot.id}
            ballot={ballot}
            machineId={machineId}
            isVoted={allVotedBallots?.has(ballot.id) || false}
            onVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
}
