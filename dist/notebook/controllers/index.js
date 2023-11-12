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
exports.notebooksController = void 0;
const domain_1 = require("../domain");
const status_1 = __importDefault(require("../../utils/status"));
const getInfoFromJwt_1 = require("../../utils/getInfoFromJwt");
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const createnotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const notebook = yield domain_1.notebooks.createnotebook(req.body, id);
        status_1.default.successResponse(res, notebook, "notebook created successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Could not create notebook: " + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const editnotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const notebook = yield domain_1.notebooks.editnotebook(req.body, id);
        status_1.default.successResponse(res, notebook, "notebook updated successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error editing notebooks: " + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const getnotebooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const notebook = yield domain_1.notebooks.getnotebooks(id);
        status_1.default.successResponse(res, notebook, "notebooks retrieved successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error creating notebook. " + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const deletenotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notebookId = req.params.id;
        const notebook = yield domain_1.notebooks.deletenotebook(notebookId);
        status_1.default.successResponse(res, notebook, "notebooks successfully deleted");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error creating notebook:" + error.message + ". Please contact an admin.");
    }
});
exports.notebooksController = {
    createnotebook,
    getnotebooks,
    deletenotebook,
    editnotebook,
};
//# sourceMappingURL=index.js.map