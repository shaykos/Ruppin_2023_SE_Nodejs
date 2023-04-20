const sql = require('mssql');

class DB {

  //`Server=.\\MSSQLSERVER\\LAB-G700;Database=Legends;Trusted_Connection=True;`;
  static sqlConfig =
    {
      //server: '.\\MSSQLSERVER\\LAB-G700',
      server: 'localhost\\MSSQLSERVER',
      port: 1433,
      user: 'root',
      password: 'root',
      database: 'Legends',
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
      options: {
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
      }
    }

  constructor() {
    // this.sqlConfig = {
    //   user: process.env.DB_USER,
    //   password: process.env.DB_PWD,
    //   database: process.env.DB_NAME,
    //   server: 'localhost',
    //   pool: {
    //     max: 10,
    //     min: 0,
    //     idleTimeoutMillis: 30000
    //   },
    //   options: {
    //     //encrypt: true, // for azure
    //     trustServerCertificate: true // change to true for local dev / self-signed certs
    //   }
    // }    
  }

  //פעולה לשליפת מידע ממסד הנתונים
  static async Select(sqlCommand) {
    try {
      console.log(this.sqlConfig)
      //חיבור למסד הנתונים
      let pool = await sql.connect(this.sqlConfig);

      //הפעלת פקודה
      let result = await pool.request().query(sqlCommand);

      return result;

    } catch (err) {
      // ... error checks
      return err;
    }
  }
}

module.exports = DB