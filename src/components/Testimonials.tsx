import React from 'react';
import { Box, Text, VStack, Heading, Container, SimpleGrid } from '@chakra-ui/react';

const testimonials = [
  {
    name: 'Jessica M.',
    role: 'Keller Williams Agent',
    content: "PA Transaction Coordination Services has transformed the way I handle my transactions. Debbie's expertise and attention to detail ensure that everything runs smoothly, allowing me to focus on my clients. Highly recommend!",
  },
  {
    name: 'Mark T.',
    role: 'Keller Williams Broker',
    content: "Working with PA Transaction Coordination Services has been a game-changer for my brokerage. Their professionalism and reliability have significantly improved our transaction processes.",
  },
  {
    name: 'Linda S.',
    role: 'Keller Williams Real Estate Agent',
    content: "Debbie O'Brien's 30 years of experience truly shine through in the exceptional service she provides. My transactions are always handled efficiently and accurately.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          What Our Clients Say
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {testimonials.map((testimonial, index) => (
            <VStack
              key={index}
              bg="white"
              p={6}
              borderRadius="lg"
              boxShadow="md"
              align="start"
              spacing={4}
            >
              <Text fontSize="lg" fontStyle="italic">
                "{testimonial.content}"
              </Text>
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">{testimonial.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  {testimonial.role}
                </Text>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Testimonials;