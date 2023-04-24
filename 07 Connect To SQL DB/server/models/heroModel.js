const dbConfig = require('../utils/dbConfig');
const sql = require('mssql');

class Hero {

    static async GetById(id) {
        try {
            //חיבור למסד הנתונים
            let pool = await sql.connect(dbConfig);

            //הפעלת פקודה
            let result = await pool.request().query(`select * from heros where id = ${id}`);

            if (result)
                return result.recordset;

        } catch (err) {
            // ... error checks
            return err;
        }
    }

    static async GetAll() {
        try {
            //חיבור למסד הנתונים
            let pool = await sql.connect(dbConfig);

            //הפעלת פקודה
            let result = await pool.request().query('select * from heros');

            if (result)
                return result.recordset;

        } catch (err) {
            // ... error checks
            return err;
        }
    }

    static async Add(nickname, first_name, last_name, abilities) {
        try {
            //חיבור למסד הנתונים
            let pool = await sql.connect(dbConfig);

            //הפעלת פקודה
            let result = await pool.request()
                .input('nickname', nickname)
                .input('first_name', first_name)
                .input('last_name', last_name)
                .input('abilities', abilities)
                .execute('AddCharacter');

            if (result)
                return result;


        } catch (err) {
            // ... error checks
            return err;
        }
    }
}

module.exports = Hero;