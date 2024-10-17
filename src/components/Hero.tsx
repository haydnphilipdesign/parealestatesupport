import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <Box
      id="home"
      bg="brand.500"
      color="white"
      py={20}
      backgroundImage="url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
    >
      <Box position="absolute" top={0} left={0} right={0} bottom={0} bg="rgba(0,0,0,0.5)" />
      <VStack
        spacing={6}
        maxW="container.xl"
        mx="auto"
        px={4}
        position="relative"
        zIndex={1}
        textAlign="center"
      >
        <Heading as="h1" size="2xl">
          Streamlining Your Transactions for Keller Williams Agents in Pennsylvania
        </Heading>
        <Text fontSize="xl">
          Your Trusted Partner in Transaction Coordination with Over 30 Years of Experience
        </Text>
        <ScrollLink to="contact" smooth={true} duration={500}>
          <Button size="lg" colorScheme="whiteAlpha">
            Get Started Today
          </Button>
        </ScrollLink>
      </VStack>
    </Box>
  );
};

export default Hero;