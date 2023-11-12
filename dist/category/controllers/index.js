"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesController = void 0;
const domain_1 = require("../domain");
const status_1 = __importDefault(require("../../utils/status"));
const getInfoFromJwt_1 = require("../../utils/getInfoFromJwt");
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const createcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const category = yield domain_1.categories.createcategory(req.body, id);
        status_1.default.successResponse(res, category, "category created successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Could not create category: " + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const editcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const category = yield domain_1.categories.editcategory(req.body, id);
        status_1.default.successResponse(res, category, "category updated successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error editing categories: " + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const getcategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const category = yield domain_1.categories.getcategories(id);
        status_1.default.successResponse(res, category, "categories retrieved successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error creating category. Please contact an admin.");
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const deletecategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryId = req.params.id;
        const category = yield domain_1.categories.deletecategory(categoryId);
        status_1.default.successResponse(res, category, "categories successfully deleted");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error creating category. Please contact an admin.");
    }
});
exports.categoriesController = {
    createcategory,
    getcategories,
    deletecategory,
    editcategory,
};
//# sourceMappingURL=index.js.map