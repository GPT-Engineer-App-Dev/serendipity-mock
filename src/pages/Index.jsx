import { Heading, VStack, Flex } from "@chakra-ui/react";
import Game from "../components/Game";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <VStack spacing={8}>
        <Heading>Othello Game</Heading>
        <Game />
      </VStack>
    </Flex>
  );
};

export default Index;
