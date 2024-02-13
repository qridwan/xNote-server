import { trashType } from "../validations/types";
import { trashRepository } from "./repo";

/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */

const gettrash = (id: string) => {
  //Here goes the logic
  return trashRepository.mytrash(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */

const deletetrash = (id: string) => {
  //Here goes the logic
  return trashRepository.deletetrash(id);
};

/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {trashType} trash
 * @returns
 */
const createtrash = (trash: trashType, id: number) => {
  //Here goes the logic
  return trashRepository.create({ ...trash, user_id: id });
};

/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {trashType} trash
 * @returns
 */
const permenentDelete = (trash: trashType, user_id: number) => {
  //Here goes the logic
  return trashRepository.deletePermenently({ ...trash, user_id: user_id });
};

/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {number} user_id
 * @returns
 */
const permanentDeleteAll = (user_id: number) => {
  //Here goes the logic
  return trashRepository.deleteAllPermanently(user_id);
};

export const trash = {
  gettrash,
  createtrash,
  deletetrash,
  permenentDelete,
  permanentDeleteAll,
};
