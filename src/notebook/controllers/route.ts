import { notebooksController } from ".";
import express from "express";
import { Middlewares } from "../../middlewares";
import {
  notebookCreationSchema,
  notebookEditSchema,
} from "../validations/schemas";
import { notebookType } from "../validations/types";

const notebooks = express.Router();

notebooks.post(
  "/create",
  Middlewares.validateSchemas<notebookType>(notebookCreationSchema),
  notebooksController.createnotebook
);
notebooks.patch(
  "/edit",
  Middlewares.validateSchemas<notebookType>(notebookEditSchema),
  notebooksController.editnotebook
);
notebooks.get("/", notebooksController.getnotebooks);
notebooks.delete("/:id", notebooksController.deletenotebook);
export default notebooks;
