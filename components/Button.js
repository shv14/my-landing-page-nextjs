import { Button as ChakraButton } from '@chakra-ui/react';

function Button({ children, ...props }) {
  return (
    <ChakraButton colorScheme="black" {...props}>
      {children}
    </ChakraButton>
  );
}

export default Button;
