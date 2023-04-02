import React from 'react';
import { Box, Button, Center, Container, Flex, Heading, Image, Input, InputGroup, InputRightElement, Spacer } from '@chakra-ui/react';
import './App.css';

function App() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <Box bgGradient='linear(to-l, #7928CA, #FF0080)' w='100%' color='white'>
        <Flex>
          <Center>
            <Image src='https://vspot.s3.amazonaws.com/sign-up/Logos/SignUp-Logo-Transparent.png' w='120px' ml='50px' /></Center>
          <Spacer />
          <Center mr='50px'>
            <Button m='0 30px' colorScheme='white' variant='ghost'>
              Home
            </Button>
            <Button m='0 30px' colorScheme='white' variant='ghost'>
              About
            </Button>
            <Button m='0 30px' colorScheme='white' variant='ghost'>
              Help
            </Button>
            <Button m='0 30px' colorScheme='white' variant='ghost'>
              Account
            </Button>
            <Button p='0 30px' m='0 30px' colorScheme='teal' variant='solid'>
              Log in
            </Button>
          </Center>
        </Flex>
      </Box>
      <Box w='100%' h='100vh' bgGradient='linear(to-l, #7928CA, #FF0080)'>
        <Container color='white' border='1px solid white' p='20px'>
          <Center>
            <Heading>CREATE ACCOUNT</Heading>
          </Center>
          <Flex>
            <Input display='inline-block' mt='40px' w='45%' placeholder='First Name' />
            <Spacer />
            <Input display='inline-block' mt='40px' w='45%' placeholder='Last Name' />
          </Flex>
          <Input display='inline-block' mt='20px' w='100%' placeholder='Email' />
          <InputGroup mt='20px' size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup mt='20px' size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Re-type password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Center>
            <Button colorScheme='white' mt='50px' p='0 50px' variant='outline'>
              Sign Up
            </Button>
          </Center>
        </Container>
      </Box>
    </>
  );
}

export default App;
