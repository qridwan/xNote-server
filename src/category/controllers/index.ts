import express from "express";
import { categories } from "../domain";
import status from "../../utils/status";
import { getUserInfo } from "../../utils/getInfoFromJwt";

/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const createcategory = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);
    const category = await categories.createcategory(req.body, id);
    status.successResponse(res, category, "category created successfully");
  } catch (error) {
    status.errorResponse(res, "Could not create category: " + error.message);
  }
};
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const editcategory = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);

    const category = await categories.editcategory(req.body, id);
    status.successResponse(res, category, "category updated successfully");
  } catch (error) {
    status.errorResponse(res, "Error editing categories: " + error.message);
  }
};

/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const getcategories = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);
    const category = await categories.getcategories(id);
    status.successResponse(res, category, "categories retrieved successfully");
  } catch (error) {
    status.errorResponse(
      res,
      "Error creating category. Please contact an admin."
    );
  }
};
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const deletecategory = async (req: express.Request, res: express.Response) => {
  try {
    const categoryId = req.params.id;
    const category = await categories.deletecategory(categoryId);
    status.successResponse(res, category, "categories successfully deleted");
  } catch (error) {
    status.errorResponse(
      res,
      "Error creating category. Please contact an admin."
    );
  }
};

export const categoriesController = {
  createcategory,
  getcategories,
  deletecategory,
  editcategory,
};
