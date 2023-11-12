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
exports.cryptRepository = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt = require("jsonwebtoken");
/**
 * @descrition This function takes a password and returns an encryption of it
 * @param {string} password
 * @returns {Promise<string>} encryptedPassword
 */
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = yield bcryptjs_1.default.genSalt();
        const encryptedPassword = yield bcryptjs_1.default.hash(password, salt);
        return encryptedPassword;
    }
    catch (error) {
        console.log(error);
    }
});
/**
 * @description This function takes the raw password and the password retrieved from the database
 *              and returns a boolean that represents if they are equal or not
 * @param {string} userPassword
 * @param {string} toCompare
 * @returns {Promise<boolean>} isEqual
 */
const comparePassword = (userPassword, toCompare) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcryptjs_1.default.compare(userPassword, toCompare);
});
/**
 * @description This function takes email and username to generate a JWT
 * @param {string} email
 * @param {string} id
 * @returns {Promise<string>} JWT Token
 */
const generateJWT = (email, username, id) => new Promise((res, rej) => {
    const payload = {
        email,
        username,
        id,
    };
    jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "12h",
    }, (error, token) => {
        if (error) {
            rej("Couldn't generate token. Please contact an Admin" + error.message);
        }
        else
            res(token);
    });
});
exports.cryptRepository = {
    encryptPassword,
    generateJWT,
    comparePassword,
};
//# sourceMappingURL=repo.js.map