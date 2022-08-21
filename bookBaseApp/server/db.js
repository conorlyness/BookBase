var config = require('./config');
const sql = require('mssql');

class Database {
  constructor() {
    this.connection = null;
  }

  connect = async () => {
    try {
      this.connection = await sql.connect(config);
      console.log('Connected to database successfully');
    } catch (error) {
      console.log(error);
    }
  };

  viewAllFavourites = async (userId) => {
    try {
      const result = await this.connection
        .request()
        .query(`SELECT BookName
        FROM dbo.Favourites
        WHERE UserId = '${userId}';`);
      return result.recordset;
    } catch (error) {
      console.log(error);
    }
  };

  viewSpecificFavourite = async (name, userId) => {
    try {
      const result = await this.connection.request().query(`SELECT BookName
      FROM dbo.Favourites
      WHERE BookName = '${name}' AND UserId = '${userId}';`);
      return result.recordset;
    } catch (error) {
      console.log(error);
    }
  };

  addFavourite = async (name, userId) => {
    try {
      let result = await this.connection
        .request()
        .query(`Insert into dbo.Favourites (BookName, UserId) Values ('${name}', '${userId}');`);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  removeFavourite = async (name, userId) => {
    try {
      let result = await this.connection
        .request()
        .query(`DELETE FROM dbo.Favourites where BookName = '${name}' AND UserId='${userId}';`);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentlyReading = async (userId) => {
    try {
      let result = this.connection
        .request()
        .query(`select * from dbo.CurrentlyReading where UserId = ${userId};`);
      return (await result).recordset[0];
    } catch (error) {
      console.log(error);
    }
  };

  addCurrentlyReading = async (title, userId) => {
    try{
      let result = this.connection
      .request()
      .query(`Insert into dbo.CurrentlyReading values ('${title}', '${userId}');`);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  updateCurrentlyReading = async (title, userId) => {
    try {
      let result = this.connection
        .request()
        .query(`UPDATE dbo.CurrentlyReading SET BookTitle='${title}' WHERE UserId = '${userId}';`);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  createUser = async (user) => {
    try {
      let newUser = this.connection
        .request()
        .query(`INSERT INTO dbo.Users VALUES
        ('${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}', ${0})`);
      return newUser;

    } catch (error) {
      console.log(error)
    }
  }

  loginUser = async (user) => {
    try {
      const result = this.connection
      .request()
      .query(`SELECT UserId FROM dbo.Users WHERE Email = '${user.email}' AND Password = '${user.password}';`);
      let results = JSON.stringify(await result);
      let record = JSON.parse(results);

      if (record.recordset[0]) {
        return record.recordset[0]
      } else {
        return {}
      }
    } catch (error) {
      console.log(error);
    }
  } 

}

module.exports = new Database();
