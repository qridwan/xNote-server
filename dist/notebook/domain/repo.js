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
exports.notebookRepository = void 0;
const knex_1 = __importDefault(require("../../database/knex"));
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} user_id
 * @returns the found user
 */
const mynotebooks = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield knex_1.default.raw("select * from notebooks where user_id = ? order by create_time desc", user_id);
    return res[0];
});
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} notebook_id
 * @returns the found user
 */
const deletenotebook = (notebook_id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield knex_1.default.raw("delete from notebooks where id = ?", notebook_id);
    return res[0];
});
/**
 * @description This function adds an user to the database
 * @param {notebookType} notebook
 * @returns the created user
 */
const create = (notebook) => __awaiter(void 0, void 0, void 0, function* () {
    //   check notebook.name and notebook.user_id is already there or not
    const existingnotebook = yield knex_1.default.raw("select notebooks.id from notebooks where name = ? and user_id = ?", [notebook.name, notebook.user_id]);
    if (existingnotebook[0].length > 0) {
        throw new Error("notebook already exists");
    }
    yield knex_1.default.raw("insert into notebooks (name,  user_id, icon) values (?, ?, ?)", [notebook.name, notebook.user_id, notebook.icon]);
    const data = yield knex_1.default.raw("select * from notebooks where user_id = ?", [
        notebook.user_id,
    ]);
    return yield data[0];
});
const edit = (notebook) => __awaiter(void 0, void 0, void 0, function* () {
    const notebookId = notebook.id;
    // Check if the notebook with the given `id` exists.
    const existingnotebook = yield knex_1.default.raw("select notebooks.id from notebooks where id = ?", notebookId);
    if (existingnotebook[0].length === 0) {
        throw new Error("notebook not found");
    }
    // Update the notebook with the new data.
    yield knex_1.default.raw("update notebooks set name = ?, user_id = ?  where id = ?", [
        notebook.name,
        notebook.user_id,
        notebookId,
    ]);
    // Fetch and return the updated notebook.
    const updatednotebook = yield knex_1.default.raw("select * from notebooks where id = ?", [notebookId]);
    return updatednotebook[0][0];
});
exports.notebookRepository = {
    mynotebooks,
    create,
    edit,
    deletenotebook,
};
//# sourceMappingURL=repo.js.map