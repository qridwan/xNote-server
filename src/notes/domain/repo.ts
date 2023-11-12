import client from "../../database/knex";
import { noteType } from "../validations/types";

/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} user_id
 * @returns the found user
 */
const myNotes = async (user_id: string) => {
  // exclude that note_id and user_id is in the trash box
  const res = await client.raw(
    "SELECT n.*, c.name as category_name, nb.name as notebook_name FROM notes n LEFT JOIN trash t ON n.id = t.note_id AND t.user_id = ? LEFT JOIN categories c ON n.category_id = c.id LEFT JOIN notebooks nb ON n.notebook_id = nb.id WHERE n.user_id = ? AND t.id IS NULL ORDER BY n.update_time DESC",
    [user_id, user_id]
  );
  const result = res[0];

  return result;
};
const myNotesByFolder = async (user_id: string, note_id: string) => {
  // exclude that note_id and user_id is in the trash box filter by notebook id as well from notebooks table
  const res = await client.raw(
    "SELECT n.*, c.name as category_name, nb.name as notebook_name FROM notes n LEFT JOIN trash t ON n.id = t.note_id AND t.user_id = ? LEFT JOIN categories c ON n.category_id = c.id LEFT JOIN notebooks nb ON n.notebook_id = nb.id WHERE n.user_id = ? AND t.id IS NULL AND nb.id = ? ORDER BY n.update_time DESC",
    [user_id, user_id, note_id]
  );

  const result = res[0];

  return result;
};
const singleNote = async ({
  note_id,
  user_id,
}: {
  note_id: string;
  user_id: string;
}) => {
  // get category from note.category_id and notebook from note.notebook_id = notebook.id

  const res = await client.raw(
    "SELECT n.*, c.name as category_name, nb.name as notebook_name FROM notes n LEFT JOIN categories c ON n.category_id = c.id LEFT JOIN notebooks nb ON n.notebook_id = nb.id WHERE n.id = ? and n.user_id = ?",
    [note_id, user_id]
  );

  return res[0][0];
};
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} note_id
 * @returns the found user
 */
const deleteNote = async (note_id: string) => {
  const res = await client.raw("delete from notes where id = ?", note_id);
  return res[0];
};

/**
 * @description This function adds an user to the database
 * @param {noteType} note
 * @returns the created user
 */

const create = async (note: noteType) => {
  const [ResultSetHeader] = await client.raw(
    "insert into notes (title, content, user_id, notebook_id, color, category_id) values (?, ?, ?, ?, ?, ?)",
    [
      note.title,
      note.content,
      note.user_id,
      note.notebook_id ?? null,
      note.color ?? null,
      note.category ?? null,
    ]
  );
  const data = await client.raw("select * from notes where id = ?", [
    ResultSetHeader.insertId,
  ]);
  return await data[0][0];
};

const edit = async (note: noteType) => {
  console.log("note: ", note);
  // Make sure you have the `id` of the note you want to edit.
  const noteId = note.id;

  // Check if the note with the given `id` exists.
  const existingNote = await client.raw(
    "select notes.id from notes where id = ?",
    [noteId]
  );

  if (existingNote[0].length === 0) {
    // Handle the case where the note with the given `id` doesn't exist.
    // You can throw an error or return a specific message.
    throw new Error("Note not found");
  }

  // Update the note with the new data.
  await client.raw(
    "update notes set title = ?, content = ?, user_id = ?, notebook_id = ?, color = ? where id = ?",
    [
      note.title,
      note.content,
      note.user_id,
      note.notebook_id ?? null,
      note.color ?? null,
      noteId,
    ]
  );

  // Fetch and return the updated note.
  const updatedNote = await client.raw("select * from notes where id = ?", [
    noteId,
  ]);

  return updatedNote[0][0];
};

export const noteRepository = {
  myNotes,
  create,
  edit,
  deleteNote,
  singleNote,
  myNotesByFolder,
};
