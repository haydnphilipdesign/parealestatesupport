import React from 'react';
import { Box, Container, Heading, Text, Image, VStack, SimpleGrid } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box as="main" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={10} align="stretch">
            <Heading as="h1" size="2xl" textAlign="center">
              About PA Transaction Coordination Services
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Debbie O'Brien, Founder"
                borderRadius="lg"
                objectFit="cover"
              />
              <VStack align="start" spacing={6}>
                <Heading as="h2" size="xl">
                  Our Story
                </Heading>
                <Text fontSize="lg">
                  Founded by Debbie O'Brien, a seasoned real estate professional with over 30 years of industry experience, PA Transaction Coordination Services is dedicated to assisting Keller Williams agents across Pennsylvania.
                </Text>
                <Text fontSize="lg">
                  Our mission is to empower Keller Williams agents with comprehensive transaction coordination services that enhance efficiency, ensure compliance, and drive business growth.
                </Text>
              </VStack>
            </SimpleGrid>
            <VStack align="start" spacing={6}>
              <Heading as="h2" size="xl">
                Our Values
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Box>
                  <Heading as="h3" size="md" mb={2}>
                    Integrity
                  </Heading>
                  <Text>Upholding the highest standards of honesty and ethical behavior.</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="md" mb={2}>
                    Excellence
                  </Heading>
                  <Text>Striving for excellence in every transaction we handle.</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="md" mb={2}>
                    Client-Centric
                  </Heading>
                  <Text>Placing our clients at the heart of everything we do.</Text>
                </Box>
              </SimpleGrid>
            </VStack>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AboutPage;