import express from "express";
import { tags } from "../domain";
import status from "../../utils/status";
import { getUserInfo } from "../../utils/getInfoFromJwt";

/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const createtag = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);
    const tag = await tags.createtag(req.body, id);
    status.successResponse(res, tag, "tag created successfully");
  } catch (error) {
    status.errorResponse(res, "Could not create tag: " + error.message);
  }
};
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const edittag = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);

    const tag = await tags.edittag(req.body, id);
    status.successResponse(res, tag, "tag updated successfully");
  } catch (error) {
    status.errorResponse(res, "Error editing tags: " + error.message);
  }
};

/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const gettags = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);
    const tag = await tags.gettags(id);
    status.successResponse(res, tag, "tags retrieved successfully");
  } catch (error) {
    status.errorResponse(res, "Error creating tag. Please contact an admin.");
  }
};
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const deletetag = async (req: express.Request, res: express.Response) => {
  try {
    const tagId = req.params.id;
    const tag = await tags.deletetag(tagId);
    status.successResponse(res, tag, "tags successfully deleted");
  } catch (error) {
    status.errorResponse(res, "Error creating tag. Please contact an admin.");
  }
};

export const tagsController = {
  createtag,
  gettags,
  deletetag,
  edittag,
};
