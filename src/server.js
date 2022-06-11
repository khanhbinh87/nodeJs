import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import "dotenv/config";
import bodyParser from "body-parser";

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

app.listen(PORT, () => {
  console.log("Back end run port == " + PORT);
});
