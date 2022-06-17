import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

export default function useSocket() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_SOCKET_ENDPOINT);
    socket.on('FromAPI', data => {
      setResponse(data);
    });

    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
    //
  }, []);

  return [response];
}
