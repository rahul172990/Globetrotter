import React, { useState } from "react";
import ChallengeButton from "./ChallengeButton";
import UsernameForm from "./UsernameForm";

const Header = ({ username, score, setUserName }) => {
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <>
      {openRegister && (
        <div className="absolute inset-x-0 top-1/3 mx-auto w-11/12 max-w-md p-4  bg-opacity-80 backdrop-blur-md rounded-lg shadow-xl border border-gray-600 text-center">
          <UsernameForm
            onRegister={(username) => setUserName(username)}
            score={score}
            setOpenRegister={setOpenRegister}
          />
        </div>
      )}

      <header className="bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <p className="text-white text-2xl font-bold hover:text-gray-200 transition-all">
              Globetrotter
            </p>
          </div>
          <div className="flex gap-4">
            <p
              className="text-white cursor-pointer"
              onClick={() => {
                setOpenRegister(!openRegister);
              }}
            >
              Register
            </p>
            <ChallengeButton username={username} score={score} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
