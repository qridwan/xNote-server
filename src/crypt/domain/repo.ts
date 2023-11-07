import bcrypt from "bcryptjs";
import jwt = require("jsonwebtoken");

/**
 * @descrition This function takes a password and returns an encryption of it
 * @param {string} password
 * @returns {Promise<string>} encryptedPassword
 */
const encryptPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(password, salt);

    return encryptedPassword;
  } catch (error) {
    console.log(error);
  }
};

/**
 * @description This function takes the raw password and the password retrieved from the database
 *              and returns a boolean that represents if they are equal or not
 * @param {string} userPassword
 * @param {string} toCompare
 * @returns {Promise<boolean>} isEqual
 */
const comparePassword = async (
  userPassword: string,
  toCompare: string
): Promise<boolean> => {
  return await bcrypt.compare(userPassword, toCompare);
};

/**
 * @description This function takes email and username to generate a JWT
 * @param {string} email
 * @param {string} id
 * @returns {Promise<string>} JWT Token
 */

const generateJWT = (
  email: string,
  username: string,
  id: string
): Promise<string> =>
  new Promise((res, rej) => {
    const payload = {
      email,
      username,
      id,
    };
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      {
        expiresIn: "12h",
      },
      (error: jwt.JsonWebTokenError, token: string) => {
        if (error) {
          rej(
            "Couldn't generate token. Please contact an Admin" + error.message
          );
        } else res(token);
      }
    );
  });

export const cryptRepository = {
  encryptPassword,
  generateJWT,
  comparePassword,
};
