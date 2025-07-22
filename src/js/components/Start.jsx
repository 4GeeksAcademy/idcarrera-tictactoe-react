import React, { useState } from "react";

function Start({ onStart }) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (player1.trim() && player2.trim()) {
      onStart({ player1, player2 });
    }
  }

  return (
    <div className="text-center mt-5">
      <h1 className="mb-4">Pokémon Tic Tac Toe</h1>
      <h3 className="mb-4">¡Entrenadores, escriban sus nombres!</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Nombre del Jugador 1"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          required
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Nombre del Jugador 2"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          required
        />
        <button className="btn btn-success" type="submit">
          ¡Continuar!
        </button>
      </form>
    </div>
  );
}

export default Start;
