import React, { useState } from "react";
import pikachu from "../../img/pokémon/pikachu.gif";
import charmander from "../../img/pokémon/charmander.gif";
import squirtle from "../../img/pokémon/squirtle.gif";
import bulbasaur from "../../img/pokémon/bulbasaur.gif";

const pokemonOptions = [
  { name: "Pikachu", image: pikachu },
  { name: "Charmander", image: charmander },
  { name: "Squirtle", image: squirtle },
  { name: "Bulbasaur", image: bulbasaur },
];

function Choose({ players, onSelect }) {
  const [selected1, setSelected1] = useState(null);
  const [selected2, setSelected2] = useState(null);

  function handleChoose(pokemon, player) {
    if (player === 1) {
      setSelected1(pokemon);
    } else {
      setSelected2(pokemon);
    }
  }

  function handleContinue() {
    if (selected1 && selected2 && selected1.name !== selected2.name) {
      onSelect({ player1: selected1, player2: selected2 });
    }
  }

  return (
    <div className="text-center mt-5">
      <h2 className="mb-4">¡Elijan su Pokémon!</h2>
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <h4>{players.player1}</h4>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {pokemonOptions.map((poke, index) => (
              <div
                key={`p1-${index}`}
                className={`p-2 border rounded ${
                  selected1?.name === poke.name ? "border-success border-3" : ""
                }`}
                onClick={() => handleChoose(poke, 1)}
                style={{ cursor: "pointer" }}
              >
                <img src={poke.image} alt={poke.name} />
                <p>{poke.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <h4>{players.player2}</h4>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {pokemonOptions.map((poke, index) => (
              <div
                key={`p2-${index}`}
                className={`p-2 border rounded ${
                  selected2?.name === poke.name ? "border-primary border-3" : ""
                }`}
                onClick={() => handleChoose(poke, 2)}
                style={{ cursor: "pointer" }}
              >
                <img src={poke.image} alt={poke.name} />
                <p>{poke.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="btn btn-warning"
        onClick={handleContinue}
        disabled={
          !selected1 || !selected2 || selected1.name === selected2.name
        }
      >
        ¡A luchar!
      </button>
    </div>
  );
}

export default Choose;
