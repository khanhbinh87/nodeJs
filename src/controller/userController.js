import userService from "../service/userService";

const UserController = async (req, res) => {
  let userList = await userService.getUser();

  return res.render("user.ejs", { userList });
};
const CreateUserController = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  // userService.creatNewUser(email,password,username)

  return res.render("user.ejs");
};
module.exports = {
  UserController,
  CreateUserController,
};
