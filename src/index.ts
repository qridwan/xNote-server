import express from "express";
import { Middlewares } from "./middlewares";
import client from "./database/knex";
import auth from "./auth/controllers/route";

//Initialize .env
require("dotenv").config();

//Initialize express
const app = express();

//Initialize json parser
app.use(express.json());

//Initialize app endpoints
app.use("/api/auth/", auth); //authentication
app.get("/test", (req, res) => {
  client
    .select("*")
    .from("notes")
    .then((sc) => {
      res.status(200).json(sc);
    })
    .catch((error) => {
      console.log(error);
      res.send("An error occurred while querying the database");
    });
}); //User

//Start to listen to server port
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is listening on ${process.env.PORT || 8080}`);
});
