import { notebookType } from "../validations/types";
import { notebookRepository } from "./repo";

/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */

const getnotebooks = (id: string) => {
  //Here goes the logic
  return notebookRepository.mynotebooks(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */

const deletenotebook = (id: string) => {
  //Here goes the logic
  return notebookRepository.deletenotebook(id);
};

/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {notebookType} notebook
 * @returns
 */
const createnotebook = (notebook: notebookType, id: string) => {
  //Here goes the logic
  return notebookRepository.create({ ...notebook, user_id: id });
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {notebookType} notebook
 * @returns
 */
const editnotebook = (notebook: notebookType, user_id: string) => {
  //Here goes the logic
  return notebookRepository.edit({ ...notebook, user_id: user_id });
};

export const notebooks = {
  getnotebooks,
  createnotebook,
  deletenotebook,
  editnotebook,
};
