import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ResetPassword from './pages/ResetPassword';
import Link from './components/Link/Link';
import useSocket from './hooks/useSocket';

function App() {
  const [response] = useSocket();

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex
          borderBottom="1px solid black"
          justify="space-between"
          fontSize="xl"
        >
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/reset-password">Reset Password</Link>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        <p>
          If you see the folowing date updating, it means the socket is working{' '}
          <time dateTime={response}>{response}</time>
        </p>
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
