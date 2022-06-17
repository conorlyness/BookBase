const express = require('express');
const db = require('./db');
const cors = require('cors');
const app = express();
const API_PORT = 3001;

app.use(express.json());
app.use(cors());

//API routes

app.get('/favourites', async (req: any, res: any) => {
  const viewAllFavourites = await db.viewAllFavourites();
  if (viewAllFavourites) {
    return res.status(201).json(viewAllFavourites);
  }

  res.status(404);
});

app.listen(API_PORT, () => {
  db.connect();
  console.log(`listening on port ${API_PORT}`);
});

module.exports = app;
