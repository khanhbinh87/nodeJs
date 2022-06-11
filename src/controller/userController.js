
import userService from '../service/userService'



const UserController = (req, res) => {
  return res.render("user.ejs");
};
const CreateUserController = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  // userService.creatNewUser(email,password,username)
  userService.getUser();

  return res.render("user.ejs");
};
module.exports = {
  UserController,
  CreateUserController,
};
