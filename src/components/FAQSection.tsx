import React from 'react';
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Container } from '@chakra-ui/react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a range of real estate support services including transaction coordination, document preparation, and timeline management.',
    },
    {
      question: 'How can I get started?',
      answer: 'To get started, simply click the "Get Started" button on our homepage and fill out the contact form. Our team will reach out to you shortly.',
    },
    {
      question: 'What are your pricing options?',
      answer: 'Our pricing varies depending on the specific services you require. Please contact us for a personalized quote.',
    },
  ];

  return (
    <Box bg="gray.50" py={{ base: 12, md: 16 }}>
      <Container maxW="container.xl">
        <Text as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mb={8} textAlign="center" color="gray.800">
          Frequently Asked Questions
        </Text>
        <Accordion allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} mb={4}>
              <h3>
                <AccordionButton 
                  _expanded={{ bg: 'brand.500', color: 'white' }}
                  borderRadius="md"
                  p={4}
                  transition="all 0.3s"
                >
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4} px={4} bg="white" borderRadius="md" boxShadow="sm">
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQSection;