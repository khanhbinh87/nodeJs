import userService from "../service/userService";

const UserController = async (req, res) => {
  let userList = await userService.getUser();

  return res.render("user.ejs", { userList });
};
const CreateUserController = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  userService.creatNewUser(email, password, username);

  return res.redirect("/user");
};
const DeleteUserController = async (req, res) => {
  await userService.deleteUser(req.params.id);

  return res.redirect("/user");
};
const GetUpdateUserController = async (req, res) => {
  let id = req.params.id;
  let user = await userService.getUserById(id);
  let userData = user;

  return res.render("update.ejs", { userData });
};
const UpdateUserController = async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let id = req.body.id;
  // console.log(email, username, id);
  await userService.updateUser(email, username, id);
  // console.log('data',data);
  return res.redirect("/user");
};
module.exports = {
  UserController,
  CreateUserController,
  DeleteUserController,
  GetUpdateUserController,
  UpdateUserController,
};
