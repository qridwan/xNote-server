"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("./middlewares");
const knex_1 = __importDefault(require("./database/knex"));
const route_1 = __importDefault(require("./auth/controllers/route"));
const route_2 = __importDefault(require("./notes/controllers/route"));
const route_3 = __importDefault(require("./tags/controllers/route"));
const route_4 = __importDefault(require("./category/controllers/route"));
const route_5 = __importDefault(require("./notebook/controllers/route"));
const route_6 = __importDefault(require("./trash/controllers/route"));
const cors_1 = __importDefault(require("cors"));
//Initialize .env
require("dotenv").config();
//Initialize express
const app = (0, express_1.default)();
//Initialize json parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Initialize app endpoints
app.use("/api/auth/", route_1.default); //authentication
app.use("/api/notes/", middlewares_1.Middlewares.validateJWT, route_2.default); //Notes
app.use("/api/tags/", middlewares_1.Middlewares.validateJWT, route_3.default); //Tags
app.use("/api/category/", middlewares_1.Middlewares.validateJWT, route_4.default); //Categories
app.use("/api/notebooks/", middlewares_1.Middlewares.validateJWT, route_5.default); //Notebooks / Folder
app.use("/api/trash/", middlewares_1.Middlewares.validateJWT, route_6.default); //Trash box
app.get("/db-ping", (req, res) => {
    knex_1.default
        .select("*")
        .from("notes")
        .then((sc) => {
        res
            .status(200)
            .json("Database connected ✅, notes count = " + (sc === null || sc === void 0 ? void 0 : sc.length));
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
//# sourceMappingURL=index.js.map