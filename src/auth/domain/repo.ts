import client from "../../database/knex";
import { UserRegister } from "../validations/types";

/**
 * @description This function retrieve one user from the database having given user_id;
 * @param {string} user_id
 * @returns the found user
 */
const find = (key: string) =>
  client
    .select()
    .from("users")
    .where({
      email: key,
    })
    .first();

/**
 * @description This function adds an user to the database
 * @param {UserRegister} user
 * @returns the created user
 */

const signup = async (user: UserRegister) => {
  const [ResultSetHeader] = await client.raw(
    "insert into users (username, email, password) values (?, ?, ?)",
    [user.username, user.email, user.password]
  );
  const data = await client.raw(
    "select username, email, password from users where id = ?",
    [ResultSetHeader.insertId]
  );
  return await data[0][0];
};

export const authRepository = {
  find,
  signup,
};
