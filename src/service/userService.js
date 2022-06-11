import bcrypt from "bcryptjs";
import mysql from "mysql2";

const salt = bcrypt.genSaltSync(10);
const hasUserPassword = (password) => {
  return bcrypt.hashSync(password, salt);
  
};
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});
const creatNewUser = (email, password, username) => {
  const hasPaswword = hasUserPassword(password);
  connection.query(
    "INSERT INTO users(email,password,username) VALUES (?,?,?)",
    [email, hasPaswword, username],
    function (err, results, fields) {
      console.log(results);
    }
  );
};
const getUser = () =>{
    connection.query(
        "select * from users",
        function (err, results, fields) {
          console.log(results);
        }
      );
}

module.exports = {
  creatNewUser,getUser
};
