import React from 'react';
import { Box, Heading, Text, SimpleGrid, Icon, VStack } from '@chakra-ui/react';
import { FaClipboardCheck, FaBalanceScale, FaComments, FaFileAlt, FaClock } from 'react-icons/fa';

const services = [
  {
    icon: FaClipboardCheck,
    title: 'Transaction Coordination',
    description: 'Seamless management of all transaction details from contract to closing.',
  },
  {
    icon: FaBalanceScale,
    title: 'Compliance Assurance',
    description: 'Ensuring all transactions adhere to Keller Williams and Pennsylvania real estate regulations.',
  },
  {
    icon: FaComments,
    title: 'Communication Facilitation',
    description: 'Acting as the liaison between agents, clients, lenders, and other parties.',
  },
  {
    icon: FaFileAlt,
    title: 'Document Management',
    description: 'Accurate preparation, organization, and storage of all necessary documents.',
  },
  {
    icon: FaClock,
    title: 'Deadline Tracking',
    description: 'Monitoring and ensuring all critical deadlines are met for timely closings.',
  },
];

const Services: React.FC = () => {
  return (
    <Box id="services" py={20} bg="gray.50">
      <Box maxW="container.xl" mx="auto" px={4}>
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {services.map((service, index) => (
            <VStack
              key={index}
              bg="white"
              p={6}
              borderRadius="lg"
              boxShadow="md"
              align="start"
              spacing={4}
            >
              <Icon as={service.icon} w={10} h={10} color="brand.500" />
              <Heading as="h3" size="md">
                {service.title}
              </Heading>
              <Text>{service.description}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Services;