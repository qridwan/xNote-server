"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _1 = require(".");
// import { UserController } from ".";
const middlewares_1 = require("../../middlewares");
const schemas_1 = require("../validations/schemas");
const auth = express_1.default.Router();
// //This is the intialization of register endpoint, it validates its schema on a middleware
auth.post("/register", middlewares_1.Middlewares.validateSchemas(schemas_1.userRegisterSchema), _1.AuthController.register);
auth.post("/login", middlewares_1.Middlewares.validateSchemas(schemas_1.userLoginSchema), _1.AuthController.login);
//This is the initialization of renew endpoint, it validates the JWT on a middleware
auth.get("/renew", middlewares_1.Middlewares.validateJWT, _1.AuthController.renewToken);
exports.default = auth;
//# sourceMappingURL=route.js.map