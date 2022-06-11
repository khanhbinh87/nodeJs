import express from "express";
import HomeController  from "../controller/homeController";
import UserController  from "../controller/userController";

const router = express.Router()
const initWebRoutes = (app) => {
    router.get('/',HomeController.HomeController)
    router.get('/user',UserController.UserController)
    router.post('/users/create-user',UserController.CreateUserController)
    router.post('/delete-user/:id',UserController.DeleteUserController)

    return app.use('/',router)
}

export default initWebRoutes;