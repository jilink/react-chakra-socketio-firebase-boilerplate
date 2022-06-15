import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {Button, Flex, Input, Box, FormControl, FormLabel} from '@chakra-ui/react';
import Link from '../Link/Link';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);
  return (
    <Flex direction="column" m="2">
      <form
        onSubmit={e => {
          e.preventDefault();
          logInWithEmailAndPassword(email, password);
        }}
      >
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail Address"
            type="email"
            autoComplete="email"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
          />
        </FormControl>
        <Button w="100%" my="2" type="submit">Login</Button>
      </form>
      <Button bg="#4285f4" color="white" onClick={signInWithGoogle}>
        Login with Google
      </Button>
        <Link to="/reset-password">Forgot Password</Link>
      <Box>
        Don't have an account? <Link to="/signup">Register</Link> now.
      </Box>
    </Flex>
  );
}

export default Login;
