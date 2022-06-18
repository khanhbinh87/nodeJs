import express from "express";
import apiController from "../controller/apiController";

const router = express.Router();
const initApiRoutes = (app) => {
  router.get("/test-api", apiController.testApi);
  router.post("/register", apiController.registerApi);
  router.post("/login", apiController.handleLogin);

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
