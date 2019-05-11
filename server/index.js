const app = require('./setup');

require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send('Index goes here');
});

app.get('/surveys', (req, res) => {
  res.send('Logged in');
});

app.listen(process.env.PORT || 5000);
