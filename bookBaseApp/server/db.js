var config = require("./config");
const sql = require("mssql");

class Database {
  constructor() {
    this.connection = null;
  }

  connect = async () => {
    try {
      this.connection = await sql.connect(config);
      console.log("Connected to database successfully");
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
}

module.exports = new Database();
