import { Heading, VStack } from "@chakra-ui/react";
import Board from "../components/Board";

const Index = () => {
  return (
    <VStack spacing={8}>
      <Heading>Othello Game</Heading>
      <Board />
    </VStack>
  );
};

export default Index;
