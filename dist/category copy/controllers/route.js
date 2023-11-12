"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const schemas_1 = require("../validations/schemas");
const categories = express_1.default.Router();
categories.post("/create", middlewares_1.Middlewares.validateSchemas(schemas_1.categoryCreationSchema), _1.categoriesController.createcategory);
categories.patch("/edit", middlewares_1.Middlewares.validateSchemas(schemas_1.categoryEditSchema), _1.categoriesController.editcategory);
categories.get("/", _1.categoriesController.getcategories);
categories.delete("/:id", _1.categoriesController.deletecategory);
exports.default = categories;
//# sourceMappingURL=route.js.map