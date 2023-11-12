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
exports.noteRepository = void 0;
const knex_1 = __importDefault(require("../../database/knex"));
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} user_id
 * @returns the found user
 */
const myNotes = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    // exclude that note_id and user_id is in the trash box
    const res = yield knex_1.default.raw("SELECT n.*, c.name as category_name, nb.name as notebook_name FROM notes n LEFT JOIN trash t ON n.id = t.note_id AND t.user_id = ? LEFT JOIN categories c ON n.category_id = c.id LEFT JOIN notebooks nb ON n.notebook_id = nb.id WHERE n.user_id = ? AND t.id IS NULL ORDER BY n.update_time DESC", [user_id, user_id]);
    const result = res[0];
    return result;
});
const myNotesByFolder = (user_id, note_id) => __awaiter(void 0, void 0, void 0, function* () {
    // exclude that note_id and user_id is in the trash box filter by notebook id as well from notebooks table
    const res = yield knex_1.default.raw("SELECT n.*, c.name as category_name, nb.name as notebook_name FROM notes n LEFT JOIN trash t ON n.id = t.note_id AND t.user_id = ? LEFT JOIN categories c ON n.category_id = c.id LEFT JOIN notebooks nb ON n.notebook_id = nb.id WHERE n.user_id = ? AND t.id IS NULL AND nb.id = ? ORDER BY n.update_time DESC", [user_id, user_id, note_id]);
    const result = res[0];
    return result;
});
const singleNote = ({ note_id, user_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    // get category from note.category_id and notebook from note.notebook_id = notebook.id
    const res = yield knex_1.default.raw("SELECT n.*, c.name as category_name, nb.name as notebook_name FROM notes n LEFT JOIN categories c ON n.category_id = c.id LEFT JOIN notebooks nb ON n.notebook_id = nb.id WHERE n.id = ? and n.user_id = ?", [note_id, user_id]);
    return res[0][0];
});
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} note_id
 * @returns the found user
 */
const deleteNote = (note_id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield knex_1.default.raw("delete from notes where id = ?", note_id);
    return res[0];
});
/**
 * @description This function adds an user to the database
 * @param {noteType} note
 * @returns the created user
 */
const create = (note) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const [ResultSetHeader] = yield knex_1.default.raw("insert into notes (title, content, user_id, notebook_id, color, category_id) values (?, ?, ?, ?, ?, ?)", [
        note.title,
        note.content,
        note.user_id,
        (_a = note.notebook_id) !== null && _a !== void 0 ? _a : null,
        (_b = note.color) !== null && _b !== void 0 ? _b : null,
        (_c = note.category) !== null && _c !== void 0 ? _c : null,
    ]);
    const data = yield knex_1.default.raw("select * from notes where id = ?", [
        ResultSetHeader.insertId,
    ]);
    return yield data[0][0];
});
const edit = (note) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e;
    console.log("note: ", note);
    // Make sure you have the `id` of the note you want to edit.
    const noteId = note.id;
    // Check if the note with the given `id` exists.
    const existingNote = yield knex_1.default.raw("select notes.id from notes where id = ?", [noteId]);
    if (existingNote[0].length === 0) {
        // Handle the case where the note with the given `id` doesn't exist.
        // You can throw an error or return a specific message.
        throw new Error("Note not found");
    }
    // Update the note with the new data.
    yield knex_1.default.raw("update notes set title = ?, content = ?, user_id = ?, notebook_id = ?, color = ? where id = ?", [
        note.title,
        note.content,
        note.user_id,
        (_d = note.notebook_id) !== null && _d !== void 0 ? _d : null,
        (_e = note.color) !== null && _e !== void 0 ? _e : null,
        noteId,
    ]);
    // Fetch and return the updated note.
    const updatedNote = yield knex_1.default.raw("select * from notes where id = ?", [
        noteId,
    ]);
    return updatedNote[0][0];
});
exports.noteRepository = {
    myNotes,
    create,
    edit,
    deleteNote,
    singleNote,
    myNotesByFolder,
};
//# sourceMappingURL=repo.js.map