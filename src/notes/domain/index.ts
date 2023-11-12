import { noteType } from "../validations/types";
import { noteRepository } from "./repo";

/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */

const getNotes = (id: string) => {
  //Here goes the logic
  return noteRepository.myNotes(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */

const deleteNote = (id: string) => {
  //Here goes the logic
  return noteRepository.deleteNote(id);
};

/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {noteType} note
 * @returns
 */
const createNote = (note: noteType, id: string) => {
  //Here goes the logic
  return noteRepository.create({ ...note, user_id: id });
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {noteType} note
 * @returns
 */
const editNote = (note: noteType, user_id: string) => {
  //Here goes the logic
  return noteRepository.edit({ ...note, user_id: user_id });
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} note_id
 * @returns
 */
const singleNote = (note_id: string, user_id: string) => {
  //Here goes the logic
  return noteRepository.singleNote({ user_id: user_id, note_id: note_id });
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} note_id
 * @returns
 */
const notesByFolder = (user_id: string, note_id: string) => {
  return noteRepository.myNotesByFolder(user_id, note_id);
};

export const Notes = {
  getNotes,
  createNote,
  deleteNote,
  editNote,
  singleNote,
  notesByFolder,
};
