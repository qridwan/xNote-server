import { tagType } from "../validations/types";
import { tagRepository } from "./repo";

/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */

const gettags = (id: string) => {
  //Here goes the logic
  return tagRepository.mytags(id);
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {string} id
 * @returns
 */

const deletetag = (id: string) => {
  //Here goes the logic
  return tagRepository.deletetag(id);
};

/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {tagType} tag
 * @returns
 */
const createtag = (tag: tagType, id: string) => {
  //Here goes the logic
  return tagRepository.create({ ...tag, user_id: id });
};
/**
 * @description This function is the validation layer of the function of the same name in repo.ts
 * @param {tagType} tag
 * @returns
 */
const edittag = (tag: tagType, user_id: string) => {
  //Here goes the logic
  return tagRepository.edit({ ...tag, user_id: user_id });
};

export const tags = {
  gettags,
  createtag,
  deletetag,
  edittag,
};
