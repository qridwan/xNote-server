"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notes = void 0;
const repo_1 = require("./repo");
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */
const getNotes = (id) => {
    //Here goes the logic
    return repo_1.noteRepository.myNotes(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */
const deleteNote = (id) => {
    //Here goes the logic
    return repo_1.noteRepository.deleteNote(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {noteType} note
 * @returns
 */
const createNote = (note, id) => {
    //Here goes the logic
    return repo_1.noteRepository.create(Object.assign(Object.assign({}, note), { user_id: id }));
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {noteType} note
 * @returns
 */
const editNote = (note, user_id) => {
    //Here goes the logic
    return repo_1.noteRepository.edit(Object.assign(Object.assign({}, note), { user_id: user_id }));
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} note_id
 * @returns
 */
const singleNote = (note_id, user_id) => {
    //Here goes the logic
    return repo_1.noteRepository.singleNote({ user_id: user_id, note_id: note_id });
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} note_id
 * @returns
 */
const notesByFolder = (user_id, note_id) => {
    return repo_1.noteRepository.myNotesByFolder(user_id, note_id);
};
exports.Notes = {
    getNotes,
    createNote,
    deleteNote,
    editNote,
    singleNote,
    notesByFolder,
};
//# sourceMappingURL=index.js.map