var {con} = require("./util")

con.connect(function (err) {
  if (err) throw err;
 
  con.query(
    "delete from departments where dept_id = ?",
    ['d1'],
    function (err, result) {
      if (err) throw err;
      if(result.affectedRows === 0)
         console.log("Sorry! Department id not found!")
      else
         console.log("Deleted department")
      con.end()
    }
  );
}
);
 