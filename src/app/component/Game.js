"use client";

import { useState, useEffect } from "react";
import InviteeScore from "./InviteeScore";
import ScoreCard from "./ScoreCard";
import Header from "./Header";
import Confetti from "react-confetti";
import { FaSadTear, FaSmile } from "react-icons/fa";
import { citiesOption } from "../constants";
import { getRandomOptions } from "../helpers";

const Game = () => {
  const [destination, setDestination] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [options, setOptions] = useState(null);
  const [userId, setUserId] = useState("");

  const fetchDestination = async () => {
    try {
      const response = await fetch("/api/destination");
      if (!response.ok) {
        throw new Error("Failed to fetch destination");
      }
      const data = await response.json();
      const randomOptions = getRandomOptions(citiesOption, data?.city);
      setOptions(randomOptions);
      setDestination(data);
      setShowFeedback(false);
    } catch (error) {
      console.error("Error fetching destination:", error);
    }
  };

  useEffect(() => {
    fetchDestination();

    if (window !== "undefined") {
      let uniqueUser = window?.location?.pathname?.split("user")?.[1];
      setUserId(uniqueUser);
    }
  }, []);

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    const correct = answer === destination.city;
    setIsCorrect(correct);
    setScore((prev) => ({
      ...prev,
      correct: correct ? prev.correct + 1 : prev.correct,
      incorrect: !correct ? prev.incorrect + 1 : prev.incorrect,
    }));
    setShowFeedback(true);
  };

  const handleNext = () => {
    fetchDestination();
    setIsCorrect(false);
  };

  if (!destination) return <div>Loading...</div>;

  return (
    <>
      <Header username={userName} score={score} setUserName={setUserName} />
      <div className="game-container">
        <div className="flex justify-center m-auto gap-2 mb-4">
          <div>
            <ScoreCard score={score} />
          </div>
          <div>{userId && <InviteeScore username={userId} />}</div>
        </div>

        <div className="max-w-2xl mx-auto p-6 bg-gray-200 rounded-2xl shadow-xl border border-gray-700">
          <div className="p-6 rounded-xl bg-gray-900  text-white shadow-lg">
            <div className=" space-x-3">
              {destination.clues.map((clue, index) => {
                return (
                  <div className="flex p-2 items-center" key={clue}>
                    <span className=" font-bold bg-blue-500 px-3 py-1 rounded-full">
                      {index + 1}
                    </span>
                    <p className="ml-3 ">{clue}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-6">
            {options?.map((city, index) => (
              <button
                key={city}
                onClick={() => handleAnswer(city)}
                className={`relative flex items-center w-full px-6 py-3  rounded-xl shadow-md border-2 transition-all duration-300 cursor-pointer
              `}
              >
                <span className="absolute left-4 text-xl font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="ml-8">{city}</span>
              </button>
            ))}
          </div>
        </div>

        {isCorrect && <Confetti />}

        {showFeedback && (
          <div className="absolute inset-x-0 top-1/3 mx-auto w-11/12 max-w-md p-4 bg-black bg-opacity-80 backdrop-blur-md rounded-lg shadow-xl border border-gray-600 text-center text-white">
            {isCorrect ? (
              <>
                <FaSmile
                  size={50}
                  className="text-green-400 animate-bounce mx-auto"
                />
                <p className="text-lg font-semibold mt-2">Correct! 🎉</p>
              </>
            ) : (
              <>
                <FaSadTear
                  size={50}
                  className="text-red-400 animate-pulse mx-auto"
                />
                <p className="text-lg font-semibold mt-2">Incorrect!</p>
              </>
            )}

            <p className="mt-2 text-sm text-gray-300 italic">
              Fun Fact: {destination.fun_fact[0]}
            </p>

            <button
              onClick={handleNext}
              className="mt-4 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-pointer"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Game;
