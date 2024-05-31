import { Box, Container, Flex, Heading, Text, VStack, Link, HStack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      <Container maxW="container.md" py={10}>
        <VStack spacing={8} align="start">
          <Box>
            <Heading as="h2" size="xl">Welcome to My Blog</Heading>
            <Text mt={4}>This is a personal blog about my life. Stay tuned for updates!</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg">Latest Posts</Heading>
            <VStack spacing={4} mt={4}>
              <Box p={5} shadow="md" borderWidth="1px" width="100%">
                <Heading fontSize="xl">Post Title 1</Heading>
                <Text mt={4}>This is a summary of the first post...</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" width="100%">
                <Heading fontSize="xl">Post Title 2</Heading>
                <Text mt={4}>This is a summary of the second post...</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>

      <Flex as="footer" bg="gray.800" color="white" p={4} justifyContent="center" alignItems="center">
        <HStack spacing={4}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub />
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;