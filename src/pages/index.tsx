import * as React from 'react';

import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

import Container from '@/components/Container';
import Layout from '@/components/layout';

// TODO
// Before you begin editing, follow all comments with `TODO`,
// to customize the default starter configuration.
const HomePage = () => {
  return (
    <Container as='main'>
      <VStack
        as='section'
        justify='center'
        minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
        spacing={6}
        bgImage={'../../public/hero.jpg'}
      >
        <Heading as='h1' color='primary' textAlign='center'>
          Next.js + Chakra UI + Typescript
        </Heading>
        <HStack>
          <Button
            as='a'
            aria-label='Services'
            href='/services'
            size='sm'
            colorScheme='pink'
          >
            Services
          </Button>
          <Text as='span'>or</Text>
          <Button
            as='a'
            href='https://github.com/rizqitsani/next-chakra-ts-starter/generate'
            target='_blank'
            rel='noopener noreferrer'
            size='sm'
            colorScheme='grey'
          >
            Hire Me
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default HomePage;
