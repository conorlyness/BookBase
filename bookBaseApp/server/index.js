const express = require('express');
const db = require('./db');
const cors = require('cors');
const app = express();
const API_PORT = 3001;

app.use(express.json());
app.use(cors());

//API routes

app.get('/favourites', async (req, res) => {
  console.log("calling /favourites");
  const viewAllFavourites = await db.viewAllFavourites();
  if (viewAllFavourites) {
    return res.status(201).json(viewAllFavourites);
  }

  res.status(404);
});

app.post('/add', async (req, res) => {
  console.log("calling /add");
  const result = await db.addFavourite(req.query.bookName);
  if (result) {
    return res.status(201).json(result);
  }

  res.status(404);
});

app.delete('/delete', async (req, res) => {
  console.log("calling /delete");
  const result = await db.removeFavourite(req.query.bookName);
  if (result) {
    return res.status(201).json(result);
  }

  res.status(404);
});

//use to get a specific favourite book
app.get('/favourites/name', async (req, res) => {
  console.log("calling /favourites/name");
  const viewSpecificFavourite = await db.viewSpecificFavourite(
    req.query.bookName
  );
  if (viewSpecificFavourite) {
    return res.status(201).json(viewSpecificFavourite);
  }

  res.status(404);
});

app.get('/currentlyReading', async (req, res) => {
  console.log("calling /currentlyReading");
  const currentlyReading = await db.getCurrentlyReading();
  if (currentlyReading) {
    return res.status(201).json(currentlyReading.BookTitle);
  }

  res.status(404);
});

app.post('/updateCurrentBook', async (req, res) => {
  console.log("calling /updateCurrentBook");
  const result = await db.updateCurrentlyReading(req.query.title);
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
    return res.status(201).json({ userId: user.UserId });
  }

  res.status(403).json({ message: "forbidden" });
  res.end();
})

app.listen(API_PORT, () => {
  db.connect();
  console.log(`listening on port ${API_PORT}`);
});

module.exports = app;
