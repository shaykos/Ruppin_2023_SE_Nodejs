module.exports = {
  server: 'sql.bsite.net\\MSSQL2016',
  user: 'piso_Legends',
  password: 'piso',
  database: 'piso_Legends',
  pool: {
    max: 30,
    min: 0,
    idleTimeoutMillis: 3000000
  },
  options: {
    encrypt: false,
    enableArithAbort: true,
    trustServerCertificate: true,
  }
}





// class DB {

//   static sqlConfig =
//     {
//       server: 'sql.bsite.net\\MSSQL2016',
//       user: 'piso_Legends',
//       password: 'piso',
//       database: 'piso_Legends',
//       options: {
//         encrypt: false,
//         enableArithAbort: true,
//         trustServerCertificate: true,
//       }
//     }

//   constructor() {

//   }

//   //פעולה לשליפת מידע ממסד הנתונים
//   static async Select(sqlCommand) {
//     let pool;
//     try {

//       //חיבור למסד הנתונים
//       pool = await sql.connect(this.sqlConfig);

//       //הפעלת פקודה
//       let result = await pool.request().query(sqlCommand);

//       if (result)
//         return result.recordset;


//     } catch (err) {
//       // ... error checks
//       return err;
//     }
//     finally {
//       if (pool)
//         pool.close();
//     }
//   }

//   static async RunProc(procName, params = []) {
//     try {
//       //חיבור למסד הנתונים
//       let pool = await sql.connect(this.sqlConfig);

//       //יצירת פקודה
//       let request = new sql.Request();

//       //הוספצ פרמטרים לפרוצדורה
//       params.map(param => {
//         request.input(param.name, param.type, param.value);
//       });

//       //הפעלת הפרוצדורה
//       let result = await request.execute(procName);

//       // let result = await pool.request().execute(procName);

//       if (result?.rowsAffected[0] > 0)
//         return result.recordset;
//       else
//         return null;

//     } catch (err) {
//       // ... error checks
//       return err;
//     }
//   }

// }

// module.exports = DB