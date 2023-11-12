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
exports.categoryRepository = void 0;
const knex_1 = __importDefault(require("../../database/knex"));
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} user_id
 * @returns the found user
 */
const mycategories = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield knex_1.default.raw("select * from categories where user_id = ? order by create_time desc", user_id);
    return res[0];
});
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} category_id
 * @returns the found user
 */
const deletecategory = (category_id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield knex_1.default.raw("delete from categories where id = ?", category_id);
    return res[0];
});
/**
 * @description This function adds an user to the database
 * @param {categoryType} category
 * @returns the created user
 */
const create = (category) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("category: ", category);
    //   check category.name and category.user_id is already there or not
    const existingcategory = yield knex_1.default.raw("select categories.id from categories where name = ? and user_id = ?", [category.name, category.user_id]);
    if (existingcategory[0].length > 0) {
        throw new Error("category already exists");
    }
    yield knex_1.default.raw("insert into categories (name,  user_id) values (?, ?)", [
        category.name,
        category.user_id,
    ]);
    const data = yield knex_1.default.raw("select * from categories where user_id = ?", [
        category.user_id,
    ]);
    return yield data[0];
});
const edit = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = category.id;
    // Check if the category with the given `id` exists.
    const existingcategory = yield knex_1.default.raw("select categories.id from categories where id = ?", categoryId);
    if (existingcategory[0].length === 0) {
        throw new Error("category not found");
    }
    // Update the category with the new data.
    yield knex_1.default.raw("update categories set name = ?, user_id = ?  where id = ?", [category.name, category.user_id, categoryId]);
    // Fetch and return the updated category.
    const updatedcategory = yield knex_1.default.raw("select * from categories where id = ?", [categoryId]);
    return updatedcategory[0][0];
});
exports.categoryRepository = {
    mycategories,
    create,
    edit,
    deletecategory,
};
//# sourceMappingURL=repo.js.map