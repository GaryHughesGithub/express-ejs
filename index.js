const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

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

// app.get('/r/:subreddit', (req, res) => {
//   const {subreddit} = req.params;
//   res.render('subreddit', {subreddit});
// })

app.get('/r/:subreddit', (req, res) => {
  const {subreddit} = req.params;
  const data = redditData[subreddit];
  if(data) {
    res.render('subreddit', {...data}); //SPREADING THE DATA FROM JSON FILE
  } else {
    res.render('notfound', {subreddit});
  }
  })
  

app.get('/cats', (req, res) => {
  const cats = [
    'Blue', 'Alan', 'Trevor'
  ]
  res.render('cats', {allCats : cats})
})


app.get('/', (req, res) => {
  res.send('THIS IS YOUR HOME PAGE, WELCOME!')
})

app.listen(3000, function () {
  console.log("Listening on port 3000!")
})