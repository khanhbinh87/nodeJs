import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import "dotenv/config";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
import configCors from "./config/cors";
import initApiRoutes from "./routes/api";
const app = express();
const PORT = process.env.PORT || 8081;


//config viewengine
configViewEngine(app);
// Add headers before the routes are defined
configCors(app);

//config bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//init app
initWebRoutes(app);
initApiRoutes(app);


connection();
app.listen(PORT, () => {
  console.log("Back end run port == " + PORT);
});
