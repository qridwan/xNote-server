import { cryptRepository } from "./repo";

/**
 * @description This function is a validation layer for the function of the same name in repo.ts
 * @param password
 * @returns
 */
const encryptPassword = async (password: string) => {
  //Here goes validations rules
  return await cryptRepository.encryptPassword(password);
};
/**
 * @description This function is a validation layer for the function of the same name in repo.ts
 * @param userPassword
 * @param toCompare
 * @returns
 */
const comparePassword = async (userPassword: string, toCompare: string) => {
  // console.log("comparing=>>>: ", { userPassword, toCompare });
  if (!userPassword || !toCompare) return Promise.resolve(false);
  return await cryptRepository.comparePassword(userPassword, toCompare);
};

/**
 * @description This function is a validation layer for the function of the same name in repo.ts
 * @param email
 * @param user_id
 * @returns
 */
const generateJWT = async (email: string, username: string, id: string) => {
  // if (iduser < 0) return Promise.resolve(null);
  return await cryptRepository.generateJWT(email, username, id);
};

export const crypt = {
  encryptPassword,
  generateJWT,
  comparePassword,
};
