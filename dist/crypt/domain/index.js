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
Object.defineProperty(exports, "__esModule", { value: true });
exports.crypt = void 0;
const repo_1 = require("./repo");
/**
 * @description This function is a validation layer for the function of the same name in repo.ts
 * @param password
 * @returns
 */
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    //Here goes validations rules
    return yield repo_1.cryptRepository.encryptPassword(password);
});
/**
 * @description This function is a validation layer for the function of the same name in repo.ts
 * @param userPassword
 * @param toCompare
 * @returns
 */
const comparePassword = (userPassword, toCompare) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("comparing=>>>: ", { userPassword, toCompare });
    if (!userPassword || !toCompare)
        return Promise.resolve(false);
    return yield repo_1.cryptRepository.comparePassword(userPassword, toCompare);
});
/**
 * @description This function is a validation layer for the function of the same name in repo.ts
 * @param email
 * @param user_id
 * @returns
 */
const generateJWT = (email, username, id) => __awaiter(void 0, void 0, void 0, function* () {
    // if (iduser < 0) return Promise.resolve(null);
    return yield repo_1.cryptRepository.generateJWT(email, username, id);
});
exports.crypt = {
    encryptPassword,
    generateJWT,
    comparePassword,
};
//# sourceMappingURL=index.js.map