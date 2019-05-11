const app = require('./setup');

require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send('Index goes here');
});

app.get('/surveys', (req, res) => {
  res.send('Logged in');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(process.env.PORT || 5000);
