import express from "express";
import { trash } from "../domain";
import status from "../../utils/status";
import { getUserInfo } from "../../utils/getInfoFromJwt";

/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const createtrash = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);
    const result = await trash.createtrash(req.body, Number(id));
    status.successResponse(res, result, "trash created successfully");
  } catch (error) {
    status.errorResponse(res, "Could not create trash: " + error.message);
  }
};
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const permenentDelete = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);

    const result = await trash.permenentDelete(req.body, Number(id));
    status.successResponse(res, result, "trash item clered successfully");
  } catch (error) {
    status.errorResponse(res, "Error editing trash: " + error.message);
  }
};

/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const gettrash = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);
    const result = await trash.gettrash(id);
    status.successResponse(res, result, "trash retrieved successfully");
  } catch (error) {
    status.errorResponse(res, "Error creating trash. " + error.message);
  }
};
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const deletetrash = async (req: express.Request, res: express.Response) => {
  try {
    const trashId = req.params.id;
    const result = await trash.deletetrash(trashId);
    status.successResponse(res, result, "trash successfully deleted");
  } catch (error) {
    status.errorResponse(
      res,
      "Error creating trash:" + error.message + ". Please contact an admin."
    );
  }
};

export const trashController = {
  createtrash,
  gettrash,
  deletetrash,
  permenentDelete,
};
