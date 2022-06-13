import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import db from "../models";
const salt = bcrypt.genSaltSync(10);

const hasUserPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

// query database

const creatNewUser = async (email, password, username) => {
  const hasPaswword = hasUserPassword(password);
  try {
    await db.User.create({
      username: username,
      password: hasPaswword,
      email: email,
    });
  } catch (error) {
    console.log(error);
  }
};
const getUser = async () => {
  try {
    let users = [];
    users = await db.User.findAll();
    return users;
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (id) => {
  await db.User.destroy({
    where: {
      id,
    },
  });
};
const getUserById = async (id) => {
  let user = {};
  user = await db.User.findOne({
    where: {
      id,
    },
  });

  return user.get({ plain: true });
};
const updateUser = async (email, username, id) => {
  await db.User.update(
    {
      email,
      username,
    },
    {
      where: {
        id,
      },
    }
  );
};
module.exports = {
  creatNewUser,
  getUser,
  deleteUser,
  getUserById,
  updateUser,
};
