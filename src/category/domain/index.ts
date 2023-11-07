import { categoryType } from "../validations/types";
import { categoryRepository } from "./repo";

/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */

const getcategories = (id: string) => {
  //Here goes the logic
  return categoryRepository.mycategories(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */

const deletecategory = (id: string) => {
  //Here goes the logic
  return categoryRepository.deletecategory(id);
};

/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {categoryType} category
 * @returns
 */
const createcategory = (category: categoryType, id: string) => {
  //Here goes the logic
  return categoryRepository.create({ ...category, user_id: id });
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {categoryType} category
 * @returns
 */
const editcategory = (category: categoryType, user_id: string) => {
  //Here goes the logic
  return categoryRepository.edit({ ...category, user_id: user_id });
};

export const categories = {
  getcategories,
  createcategory,
  deletecategory,
  editcategory,
};
