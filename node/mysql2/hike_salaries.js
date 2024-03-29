var mysql2 = require('mysql2/promise');
var { conDetails } = require("./util")

async function hikeSalaries(id1, id2) {
    var con = null;
    try {
        con = await mysql2.createConnection(conDetails);
        await con.beginTransaction()
        // make first change 
        let [result1, fields1] = await con.execute
            ("update employees set salary = salary * 1.1 where emp_id = ?", [id1])

        if (result1.affectedRows === 0) {
            console.log("Rolling back!")
            con.rollback(); // cancel transaction 
            return;
        }
        console.log("First update succcessful!");

        let [result2, fields2] = await con.execute
            ("update employees set salary = salary * 1.1 where emp_id = ?", [id2])

        console.log(result2)

        if (result2.affectedRows === 0) {
            console.log("Rolling back!")
            con.rollback(); // cancel transaction 
            return;
        }

        await con.commit()
        console.log("Transaction Commited!")
    }
    catch (ex) {
        console.log(ex)
    }
    finally {
        if (con)
            con.end()
    }

}

hikeSalaries(3, 30)
