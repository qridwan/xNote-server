"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tags = void 0;
const repo_1 = require("./repo");
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */
const gettags = (id) => {
    //Here goes the logic
    return repo_1.tagRepository.mytags(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */
const deletetag = (id) => {
    //Here goes the logic
    return repo_1.tagRepository.deletetag(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {tagType} tag
 * @returns
 */
const createtag = (tag, id) => {
    //Here goes the logic
    return repo_1.tagRepository.create(Object.assign(Object.assign({}, tag), { user_id: id }));
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {tagType} tag
 * @returns
 */
const edittag = (tag, user_id) => {
    //Here goes the logic
    return repo_1.tagRepository.edit(Object.assign(Object.assign({}, tag), { user_id: user_id }));
};
exports.tags = {
    gettags,
    createtag,
    deletetag,
    edittag,
};
//# sourceMappingURL=index.js.map