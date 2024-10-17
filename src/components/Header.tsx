import React from 'react';
import { Box, Flex, Link, Button, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="header" bg="white" boxShadow="md">
      <Flex maxW="container.xl" mx="auto" px={4} py={4} align="center" justify="space-between">
        <Flex align="center">
          <img src="/logo.svg" alt="PA Transaction Coordination Services Logo" style={{ height: '40px', marginRight: '0.5rem' }} />
          <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" color="brand.500">
            PA Transaction Coordination Services
          </Link>
        </Flex>
        <Box display={{ base: 'block', md: 'none' }}>
          <Button onClick={onToggle} bg="transparent">
            <Menu size={24} />
          </Button>
        </Box>
        <Box
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link as={RouterLink} to="/" mr={6} color="gray.600" _hover={{ color: 'brand.500' }}>Home</Link>
          <Link as={RouterLink} to="/about" mr={6} color="gray.600" _hover={{ color: 'brand.500' }}>About Us</Link>
          <Link as={RouterLink} to="/services" mr={6} color="gray.600" _hover={{ color: 'brand.500' }}>Services</Link>
          <Link as={RouterLink} to="/testimonials" mr={6} color="gray.600" _hover={{ color: 'brand.500' }}>Testimonials</Link>
          <Link as={RouterLink} to="/resources" mr={6} color="gray.600" _hover={{ color: 'brand.500' }}>Resources</Link>
          <Link as={RouterLink} to="/careers" mr={6} color="gray.600" _hover={{ color: 'brand.500' }}>Careers</Link>
          <Link as={RouterLink} to="/contact" color="gray.600" _hover={{ color: 'brand.500' }}>Contact</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;