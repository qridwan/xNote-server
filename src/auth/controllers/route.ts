import express from "express";
import { AuthController } from ".";
// import { UserController } from ".";
import { Middlewares } from "../../middlewares";

import { userLoginSchema, userRegisterSchema } from "../validations/schemas";
import { UserRegister, userLogin } from "../validations/types";

const auth = express.Router();

// //This is the intialization of register endpoint, it validates its schema on a middleware
auth.post(
  "/register",
  Middlewares.validateSchemas<UserRegister>(userRegisterSchema),
  AuthController.register
);
auth.post(
  "/login",
  Middlewares.validateSchemas<userLogin>(userLoginSchema),
  AuthController.login
);

//This is the initialization of renew endpoint, it validates the JWT on a middleware
auth.get("/renew", Middlewares.validateJWT, AuthController.renewToken);

export default auth;
