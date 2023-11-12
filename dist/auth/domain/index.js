"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const repo_1 = require("./repo");
// /**
//  * @description This function is the validation layer of the function of the same name in repo.ts
//  * @param {string} email
//  * @returns
//  */
// const find = (email: string) => {
//   //Here goes the logic
//   return authRepository.find(email);
// };
const findById = (key) => {
    //Here goes the logic
    return repo_1.authRepository.find(key);
};
// /**
//  * @description This function is the validation layer of the function of the same name in repo.ts
//  * @param {Registeruser} user
//  * @returns
//  */
// const reguser = (user: Registeruser) => {
//   //Here goes the logic
//   return authRepository.reguser(user);
// };
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {UserRegister} SignUp
 * @returns
 */
const signUp = (SignUp) => {
    //Here goes the logic
    return repo_1.authRepository.signup(SignUp);
};
exports.Auth = {
    //   find,
    findById,
    signUp,
};
//# sourceMappingURL=index.js.map