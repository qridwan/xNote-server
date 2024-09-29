import client from "../../database/knex";
import { notebookType } from "../validations/types";
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} user_id
 * @returns the found user
 */
const mynotebooks = async (user_id: string) => {
  const res = await client.raw(
    "select * from notebooks where user_id = ? order by create_time desc",
    user_id
  );
  return res[0];
};
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} notebook_id
 * @returns the found user
 */
const deletenotebook = async (notebook_id: string) => {
  const res = await client.raw(
    "delete from notebooks where id = ?",
    notebook_id
  );
  //delete all notes related to this notebook
  await client.raw("delete from notes where notebook_id = ?", notebook_id);
  //delete all trash related to this notebook
  await client.raw("delete from trash where notebook_id = ?", notebook_id);

  return { message: "notebook deleted", res: res[0] };
};

/**
 * @description This function adds an user to the database
 * @param {notebookType} notebook
 * @returns the created user
 */

const create = async (notebook: notebookType) => {
  //   check notebook.name and notebook.user_id is already there or not
  const existingnotebook = await client.raw(
    "select notebooks.id from notebooks where name = ? and user_id = ?",
    [notebook.name, notebook.user_id]
  );
  if (existingnotebook[0].length > 0) {
    throw new Error("notebook already exists");
  }

  await client.raw(
    "insert into notebooks (name,  user_id, icon) values (?, ?, ?)",
    [notebook.name, notebook.user_id, notebook.icon]
  );
  const data = await client.raw("select * from notebooks where user_id = ?", [
    notebook.user_id,
  ]);
  return await data[0];
};

const edit = async (notebook: notebookType) => {
  const notebookId = notebook.id;

  // Check if the notebook with the given `id` exists.
  const existingnotebook = await client.raw(
    "select notebooks.id from notebooks where id = ?",
    notebookId
  );

  if (existingnotebook[0].length === 0) {
    throw new Error("notebook not found");
  }

  // Update the notebook with the new data.
  await client.raw(
    "update notebooks set name = ?, user_id = ?, icon = ?  where id = ?",
    [notebook.name, notebook.user_id, notebook.icon, notebookId]
  );

  // Fetch and return the updated notebook.
  const updatednotebook = await client.raw(
    "select * from notebooks where id = ?",
    [notebookId]
  );

  return updatednotebook[0][0];
};

export const notebookRepository = {
  mynotebooks,
  create,
  edit,
  deletenotebook,
};
