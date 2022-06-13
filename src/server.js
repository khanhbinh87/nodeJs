import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import "dotenv/config";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
const app = express();
const PORT = process.env.PORT || 8081;


//config viewengine
configViewEngine(app);

//config bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//init app
initWebRoutes(app);
connection();
app.listen(PORT, () => {
  console.log("Back end run port == " + PORT);
});
