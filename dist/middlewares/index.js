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
exports.Middlewares = void 0;
const JoiErrors_1 = __importDefault(require("../types/JoiErrors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JoiAlter_1 = require("../types/JoiAlter");
require("dotenv").config();
/**
 * @description This function takes a joi schema and JoiAlter type and works as a middleware to validate
 *              the data before its send to the endpoint
 * @param {joi.ObjectSchema<T>} schema
 * @param {JoiAlter} type
 * @returns Express request
 */
const validateSchemas = (schema, type = JoiAlter_1.JoiAlter.default) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newBody = {};
        if (type.length) {
            newBody = yield schema.tailor(type).validateAsync(req.body, {
                stripUnknown: true,
            });
        }
        else {
            newBody = yield schema.validateAsync(req.body, {
                stripUnknown: true,
            });
        }
        req.body = Object.assign({}, newBody);
        next();
    }
    catch (e) {
        const error = /(?<=\")(.*?)(?=\")/g.exec(e.message)[0];
        res.status(400).json({
            status: "An error occured",
            errorMessage: JoiErrors_1.default[error],
        });
    }
});
/**
 * @description This function works as a middleware to validate the JWT in the request headers
 * @param req
 * @param res
 * @param next
 * @returns
 */
const validateJWT = (req, res, next) => {
    //   const token = req.headers["x-token"];
    const token = req.headers.authorization;
    if (!token) {
        return res.status(400).json({
            status: "Error",
            ErrorMessage: "Please send a token in the request",
        });
    }
    try {
        const { email, username, id } = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        // req.body.email = email;
        // req.body.username = username;
        // req.body.id = id;
    }
    catch (error) {
        return res.status(400).json({
            status: "Error",
            ErrorMessage: "Please send a valid token in the request",
        });
    }
    next();
};
exports.Middlewares = { validateSchemas, validateJWT };
//# sourceMappingURL=index.js.map