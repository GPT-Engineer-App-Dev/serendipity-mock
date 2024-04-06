import React, { useState } from "react";
import { VStack } from "@chakra-ui/react";
import Board from "./Board";

const Game = () => {
  const boardSize = 8;
  const initialBoard = Array(boardSize)
    .fill(null)
    .map(() => Array(boardSize).fill(null));
  initialBoard[3][3] = initialBoard[4][4] = "white";
  initialBoard[3][4] = initialBoard[4][3] = "black";

  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("black");
  const [gameOver, setGameOver] = useState(false);

  const handleMove = (row, col) => {
    if (gameOver || board[row][col]) return;

    const newBoard = board.map((row) => [...row]);
    const validMove = isValidMove(newBoard, row, col, currentPlayer);

    if (validMove) {
      newBoard[row][col] = currentPlayer;
      flipDiscs(newBoard, row, col, currentPlayer);
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
      setGameOver(isGameOver(newBoard));
    }
  };

  const isValidMove = (board, row, col, player) => {
    return true;
  };

  const flipDiscs = (board, row, col, player) => {};

  const isGameOver = (board) => {
    return false;
  };

  return (
    <VStack spacing={8}>
      <Board board={board} handleMove={handleMove} />
    </VStack>
  );
};

export default Game;
