"use client";

import React, { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

function FavoriteCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [game, setGame] = useState("");

  function handleClick() {
    setShowInput(!showInput);

    if (input !== "") {
      setGame(input);
    }
    setInput("");
  }
  return (
    <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            className="w-full rounded-md h-8 text-black px-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />

          <button onClick={handleClick}>
            <FiX size={24} color="#fff" />
          </button>
        </div>
      ) : (
        <button
          onClick={handleClick}
          className="self-start hover:scale-110 duration-200 transition-all"
        >
          <FiEdit size={24} color="#fff" />
        </button>
      )}
      {game && (
        <div>
          <span className="text-white">Jogo Favorito:</span>
          <p className="font-bold text-white">{game}</p>
        </div>
      )}
      {!game && <p className="font-bold">Adicionar jogo</p>}
    </div>
  );
}

export default FavoriteCard;
