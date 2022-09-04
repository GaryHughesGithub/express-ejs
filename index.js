const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '/views'));

app.get('/admin', (req,res) => {
  res.render('admin')
})

app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/rand', (req,res) => {
  const num = Math.floor(Math.random() *10) +1;
  res.render('random', {rand: num});
})

app.get('/r/:subreddit', (req, res) => {
  const {subreddit} = req.params;
  res.render('subreddit', {subreddit});
})

app.get('/', (req, res) => {
  res.send('Sorry no path was chosen!')
})

app.listen(3000, function () {
  console.log("Listening on port 3000!")
})