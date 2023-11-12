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
// /**
//  * @description
//  * @param req
//  * @param res
//  * @returns
//  */
// const reguser = async (req: express.Request, res: express.Response) => {
//   try {
//     const userFounded = await Auth.findById(req.body.user_id);
//     if (userFounded) {
//       return res.status(401).json({
//         status: "Error",
//         ErrorMessage: "An user already exist with that ID",
//       });
//     }
//     const encryptedPassword = await crypt.encryptPassword(req.body.password);
//     const user = await Auth.reguser({
//       ...req.body,
//       password: encryptedPassword,
//     });
//     // console.log("userFounded: ", userFounded, req.body, user);
//     const token = await crypt.generateJWT(user.email, user.user_id);
//     delete user.password;
//     res.status(201).json({
//       ...user,
//       token: token,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({
//       status: "Error",
//       ErrorMessage: "Please contact an admin.",
//     });
//   }
// };
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
        status_1.default.errorResponse(res, "Error getting notes.");
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
        console.log("error: ", error);
        status_1.default.errorResponse(res, "Error editing notes.");
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
        status_1.default.errorResponse(res, "Error creating note. Please contact an admin.");
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
        status_1.default.errorResponse(res, "Error creating note. Please contact an admin.");
    }
});
exports.notesController = {
    createNote,
    getNotes,
    deleteNote,
    editNote,
};
//# sourceMappingURL=index.js.map