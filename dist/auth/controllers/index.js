"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const domain_1 = require("../../crypt/domain");
const domain_2 = require("../domain");
const status_1 = __importDefault(require("../../utils/status"));
// import { User } from "../domain";
/**
 * @description This function is the final action of login endpoint it takes the body of the Request
 *              and look for a coincidence in the database if an user is found, generates a JWT and resolves it
 * @param req
 * @param res
 * @returns
 */
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const userFinded = await Auth.find(req.body.user_id);
        const userFounded = yield domain_2.Auth.findById(req.body.email);
        // console.log("userFounded: ", userFounded);
        if (!userFounded) {
            return status_1.default.errorResponse(res, "User not found", 400);
        }
        const isPassword = yield domain_1.crypt.comparePassword(req.body.password, userFounded.password);
        if (!isPassword) {
            return status_1.default.errorResponse(res, "Email and password doesn't match to an user", 401);
        }
        const token = yield domain_1.crypt.generateJWT(userFounded.email, userFounded.username, userFounded.id);
        status_1.default.successResponse(res, Object.assign(Object.assign({}, userFounded), { token: token }), "User authenticated successfully", 201);
    }
    catch (error) {
        status_1.default.errorResponse(res, "Please contact with userify admin!");
    }
});
// /**
//  * @description
//  * @param req
//  * @param res
//  * @returns
//  */
// const reguser = async (req: express.Request, res: express.Response) => {
//   try {
//     const userFounded = await Auth.findById(req.body.user_id);
//     if (userFounded) {
//       return res.status(401).json({
//         status: "Error",
//         ErrorMessage: "An user already exist with that ID",
//       });
//     }
//     const encryptedPassword = await crypt.encryptPassword(req.body.password);
//     const user = await Auth.reguser({
//       ...req.body,
//       password: encryptedPassword,
//     });
//     // console.log("userFounded: ", userFounded, req.body, user);
//     const token = await crypt.generateJWT(user.email, user.user_id);
//     delete user.password;
//     res.status(201).json({
//       ...user,
//       token: token,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({
//       status: "Error",
//       ErrorMessage: "Please contact an admin.",
//     });
//   }
// };
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFound = yield domain_2.Auth.findById(req.body.email);
        if (userFound) {
            return status_1.default.errorResponse(res, "An user already exist with that email address", 500);
        }
        const encryptedPassword = yield domain_1.crypt.encryptPassword(req.body.password);
        const user = yield domain_2.Auth.signUp(Object.assign(Object.assign({}, req.body), { password: encryptedPassword }));
        // console.log("userFounded: ", userFounded, req.body, user);
        const token = yield domain_1.crypt.generateJWT(user.email, user.username, user.id);
        delete user.password;
        status_1.default.successResponse(res, Object.assign(Object.assign({}, user), { token: token }));
    }
    catch (error) {
        status_1.default.errorResponse(res, "Please contact an admin.");
    }
});
/**
 * @description This function is the final action of renew endpoint it takes the body of the Request
 *              and generates the new JWT.
 * @param req
 * @param res
 * @returns
 */
const renewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, id } = req.body;
    try {
        const token = yield domain_1.crypt.generateJWT(email, username, id);
        return status_1.default.successResponse(res, { token, username, email }, "New token generated");
    }
    catch (error) {
        return status_1.default.errorResponse(res, "Please contact an admin.");
    }
});
exports.AuthController = {
    renewToken,
    register,
    login,
};
//# sourceMappingURL=index.js.map