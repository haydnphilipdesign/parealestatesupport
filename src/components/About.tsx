import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Container } from '@chakra-ui/react';

const About: React.FC = () => {
  return (
    <Box as="section" id="about" py={20}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading as="h2" size="xl" mb={6}>
              About PA Transaction Coordination Services
            </Heading>
            <Text fontSize="lg" mb={4}>
              Founded by Debbie O'Brien, a seasoned real estate professional with over 30 years of industry experience, PA Transaction Coordination Services is dedicated to assisting Keller Williams agents across Pennsylvania.
            </Text>
            <Text fontSize="lg" mb={4}>
              Our mission is to empower Keller Williams agents with comprehensive transaction coordination services that enhance efficiency, ensure compliance, and drive business growth.
            </Text>
            <Text fontSize="lg">
              With our expertise and attention to detail, we ensure that every client receives the highest level of service, allowing agents to focus on client relationships and business growth.
            </Text>
          </Box>
          <Box>
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Debbie O'Brien, Founder"
              borderRadius="lg"
              objectFit="cover"
              h="100%"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default About;