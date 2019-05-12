# MERN-Stack-Boilerplate
Concise boilerplate for full stack application using Node/Express/Mongoose for back end, React/Redux for front end.

Live Heroku deployment: https://tranquil-citadel-17264.herokuapp.com/

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
cd client
  then
npm install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create a keys_dev.js in the server config folder with

```
module.exports = {
  googleClientID: 'YOUR_OWN_GOOGLE_CLIENT_ID',
  googleClientSecret: 'YOUR_OWN_GOOGLE_CLIENT_SECRET',
  mongoURI: 'YOUR_OWN_MONGO_URI',
  cookieKey: 'YOUR_OWN_COOKIE_KEY'
};
```

## App Info

### Author

David Han

### Version

1.0.0

### License

This project is licensed under the MIT License
