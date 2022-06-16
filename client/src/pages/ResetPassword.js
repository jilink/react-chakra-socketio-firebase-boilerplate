import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";
import Link from '../components/Link/Link';
import { Flex, FormControl, FormLabel, Input, Box, Button } from '@chakra-ui/react';

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading, navigate]);
  return (
    <Flex direction="column" m="2">
      <form
        onSubmit={e => {
          e.preventDefault();
          sendPasswordReset(email);
        }}
      >
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail Address"
            autoComplete="email"
          />
        </FormControl>
        <Button w="100%" my="2" type="submit">Send password reset email</Button>
      </form>
      <Box>
        Don't have an account? <Link to="/signup">Register</Link> now.
      </Box>
    </Flex>
  );
}
export default ResetPassword;