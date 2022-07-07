const express = require('express');
const db = require('./db');
const cors = require('cors');
const app = express();
const API_PORT = 3001;

app.use(express.json());
app.use(cors());

//API routes

app.get('/favourites', async (req, res) => {
  const viewAllFavourites = await db.viewAllFavourites();
  if (viewAllFavourites) {
    return res.status(201).json(viewAllFavourites);
  }

  res.status(404);
});

app.post('/add', async (req, res) => {
  const result = await db.addFavourite(req.query.bookName);
  if (result) {
    return res.status(201).json(result);
  }

  res.status(404);
});

app.delete('/delete', async (req, res) => {
  const result = await db.removeFavourite(req.query.bookName);
  if (result) {
    return res.status(201).json(result);
  }

  res.status(404);
});

//use to get a specific favourite book
app.get('/favourites/name', async (req, res) => {
  const viewSpecificFavourite = await db.viewSpecificFavourite(
    req.query.bookName
  );
  if (viewSpecificFavourite) {
    return res.status(201).json(viewSpecificFavourite);
  }

  res.status(404);
});

app.get('/currentlyReading', async (req, res) => {
  const currentlyReading = await db.getCurrentlyReading();
  if (currentlyReading) {
    return res.status(201).json(currentlyReading.BookTitle);
  }

  res.status(404);
});

app.post('/updateCurrentBook', async (req, res) => {
  const result = await db.updateCurrentlyReading(req.query.title);
  if (result) {
    return res.status(201).json(result);
  }

  res.status(404);
});

app.listen(API_PORT, () => {
  db.connect();
  console.log(`listening on port ${API_PORT}`);
});

module.exports = app;
