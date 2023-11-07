import { notesController } from ".";
import express from "express";
import { Middlewares } from "../../middlewares";

import { noteCreationSchema, noteEditSchema } from "../validations/schemas";
import { noteType } from "../validations/types";

const notes = express.Router();

notes.post(
  "/create",
  Middlewares.validateSchemas<noteType>(noteCreationSchema),
  notesController.createNote
);
notes.patch(
  "/edit",
  Middlewares.validateSchemas<noteType>(noteEditSchema),
  notesController.editNote
);
notes.get("/", notesController.getNotes);
notes.delete("/:id", notesController.deleteNote);
export default notes;
