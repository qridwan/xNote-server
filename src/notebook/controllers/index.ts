import express from "express";
import { notebooks } from "../domain";
import status from "../../utils/status";
import { getUserInfo } from "../../utils/getInfoFromJwt";

/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const createnotebook = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);
    const notebook = await notebooks.createnotebook(req.body, id);
    status.successResponse(res, notebook, "notebook created successfully");
  } catch (error) {
    status.errorResponse(res, "Could not create notebook: " + error.message);
  }
};
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const editnotebook = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);

    const notebook = await notebooks.editnotebook(req.body, id);
    status.successResponse(res, notebook, "notebook updated successfully");
  } catch (error) {
    status.errorResponse(res, "Error editing notebooks: " + error.message);
  }
};

/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const getnotebooks = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);
    const notebook = await notebooks.getnotebooks(id);
    status.successResponse(res, notebook, "notebooks retrieved successfully");
  } catch (error) {
    status.errorResponse(res, "Error creating notebook. " + error.message);
  }
};
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const deletenotebook = async (req: express.Request, res: express.Response) => {
  try {
    const notebookId = req.params.id;
    const notebook = await notebooks.deletenotebook(notebookId);
    status.successResponse(res, notebook, "notebooks successfully deleted");
  } catch (error) {
    status.errorResponse(
      res,
      "Error creating notebook:" + error.message + ". Please contact an admin."
    );
  }
};

export const notebooksController = {
  createnotebook,
  getnotebooks,
  deletenotebook,
  editnotebook,
};
