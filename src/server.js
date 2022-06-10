import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8081;
console.log(process.env.PORT);
configViewEngine(app);
initWebRoutes(app);

app.listen(PORT, () => {
  console.log("Back end run port == " + PORT);
});
