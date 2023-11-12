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
exports.tagRepository = void 0;
const knex_1 = __importDefault(require("../../database/knex"));
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} user_id
 * @returns the found user
 */
const mytags = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield knex_1.default.raw("select * from tags where user_id = ? order by create_time desc", user_id);
    return res[0];
});
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} tag_id
 * @returns the found user
 */
const deletetag = (tag_id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield knex_1.default.raw("delete from tags where id = ?", tag_id);
    return res[0];
});
/**
 * @description This function adds an user to the database
 * @param {tagType} tag
 * @returns the created user
 */
const create = (tag) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    //   check tag.name and tag.user_id is already there or not
    const existingtag = yield knex_1.default.raw("select tags.id from tags where name = ? and user_id = ? and note_id = ?", [tag.name, tag.user_id, (_a = tag.note_id) !== null && _a !== void 0 ? _a : null]);
    if (existingtag[0].length > 0) {
        throw new Error("tag already exists");
    }
    yield knex_1.default.raw("insert into tags (name,  user_id, note_id) values (?, ?, ?)", [tag.name, tag.user_id, (_b = tag.note_id) !== null && _b !== void 0 ? _b : null]);
    const data = yield knex_1.default.raw("select * from tags where note_id = ? and user_id = ?", [(_c = tag.note_id) !== null && _c !== void 0 ? _c : null, tag.user_id]);
    return yield data[0];
});
const edit = (tag) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const tagId = tag.id;
    // Check if the tag with the given `id` exists.
    const existingtag = yield knex_1.default.raw("select tags.id from tags where id = ?", [tagId]);
    if (existingtag[0].length === 0) {
        throw new Error("tag not found");
    }
    // Update the tag with the new data.
    yield knex_1.default.raw("update tags set name = ?, user_id = ?, note_id = ?  where id = ?", [tag.name, tag.user_id, (_d = tag.note_id) !== null && _d !== void 0 ? _d : null, tagId]);
    // Fetch and return the updated tag.
    const updatedtag = yield knex_1.default.raw("select * from tags where id = ?", [
        tagId,
    ]);
    return updatedtag[0][0];
});
exports.tagRepository = {
    mytags,
    create,
    edit,
    deletetag,
};
//# sourceMappingURL=repo.js.map