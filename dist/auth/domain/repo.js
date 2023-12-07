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
exports.authRepository = void 0;
const knex_1 = __importDefault(require("../../database/knex"));
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} key
 * @returns the found user
 */
const find = (key) => knex_1.default
    .select()
    .from("users")
    .where({
    email: key,
})
    .first();
/**
 * @description This function adds an user to the database
 * @param {UserRegister} user
 * @returns the created user
 */
const signup = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const [ResultSetHeader] = yield knex_1.default.raw("insert into users (username, email, password) values (?, ?, ?)", [user.username, user.email, user.password]);
    const data = yield knex_1.default.raw("select username, email, password,id from users where id = ?", [ResultSetHeader.insertId]);
    return yield data[0][0];
});
exports.authRepository = {
    find,
    signup,
};
//# sourceMappingURL=repo.js.map