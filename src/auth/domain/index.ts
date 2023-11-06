import { UserRegister, userLogin } from "../validations/types";
import { authRepository } from "./repo";

// /**
//  * @description This function is the validation layer of the function of the same name in repo.ts
//  * @param {string} email
//  * @returns
//  */
// const find = (email: string) => {
//   //Here goes the logic
//   return authRepository.find(email);
// };

const findById = (key: string) => {
  //Here goes the logic
  return authRepository.find(key);
};

// /**
//  * @description This function is the validation layer of the function of the same name in repo.ts
//  * @param {Registeruser} user
//  * @returns
//  */
// const reguser = (user: Registeruser) => {
//   //Here goes the logic
//   return authRepository.reguser(user);
// };
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {UserRegister} SignUp
 * @returns
 */
const signUp = (SignUp: UserRegister) => {
  //Here goes the logic
  return authRepository.signup(SignUp);
};

export const Auth = {
  //   find,

  findById,
  signUp,
};
