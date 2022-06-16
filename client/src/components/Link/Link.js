import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

function Link({ ...props }) {
  return <ChakraLink as={ReachLink} {...props} />;
}

export default Link;
