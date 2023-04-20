const sql = require('mssql');

class DB {

  static sqlConfig = 
    {
      server: 'sql.bsite.net\MSSQL2016',
      user: 'piso_Legends',
      password: 'piso',
      database: 'Legends',
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
      options: {
        encrypt: false,
        enableArithAbort: true,
        trustServerCertificate: true,
      }
    }

  constructor() {
 
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