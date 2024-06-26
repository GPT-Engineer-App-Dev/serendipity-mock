import React from "react";
import { Grid, Circle } from "@chakra-ui/react";

const Board = ({ board, handleMove }) => {
  const boardSize = 8;

  const renderBoard = () => {
    const rows = [];
    for (let i = 0; i < boardSize; i++) {
      const cells = [];
      for (let j = 0; j < boardSize; j++) {
        const color = board[i][j];
        cells.push(
          <Circle key={`${i}-${j}`} size="40px" bg={(i + j) % 2 === 0 ? "green.500" : "white"} onClick={() => handleMove(i, j)} cursor="pointer">
            {color && <Circle size="30px" bg={color} />}
          </Circle>,
        );
      }
      rows.push(
        <Grid key={i} templateColumns={`repeat(${boardSize}, 1fr)`}>
          {cells}
        </Grid>,
      );
    }
    return rows;
  };

  return (
    <Grid templateRows={`repeat(${boardSize}, 1fr)`} gap={1} bg="gray.100" p={4} borderRadius="md">
      {renderBoard()}
    </Grid>
  );
};

export default Board;
