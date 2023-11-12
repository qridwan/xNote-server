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
exports.notesController = void 0;
const domain_1 = require("../domain");
const status_1 = __importDefault(require("../../utils/status"));
const getInfoFromJwt_1 = require("../../utils/getInfoFromJwt");
// import { User } from "../domain";
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const note = yield domain_1.Notes.createNote(req.body, id);
        status_1.default.successResponse(res, note, "Note created successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error getting notes." + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const editNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const note = yield domain_1.Notes.editNote(req.body, id);
        status_1.default.successResponse(res, note, "Note updated successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error editing notes." + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const note = yield domain_1.Notes.getNotes(id);
        status_1.default.successResponse(res, note, "Notes retrieved successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error creating note. Please contact an admin." + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const getSingleNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: user_id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const { id } = req.params;
        const note = yield domain_1.Notes.singleNote(id, user_id);
        status_1.default.successResponse(res, note, "Notes retrieved successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error creating note. Please contact an admin." + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const noteId = req.params.id;
        const note = yield domain_1.Notes.deleteNote(noteId);
        status_1.default.successResponse(res, note, "Notes successfully deleted");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error deleting note. Please contact an admin." + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const notesByFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: user_id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const note = yield domain_1.Notes.notesByFolder(user_id, req.params.id);
        status_1.default.successResponse(res, note, "Notes successfully retrieved");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error deleting note. Please contact an admin." + error.message);
    }
});
exports.notesController = {
    createNote,
    getNotes,
    deleteNote,
    editNote,
    getSingleNote,
    notesByFolder,
};
//# sourceMappingURL=index.js.map