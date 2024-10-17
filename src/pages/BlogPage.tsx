import React from 'react';
import { Box, Container, Grid, Heading, Text, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// This is a mock-up of blog data. In a real application, you'd fetch this from an API or CMS.
const blogPosts = [
  { id: 1, title: 'Understanding Real Estate Transactions', slug: 'understanding-real-estate-transactions', excerpt: 'A comprehensive guide to the real estate transaction process...', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 2, title: 'The Role of a Transaction Coordinator', slug: 'role-of-transaction-coordinator', excerpt: 'Discover how a transaction coordinator can streamline your real estate deals...', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  // Add more blog post objects here
];

const BlogPage: React.FC = () => {
  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={8} textAlign="center">Our Blog</Heading>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
          {blogPosts.map((post) => (
            <Box key={post.id} borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={post.image} alt={post.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  <Link as={RouterLink} to={`/blog/${post.slug}`} color="brand.500">
                    {post.title}
                  </Link>
                </Heading>
                <Text color="gray.600">{post.excerpt}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPage;