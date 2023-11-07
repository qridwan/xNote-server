import { categoriesController } from ".";
import express from "express";
import { Middlewares } from "../../middlewares";
import {
  categoryCreationSchema,
  categoryEditSchema,
} from "../validations/schemas";
import { categoryType } from "../validations/types";

const categories = express.Router();

categories.post(
  "/create",
  Middlewares.validateSchemas<categoryType>(categoryCreationSchema),
  categoriesController.createcategory
);
categories.patch(
  "/edit",
  Middlewares.validateSchemas<categoryType>(categoryEditSchema),
  categoriesController.editcategory
);
categories.get("/", categoriesController.getcategories);
categories.delete("/:id", categoriesController.deletecategory);
export default categories;
