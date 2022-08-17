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

  viewAllFavourites = async () => {
    try {
      const result = await this.connection
        .request()
        .query(`SELECT* FROM Favourites`);
      return result.recordset;
    } catch (error) {
      console.log(error);
    }
  };

  viewSpecificFavourite = async (name) => {
    try {
      const result = await this.connection.request().query(`SELECT *
      FROM dbo.Favourites
      WHERE BookName = ('${name}');`);
      return result.recordset;
    } catch (error) {
      console.log(error);
    }
  };

  addFavourite = async (name) => {
    try {
      let result = await this.connection
        .request()
        .query(`INSERT INTO dbo.Favourites (BookName) VALUES ('${name}');`);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  removeFavourite = async (name) => {
    try {
      let result = await this.connection
        .request()
        .query(`DELETE FROM dbo.Favourites WHERE BookName = '${name}';`);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentlyReading = async () => {
    try {
      let result = this.connection
        .request()
        .query('select top 1 * from dbo.CurrentlyReading;');
      return (await result).recordset[0];
    } catch (error) {
      console.log(error);
    }
  };

  updateCurrentlyReading = async (title) => {
    try {
      let result = this.connection
        .request()
        .query(`UPDATE dbo.CurrentlyReading SET BookTitle='${title}';`);
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
