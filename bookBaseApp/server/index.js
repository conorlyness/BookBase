const express = require('express');
const db = require('./db');
const cors = require('cors');
// const bp = require('body-parser')
const app = express();
const API_PORT = 3001;

app.use(express.json());
app.use(cors());
// app.use(bp.urlencoded({ extended: true }))
// app.use(bp.json())

//API routes

app.get('/favourites', async (req, res) => {
  console.log("calling /favourites");
  const viewAllFavourites = await db.viewAllFavourites(req.query.userId);
  if (viewAllFavourites) {
    return res.status(201).json(viewAllFavourites);
  }

  res.status(404);
});

app.post('/add', async (req, res) => {
  console.log("calling /add");
  const {book, userId} = req.body;
  const result = await db.addFavourite(req.body.bookName, req.body.userId);
  if (result) {
    return res.status(201).json(result);
  }

  res.status(404);
});

app.delete('/delete', async (req, res) => {
  console.log("calling /delete");
  const result = await db.removeFavourite(req.body.bookName, req.body.userId);
  if (result) {
    return res.status(201).json(result);
  }

  res.status(404);
});

//use to get a specific favourite book
app.post('/specificFavourite', async (req, res) => {
  console.log("calling /specificFavourite");
  const viewSpecificFavourite = await db.viewSpecificFavourite(req.body.params.bookName, req.body.params.userId);
  if (viewSpecificFavourite) {
    return res.status(201).json(viewSpecificFavourite);
  }

  res.status(404);
});

app.post('/initialCurrentlyReading', async (req, res) => {
  console.log("calling /initialCurrentlyReading");
  const result = await db.addCurrentlyReading(req.body.bookName, req.body.userId);
  if (result) {
    return res.status(201).json(result);
  }

  res.status(404);
});

app.get('/currentlyReading', async (req, res) => {
  console.log("calling /currentlyReading");
  const currentlyReading = await db.getCurrentlyReading(req.query.userId);
  if (currentlyReading) {
    return res.status(201).json(currentlyReading.BookTitle);
  }

  res.status(404);
});

app.post('/updateCurrentBook', async (req, res) => {
  console.log("calling /updateCurrentBook");
  const result = await db.updateCurrentlyReading(req.body.bookName, req.body.userId);
  if (result) {
    return res.status(201).json(result);
  }

  res.status(404);
});

//create user endpoint
app.post("/newUser", async (req, res) => {
  console.log("calling /newUser");
  const {firstName, lastName, email, password} = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "bad request"});
  }
  const result = await db.createUser(req.body);
  if (result.rowsAffected[0] === 1) {
    return res.status(201).json({ message: "created" });
  }
  res.status(403).json({ message: "forbidden" });
  res.end();

})

//login
app.post('/login', async (req, res) => {
  console.log("calling /login");
  const {email, password} = req.body;
  console.log(req.body)
  if (!email || !password) {
    return res.status(400).json({ message: "bad request"});
  }
  
  const user = await db.loginUser(req.body);
  if (user) {
    return res.status(201).json({ userId: user.UserId, firstName: user.FirstName });
  }

  res.status(403).json({ message: "forbidden" });
  res.end();
})

app.listen(API_PORT, () => {
  db.connect();
  console.log(`listening on port ${API_PORT}`);
});

module.exports = app;
