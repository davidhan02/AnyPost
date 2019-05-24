# AnyPost

My attempt at a reddit clone.

Full stack message board application using Node/Express/Mongoose for back end, React/Redux for front end, Passport for authentication.

Live Heroku deployment: https://obscure-cliffs-75848.herokuapp.com/

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm install --prefix client

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create a dev.js in the server config folder with

```
module.exports = {
  googleClientID: 'YOUR_OWN_GOOGLE_CLIENT_ID',
  googleClientSecret: 'YOUR_OWN_CLIENT_SECRET',
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
