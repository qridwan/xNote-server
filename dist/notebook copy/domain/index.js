"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notebooks = void 0;
const repo_1 = require("./repo");
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */
const getnotebooks = (id) => {
    //Here goes the logic
    return repo_1.notebookRepository.mynotebooks(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */
const deletenotebook = (id) => {
    //Here goes the logic
    return repo_1.notebookRepository.deletenotebook(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {notebookType} notebook
 * @returns
 */
const createnotebook = (notebook, id) => {
    //Here goes the logic
    return repo_1.notebookRepository.create(Object.assign(Object.assign({}, notebook), { user_id: id }));
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {notebookType} notebook
 * @returns
 */
const editnotebook = (notebook, user_id) => {
    //Here goes the logic
    return repo_1.notebookRepository.edit(Object.assign(Object.assign({}, notebook), { user_id: user_id }));
};
exports.notebooks = {
    getnotebooks,
    createnotebook,
    deletenotebook,
    editnotebook,
};
//# sourceMappingURL=index.js.map