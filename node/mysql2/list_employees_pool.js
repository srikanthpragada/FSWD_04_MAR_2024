var mysql2 = require('mysql2/promise');

async function list_employees() {
  try {
    const pool = await mysql2.createPool({
      host: "localhost",
      user: "root",
      password: "mysql",
      database: "mar4",
      connectionLimit : 4
    });

    const [rows, fields] = await pool.query('SELECT * FROM employees');
    for (let emp of rows) {
       console.log(emp.fullname)
    }
    pool.end() 
  }
  catch (error) {
    console.log("Error --> ", error)
  }
}


list_employees()


    
 