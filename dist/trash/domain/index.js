"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trash = void 0;
const repo_1 = require("./repo");
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */
const gettrash = (id) => {
    //Here goes the logic
    return repo_1.trashRepository.mytrash(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */
const deletetrash = (id) => {
    //Here goes the logic
    return repo_1.trashRepository.deletetrash(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {trashType} trash
 * @returns
 */
const createtrash = (trash, id) => {
    //Here goes the logic
    return repo_1.trashRepository.create(Object.assign(Object.assign({}, trash), { user_id: id }));
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {trashType} trash
 * @returns
 */
const permenentDelete = (trash, user_id) => {
    //Here goes the logic
    return repo_1.trashRepository.deletePermenently(Object.assign(Object.assign({}, trash), { user_id: user_id }));
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {number} user_id
 * @returns
 */
const permanentDeleteAll = (user_id) => {
    //Here goes the logic
    return repo_1.trashRepository.deleteAllPermanently(user_id);
};
exports.trash = {
    gettrash,
    createtrash,
    deletetrash,
    permenentDelete,
    permanentDeleteAll,
};
//# sourceMappingURL=index.js.map