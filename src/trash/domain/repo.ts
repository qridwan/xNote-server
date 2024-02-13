import client from "../../database/knex";
import { trashType } from "../validations/types";
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} user_id
 * @returns the found user
 */
const mytrash = async (user_id: string) => {
  // Get the notes inside the trash and fetch the notes from the database notes table matched with user_id
  const res = await client.raw(
    "select *,trash.deleted_at, trash.id as trash_id from notes inner join trash on notes.id = trash.note_id where trash.user_id = ?",
    user_id
  );
  return res[0];
};
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} trash_id
 * @returns the found user
 */
const deletetrash = async (trash_id: string) => {
  const res = await client.raw("delete from trash where id = ?", trash_id);

  return res[0];
};

/**
 * @description This function adds an user to the database
 * @param {trashType} trash
 * @returns the created user
 */

const create = async (trash: trashType) => {
  //   check trash.name and trash.user_id is already there or not
  const existingtrash = await client.raw(
    "select trash.id from trash where note_id = ? and user_id = ?",
    [trash.note_id, trash.user_id]
  );
  if (existingtrash[0].length > 0) {
    throw new Error("trash already exists");
  }

  await client.raw("insert into trash (note_id,  user_id) values (?, ?)", [
    trash.note_id,
    trash.user_id,
  ]);
  const data = await client.raw(
    "select * from trash where user_id = ? order by deleted_at desc",
    [trash.user_id]
  );
  return await data[0];
};

const deletePermenently = async (trash: trashType) => {
  const trashId = trash.id;

  // delete the trash item permanently
  await client.raw("delete from trash where id = ?", trashId);
  await client.raw("delete from notes where id = ?", trash.note_id);

  return { message: "trash deleted permanently" };
};

const deleteAllPermanently = async (userId: number) => {
  // getting all the trash items of the user
  const mytrashNotes = await client.raw(
    "select *, trash.id as trash_id from notes inner join trash on notes.id = trash.note_id where trash.user_id = ?",
    userId
  );

  // delete all the trash items permanently
  await mytrashNotes[0].forEach(async (note: any) => {
    await client.raw("delete from trash where id = ?", note.trash_id);
    await client.raw("delete from notes where id = ?", note.note_id);
  });

  return { message: "All trash deleted permanently" };
};

export const trashRepository = {
  mytrash,
  create,
  deletetrash,
  deletePermenently,
  deleteAllPermanently,
};
