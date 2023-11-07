import client from "../../database/knex";
import { categoryType } from "../validations/types";
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} user_id
 * @returns the found user
 */
const mycategories = async (user_id: string) => {
  const res = await client.raw(
    "select * from categories where user_id = ? order by create_time desc",
    user_id
  );
  return res[0];
};
/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} category_id
 * @returns the found user
 */
const deletecategory = async (category_id: string) => {
  const res = await client.raw(
    "delete from categories where id = ?",
    category_id
  );
  return res[0];
};

/**
 * @description This function adds an user to the database
 * @param {categoryType} category
 * @returns the created user
 */

const create = async (category: categoryType) => {
  console.log("category: ", category);

  //   check category.name and category.user_id is already there or not
  const existingcategory = await client.raw(
    "select categories.id from categories where name = ? and user_id = ?",
    [category.name, category.user_id]
  );
  if (existingcategory[0].length > 0) {
    throw new Error("category already exists");
  }

  await client.raw("insert into categories (name,  user_id) values (?, ?)", [
    category.name,
    category.user_id,
  ]);
  const data = await client.raw("select * from categories where user_id = ?", [
    category.user_id,
  ]);
  return await data[0];
};

const edit = async (category: categoryType) => {
  const categoryId = category.id;

  // Check if the category with the given `id` exists.
  const existingcategory = await client.raw(
    "select categories.id from categories where id = ?",
    categoryId
  );

  if (existingcategory[0].length === 0) {
    throw new Error("category not found");
  }

  // Update the category with the new data.
  await client.raw(
    "update categories set name = ?, user_id = ?  where id = ?",
    [category.name, category.user_id, categoryId]
  );

  // Fetch and return the updated category.
  const updatedcategory = await client.raw(
    "select * from categories where id = ?",
    [categoryId]
  );

  return updatedcategory[0][0];
};

export const categoryRepository = {
  mycategories,
  create,
  edit,
  deletecategory,
};
