import React from "react";

const ScoreCard = ({ score }) => {
  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-lg border border-gray-700 w-64 mx-auto p-6">
      <h2 className="text-xl font-bold mb-4 text-center text-shadow-md">
        Your Score
      </h2>
      <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold text-gray-300">Correct</p>
          <p className="text-2xl font-bold text-green-300 mt-1">
            {score.correct}
          </p>
        </div>
        <div className="w-px h-12 bg-gray-600"></div>
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold text-gray-300">Incorrect</p>
          <p className="text-2xl font-bold text-red-300 mt-1">
            {score.incorrect}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
