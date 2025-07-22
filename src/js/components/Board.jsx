import React, { useState } from "react";

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Board({ players, avatars, onRestart }) {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(board);
    const isBoardFull = board.every(cell => cell !== null);
    const isDraw = !winner && isBoardFull;

    const currentPlayer = xIsNext ? "player1" : "player2";
    const currentName = players[currentPlayer];
    const currentAvatar = avatars[currentPlayer];

    function handleClick(index) {
        if (board[index] || winner || isDraw) return;
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    }

    function resetGame() {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    }

    function getCellContent(value) {
        if (!value) return null;
        return <img src={avatars[value].image} alt="" width="60" />;
    }

    return (
        <div className="text-center">
            {winner || isDraw ? (
                <div className="winner-box">
                    {winner
                        ? `Ha GANADO ${players[winner]} con ${avatars[winner].name.toUpperCase()}!`
                        : "EMPATE! Ambos entrenadores lo dieron todo!"}
                </div>
            ) : (
                <h2 className="mb-3">Turno de: {currentName}</h2>
            )}

            <div className="board">
                {board.map((cell, index) => (
                    <button
                        key={index}
                        className="square d-flex align-items-center justify-content-center"
                        onClick={() => handleClick(index)}
                    >
                        {getCellContent(cell)}
                    </button>
                ))}
            </div>

            <div className="d-flex flex-column align-items-center mt-4">
                <button className="btn btn-warning mb-2" onClick={resetGame}>
                    Reiniciar Combate
                </button>
                <button className="btn btn-danger" onClick={onRestart}>
                    Nuevo Combate
                </button>
            </div>
        </div>
    );
}


export default Board;
