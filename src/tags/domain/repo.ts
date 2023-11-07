import client from "../../database/knex";
import { tagType } from "../validations/types";
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} user_id
 * @returns the found user
 */
const mytags = async (user_id: string) => {
  const res = await client.raw(
    "select * from tags where user_id = ? order by create_time desc",
    user_id
  );
  return res[0];
};
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} tag_id
 * @returns the found user
 */
const deletetag = async (tag_id: string) => {
  const res = await client.raw("delete from tags where id = ?", tag_id);
  return res[0];
};

/**
 * @description This function adds an user to the database
 * @param {tagType} tag
 * @returns the created user
 */

const create = async (tag: tagType) => {
  //   check tag.name and tag.user_id is already there or not
  const existingtag = await client.raw(
    "select tags.id from tags where name = ? and user_id = ? and note_id = ?",
    [tag.name, tag.user_id, tag.note_id ?? null]
  );
  if (existingtag[0].length > 0) {
    throw new Error("tag already exists");
  }

  await client.raw(
    "insert into tags (name,  user_id, note_id) values (?, ?, ?)",
    [tag.name, tag.user_id, tag.note_id ?? null]
  );
  const data = await client.raw(
    "select * from tags where note_id = ? and user_id = ?",
    [tag.note_id ?? null, tag.user_id]
  );
  return await data[0];
};

const edit = async (tag: tagType) => {
  const tagId = tag.id;

  // Check if the tag with the given `id` exists.
  const existingtag = await client.raw(
    "select tags.id from tags where id = ?",
    [tagId]
  );

  if (existingtag[0].length === 0) {
    throw new Error("tag not found");
  }

  // Update the tag with the new data.
  await client.raw(
    "update tags set name = ?, user_id = ?, note_id = ?  where id = ?",
    [tag.name, tag.user_id, tag.note_id ?? null, tagId]
  );

  // Fetch and return the updated tag.
  const updatedtag = await client.raw("select * from tags where id = ?", [
    tagId,
  ]);

  return updatedtag[0][0];
};

export const tagRepository = {
  mytags,
  create,
  edit,
  deletetag,
};
