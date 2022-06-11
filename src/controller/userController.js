import userService from "../service/userService";

const UserController = async (req, res) => {
  let userList = await userService.getUser();

  return res.render("user.ejs", { userList });
};
const CreateUserController = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  userService.creatNewUser(email,password,username)

  return res.redirect('/user')
};
const DeleteUserController = async(req,res) =>{
  await userService.deleteUser(req.params.id);
  
  return res.redirect('/user')
}
module.exports = {
  UserController,
  CreateUserController,
  DeleteUserController
};
