import React from 'react';
import {
  ChakraProvider,
  Flex,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ResetPassword from './pages/ResetPassword';
import Link from './components/Link/Link';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex borderBottom="1px solid black" justify="space-between" fontSize="xl">
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/reset-password">Reset Password</Link>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
