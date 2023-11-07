import client from "../../database/knex";
import { trashType } from "../validations/types";
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} user_id
 * @returns the found user
 */
const mytrash = async (user_id: string) => {
  const res = await client.raw(
    "select * from trash where user_id = ? order by deleted_at desc",
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
  console.log("trash: ", trash);
  const trashId = trash.id;

  // delete the trash item permanently
  await client.raw("delete from trash where id = ?", trashId);
  await client.raw("delete from notes where id = ?", trash.note_id);

  return { message: "trash deleted permanently" };
};

export const trashRepository = {
  mytrash,
  create,
  deletetrash,
  deletePermenently,
};
