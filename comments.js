// Create web server application with express
const express = require('express');
const app = express();
const port = 3000;

// Import data
const comments = require('./data/comments');

// Set view engine
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
    comments: comments
  });
});

// Comment route
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.render('comment', {
    title: 'Comment',
    comment: comments[id - 1]
  });
});

// About route
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

// Contact route
app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
});

// 404 route
app.get('*', (req, res) => {
  res.render('404', {
    title: '404'
  });
});

// Listen to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

