import db from "../models";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

const hasUserPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
const checkEmailExists = async (userEmail) => {
  let check = await db.User.findOne({ where: { email: userEmail } });
  if (check) {
    return true;
  }
  return false;
};
const checkPhoneExists = async (userPhone) => {
  let check = await db.User.findOne({ where: { email: userPhone } });
  if (check) {
    return true;
  }
  return false;
};
const login = async (rawUser) => {
    console.log('rawuser',rawUser);
  try {
    //check email address/phone number are existing
    let isEmailAlreadyExist = await checkEmailExists(rawUser.email);
    let isPhoneAlreadyExist = await checkPhoneExists(rawUser.phone);
    if (isEmailAlreadyExist) {
      return {
        EM: "The email address already exists",
        EC: 1,
      };
    }
    if (isPhoneAlreadyExist) {
      return {
        EM: "The phone number already exists",
        EC: 1,
      };
    }

    //hasUserPassword
    let hasPaswword = hasUserPassword(rawUser.password);
    //create a new user account

    await db.User.create({
      email: rawUser.email,
      password: hasPaswword,
      username: rawUser.username,
      phone: rawUser.phone,
    });
    return {
      EM: "A user is create successfully",
      EC: 0,
    };
  } catch (error) {
    return {
      EM: "Something went wrong creating  user account",
      EC: -2,
    };
  }
};
module.exports = { login };
