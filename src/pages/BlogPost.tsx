import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Heading, Text, Image } from '@chakra-ui/react';

// This is a mock-up of a single blog post. In a real application, you'd fetch this from an API or CMS.
const blogPost = {
  title: 'Understanding Real Estate Transactions',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor.',
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // In a real application, you would fetch the blog post data based on the slug

  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <Image src={blogPost.image} alt={blogPost.title} mb={8} borderRadius="lg" />
        <Heading as="h1" size="2xl" mb={4}>{blogPost.title}</Heading>
        <Text fontSize="lg" color="gray.600">{blogPost.content}</Text>
      </Container>
    </Box>
  );
};

export default BlogPost;