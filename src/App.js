import React from 'react';
import { Box, Button, Center, Container, Flex, Heading, Image, Input, InputGroup, InputRightElement, Spacer } from '@chakra-ui/react';
import './App.css';

function App() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Box bgGradient='linear(to-l, #7928CA, #FF0080)' w='100%' h='100vh' color='white'>
      <Box>
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
      <Box>
        <Container color='white' border='1px solid white' p='50px 20px' mt='50px'>
          <Center>
            <Heading>CREATE ACCOUNT</Heading>
          </Center>
          <Flex>
            <Input display='inline-block' mt='40px' w='45%' _placeholder={{ color: 'white' }} placeholder='First Name' />
            <Spacer />
            <Input display='inline-block' mt='40px' w='45%' _placeholder={{ color: 'white' }} placeholder='Last Name' />
          </Flex>
          <Input display='inline-block' mt='20px' w='100%' _placeholder={{ color: 'white' }} placeholder='Email' />
          <InputGroup mt='20px' size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              _placeholder={{ color: 'white' }}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' color='white' bg='transparent' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup mt='20px' size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Re-type password'
              _placeholder={{ color: 'white' }}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' color='white' bg='transparent' size='sm' onClick={handleClick}>
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
    </Box>
  );
}

export default App;
