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
    status.errorResponse(res, "Error getting notes.");
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
    status.errorResponse(res, "Error editing notes.");
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
    status.errorResponse(res, "Error creating note. Please contact an admin.");
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
    status.errorResponse(res, "Error creating note. Please contact an admin.");
  }
};

export const notesController = {
  createNote,
  getNotes,
  deleteNote,
  editNote,
};
