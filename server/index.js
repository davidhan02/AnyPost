const path = require('path');
const app = require('./setup');
const express = require('express');

require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(
        'https://tranquil-citadel-17264.herokuapp.com',
        'client',
        'build',
        'index.html'
      )
    );
  });
}

app.listen(process.env.PORT || 5000);
