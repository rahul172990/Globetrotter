"use client";

import { useState } from "react";

const UsernameForm = ({ onRegister, score, setOpenRegister }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, score }),
    });
    const data = await response.json();
    if (response.ok) {
      onRegister(username);
      setOpenRegister(false);
    } else {
      alert(data.error);
      setOpenRegister(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-200"
    >
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
        />
      </div>
      <button
        type="submit"
        className="w-full cursor-pointer bg-gradient-to-r bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold focus:ring-offset-2 transition-all"
      >
        Register
      </button>
    </form>
  );
};

export default UsernameForm;
