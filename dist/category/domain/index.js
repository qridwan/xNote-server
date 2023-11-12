"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = void 0;
const repo_1 = require("./repo");
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */
const getcategories = (id) => {
    //Here goes the logic
    return repo_1.categoryRepository.mycategories(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */
const deletecategory = (id) => {
    //Here goes the logic
    return repo_1.categoryRepository.deletecategory(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {categoryType} category
 * @returns
 */
const createcategory = (category, id) => {
    //Here goes the logic
    return repo_1.categoryRepository.create(Object.assign(Object.assign({}, category), { user_id: id }));
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {categoryType} category
 * @returns
 */
const editcategory = (category, user_id) => {
    //Here goes the logic
    return repo_1.categoryRepository.edit(Object.assign(Object.assign({}, category), { user_id: user_id }));
};
exports.categories = {
    getcategories,
    createcategory,
    deletecategory,
    editcategory,
};
//# sourceMappingURL=index.js.map