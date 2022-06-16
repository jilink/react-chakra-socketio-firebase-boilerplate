import React, { useEffect, useState, useCallback } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db, logout } from '../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { Box, Button } from '@chakra-ui/react';

function Home() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const fetchUserName = useCallback(async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  }, [user]);
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserName();
  }, [user, loading, fetchUserName, navigate]);
  return (
    <Box>
      <Box>
        Logged in as
        <Box>{name}</Box>
        <Box>{user?.email}</Box>
        <Button
          onClick={() => {
            logout();
            setName('');
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}
export default Home;
