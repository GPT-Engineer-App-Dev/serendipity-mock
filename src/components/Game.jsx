import React, { useState } from "react";
import { VStack, Text, Button } from "@chakra-ui/react";
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
  const [winner, setWinner] = useState(null);
  const [startNewGame, setStartNewGame] = useState(false);

  const handleMove = (row, col) => {
    if (gameOver || board[row][col]) return;

    const newBoard = board.map((row) => [...row]);
    const validMove = isValidMove(newBoard, row, col, currentPlayer);

    if (validMove) {
      newBoard[row][col] = currentPlayer;
      flipDiscs(newBoard, row, col, currentPlayer);
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
      const gameOverCheck = isGameOver(newBoard);
      setGameOver(gameOverCheck);
      if (gameOverCheck) {
        setWinner(determineWinner(newBoard));
      }
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer("black");
    setGameOver(false);
    setWinner(null);
    setStartNewGame(false);
  };

  const isValidMove = (board, row, col, player) => {
    return true;
  };

  const flipDiscs = (board, row, col, player) => {};

  const isGameOver = (board) => {
    return true;
  };

  const determineWinner = (board) => {
    return "black";
  };

  return (
    <VStack spacing={8}>
      <Text fontSize="xl" fontWeight="bold">
        Current Player: {currentPlayer === "black" ? "Black" : "White"}
      </Text>
      <Board board={board} handleMove={handleMove} />
      {gameOver && (
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            {winner ? `${winner === "black" ? "Black" : "White"} Wins!` : "It's a Draw!"}
          </Text>
          <Button colorScheme="blue" onClick={() => setStartNewGame(true)}>
            New Game
          </Button>
        </VStack>
      )}
      {startNewGame && (
        <Button colorScheme="blue" onClick={startNewGame}>
          New Game
        </Button>
      )}
    </VStack>
  );
};

export default Game;
