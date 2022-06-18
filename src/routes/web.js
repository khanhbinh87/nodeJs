import express from "express";
import HomeController  from "../controller/homeController";
import UserController  from "../controller/userController";
import apiController from "../controller/apiController";

const router = express.Router()
const initWebRoutes = (app) => {
    router.get('/',HomeController.HomeController)
    router.get('/user',UserController.UserController)
    router.post('/users/create-user',UserController.CreateUserController)
    router.post('/delete-user/:id',UserController.DeleteUserController)
    router.get('/update-user/:id',UserController.GetUpdateUserController)
    router.post('/user/update-user',UserController.UpdateUserController)

    router.get('/api/test-api', apiController.testApi)
    return app.use('/',router)
}

export default initWebRoutes;