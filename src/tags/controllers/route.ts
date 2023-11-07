import { tagsController } from ".";
import express from "express";
import { Middlewares } from "../../middlewares";
import { tagCreationSchema, tagEditSchema } from "../validations/schemas";
import { tagType } from "../validations/types";

const tags = express.Router();

tags.post(
  "/create",
  Middlewares.validateSchemas<tagType>(tagCreationSchema),
  tagsController.createtag
);
tags.patch(
  "/edit",
  Middlewares.validateSchemas<tagType>(tagEditSchema),
  tagsController.edittag
);
tags.get("/", tagsController.gettags);
tags.delete("/:id", tagsController.deletetag);
export default tags;
