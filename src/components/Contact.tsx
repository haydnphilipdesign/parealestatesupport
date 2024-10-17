import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your server
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Box id="contact" py={20} bg="gray.50">
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="start" spacing={6}>
            <Heading as="h2" size="xl">
              Get in Touch
            </Heading>
            <Text fontSize="lg">
              Whether you have questions about our services, need support, or want to schedule a consultation, our team is ready to assist you.
            </Text>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">Address:</Text>
              <Text>123 Main Street, Suite 400, Philadelphia, PA 19103</Text>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">Phone:</Text>
              <Text>(215) 555-1234</Text>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">Email:</Text>
              <Text>info@patranscoord.com</Text>
            </VStack>
          </VStack>
          <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue" size="lg" width="full">
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;