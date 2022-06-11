import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

const salt = bcrypt.genSaltSync(10);
const hasUserPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

// query database

const creatNewUser = async (email, password, username) => {
  const hasPaswword = hasUserPassword(password);
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "INSERT INTO users(email,password,username) VALUES (?,?,?)",
      [email, hasPaswword, username]
    );

    return rows;
  } catch (error) {
    console.log(error);
  }
};
const getUser = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  try {
    // DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
    const [rows, fields] = await connection.execute("DELETE FROM users WHERE id=?",[id]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  creatNewUser,
  getUser,
  deleteUser
};
