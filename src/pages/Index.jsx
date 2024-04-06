import { Heading, VStack } from "@chakra-ui/react";
import Game from "../components/Game";

const Index = () => {
  return (
    <VStack spacing={8}>
      <Heading>Othello Game</Heading>
      <Game />
    </VStack>
  );
};

export default Index;
