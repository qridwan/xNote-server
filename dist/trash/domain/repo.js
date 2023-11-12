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
exports.trashRepository = void 0;
const knex_1 = __importDefault(require("../../database/knex"));
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} user_id
 * @returns the found user
 */
const mytrash = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the notes inside the trash and fetch the notes from the database notes table matched with user_id
    const res = yield knex_1.default.raw("select *,trash.deleted_at, trash.id as trash_id from notes inner join trash on notes.id = trash.note_id where trash.user_id = ?", user_id);
    return res[0];
});
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} trash_id
 * @returns the found user
 */
const deletetrash = (trash_id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield knex_1.default.raw("delete from trash where id = ?", trash_id);
    return res[0];
});
/**
 * @description This function adds an user to the database
 * @param {trashType} trash
 * @returns the created user
 */
const create = (trash) => __awaiter(void 0, void 0, void 0, function* () {
    //   check trash.name and trash.user_id is already there or not
    const existingtrash = yield knex_1.default.raw("select trash.id from trash where note_id = ? and user_id = ?", [trash.note_id, trash.user_id]);
    if (existingtrash[0].length > 0) {
        throw new Error("trash already exists");
    }
    yield knex_1.default.raw("insert into trash (note_id,  user_id) values (?, ?)", [
        trash.note_id,
        trash.user_id,
    ]);
    const data = yield knex_1.default.raw("select * from trash where user_id = ? order by deleted_at desc", [trash.user_id]);
    return yield data[0];
});
const deletePermenently = (trash) => __awaiter(void 0, void 0, void 0, function* () {
    const trashId = trash.id;
    // delete the trash item permanently
    yield knex_1.default.raw("delete from trash where id = ?", trashId);
    yield knex_1.default.raw("delete from notes where id = ?", trash.note_id);
    return { message: "trash deleted permanently" };
});
exports.trashRepository = {
    mytrash,
    create,
    deletetrash,
    deletePermenently,
};
//# sourceMappingURL=repo.js.map