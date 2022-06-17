# react-chakra-socketio-firebase-boilerplate

A template with react / Chakra UI / firebase Auth and SocketIo alread set up

## Setting up Firebase

- Create a new Firebase project

- Activate Firebase Authentication, this project has basic support for Email + password and Google Authentication

- Create a Firestore database

- From your dashboard go to **Project Settings**, then add a new App

- Rename **client/.env.example** in **client/.env**

- Add all of your Firebase configuration in the .env file, following the name of every element

## Setting up Socket.IO

- Make sure you have renamed **client/.env.example** in **client/.env** and **server/.env.example** in **server/.env**

- Run the server with **cd server && npm start** and the client with **cd client && npm start**

- If you see a date updating every second in your React app, congratulations everything is working fine !


## More informations

Take a look at those two tutorials, they helped me set up this boilerplate :

[Socket.IO, React and Node.js: Going Real-Time](https://www.valentinog.com/blog/socket-react)

[Handling user authentication with Firebase in your React apps](https://blog.logrocket.com/user-authentication-firebase-react-apps)

