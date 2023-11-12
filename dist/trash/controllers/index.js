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
exports.trashController = void 0;
const domain_1 = require("../domain");
const status_1 = __importDefault(require("../../utils/status"));
const getInfoFromJwt_1 = require("../../utils/getInfoFromJwt");
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const createtrash = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const result = yield domain_1.trash.createtrash(req.body, Number(id));
        status_1.default.successResponse(res, result, "trash created successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Could not create trash: " + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const permenentDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const result = yield domain_1.trash.permenentDelete(req.body, Number(id));
        status_1.default.successResponse(res, result, "trash item clered successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error editing trash: " + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const gettrash = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const result = yield domain_1.trash.gettrash(id);
        status_1.default.successResponse(res, result, "trash retrieved successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error creating trash. " + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const deletetrash = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trashId = req.params.id;
        const result = yield domain_1.trash.deletetrash(trashId);
        status_1.default.successResponse(res, result, "trash successfully deleted");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error creating trash:" + error.message + ". Please contact an admin.");
    }
});
exports.trashController = {
    createtrash,
    gettrash,
    deletetrash,
    permenentDelete,
};
//# sourceMappingURL=index.js.map