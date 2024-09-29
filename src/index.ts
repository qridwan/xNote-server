import express from "express";
import { Middlewares } from "./middlewares";
import client from "./database/knex";
import auth from "./auth/controllers/route";
import notes from "./notes/controllers/route";
import tags from "./tags/controllers/route";
import categories from "./category/controllers/route";
import notebooks from "./notebook/controllers/route";
import trash from "./trash/controllers/route";
import cors from "cors";

//Initialize .env
require("dotenv").config();

//Initialize express
const app = express();

//Initialize json parser
app.use(express.json());
app.use(cors());

//Initialize app endpoints
app.use("/api/auth/", auth); //authentication
app.use("/api/notes/", Middlewares.validateJWT, notes); //Notes
app.use("/api/tags/", Middlewares.validateJWT, tags); //Tags
app.use("/api/category/", Middlewares.validateJWT, categories); //Categories
app.use("/api/notebooks/", Middlewares.validateJWT, notebooks); //Notebooks / Folder
app.use("/api/trash/", Middlewares.validateJWT, trash); //Trash box
app.get("/api/db-ping", (req, res) => {
  client
    .select("*")
    .from("notes")
    .then((sc) => {
      res
        .status(200)
        .json("Database connected ✅, notes count = " + sc?.length);
    })
    .catch((error) => {
      console.log(error);

      res.send("⚠️ An error occurred while querying the database: " + error);
    });
});

//Start to listen to server port
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is listening on ${process.env.PORT || 8080}`);
});
