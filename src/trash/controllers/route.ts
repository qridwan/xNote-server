import { trashController } from ".";
import express from "express";
import { Middlewares } from "../../middlewares";
import { trashCreationSchema, trashEditSchema } from "../validations/schemas";
import { trashType } from "../validations/types";

const trash = express.Router();

trash.post(
  "/create",
  Middlewares.validateSchemas<trashType>(trashCreationSchema),
  trashController.createtrash
);
trash.patch(
  "/permenent-delete",
  Middlewares.validateSchemas<trashType>(trashEditSchema),
  trashController.permenentDelete
);
trash.delete("/permanent-delete-all", trashController.deleteAllTrash);

trash.get("/", trashController.gettrash);
trash.delete("/:id", trashController.deletetrash);
export default trash;
