import express from "express";
import { Notes } from "../domain";
import status from "../../utils/status";
import { getUserInfo } from "../../utils/getInfoFromJwt";
// import { User } from "../domain";

/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const createNote = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);
    const note = await Notes.createNote(req.body, id);
    status.successResponse(res, note, "Note created successfully");
  } catch (error) {
    status.errorResponse(res, "Error getting notes." + error.message);
  }
};
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const editNote = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);

    const note = await Notes.editNote(req.body, id);
    status.successResponse(res, note, "Note updated successfully");
  } catch (error) {
    status.errorResponse(res, "Error editing notes." + error.message);
  }
};

/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const getNotes = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = getUserInfo(req.headers.authorization);
    const note = await Notes.getNotes(id);
    status.successResponse(res, note, "Notes retrieved successfully");
  } catch (error) {
    status.errorResponse(
      res,
      "Error creating note. Please contact an admin." + error.message
    );
  }
};
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const getSingleNote = async (req: express.Request, res: express.Response) => {
  try {
    const { id: user_id } = getUserInfo(req.headers.authorization);
    const { id } = req.params;
    const note = await Notes.singleNote(id, user_id);
    status.successResponse(res, note, "Notes retrieved successfully");
  } catch (error) {
    status.errorResponse(
      res,
      "Error creating note. Please contact an admin." + error.message
    );
  }
};
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const deleteNote = async (req: express.Request, res: express.Response) => {
  try {
    const noteId = req.params.id;
    const note = await Notes.deleteNote(noteId);
    status.successResponse(res, note, "Notes successfully deleted");
  } catch (error) {
    status.errorResponse(
      res,
      "Error deleting note. Please contact an admin." + error.message
    );
  }
};
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const notesByFolder = async (req: express.Request, res: express.Response) => {
  try {
    const { id: user_id } = getUserInfo(req.headers.authorization);
    const note = await Notes.notesByFolder(user_id, req.params.id);
    status.successResponse(res, note, "Notes successfully retrieved");
  } catch (error) {
    status.errorResponse(
      res,
      "Error deleting note. Please contact an admin." + error.message
    );
  }
};

export const notesController = {
  createNote,
  getNotes,
  deleteNote,
  editNote,
  getSingleNote,
  notesByFolder,
};
