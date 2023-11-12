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
exports.tagsController = void 0;
const domain_1 = require("../domain");
const status_1 = __importDefault(require("../../utils/status"));
const getInfoFromJwt_1 = require("../../utils/getInfoFromJwt");
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const createtag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const tag = yield domain_1.tags.createtag(req.body, id);
        status_1.default.successResponse(res, tag, "tag created successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Could not create tag: " + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const edittag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const tag = yield domain_1.tags.edittag(req.body, id);
        status_1.default.successResponse(res, tag, "tag updated successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error editing tags: " + error.message);
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const gettags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (0, getInfoFromJwt_1.getUserInfo)(req.headers.authorization);
        const tag = yield domain_1.tags.gettags(id);
        status_1.default.successResponse(res, tag, "tags retrieved successfully");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error creating tag. Please contact an admin.");
    }
});
/**
 * @description
 * @param req
 * @param res
 * @returns
 */
const deletetag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tagId = req.params.id;
        const tag = yield domain_1.tags.deletetag(tagId);
        status_1.default.successResponse(res, tag, "tags successfully deleted");
    }
    catch (error) {
        status_1.default.errorResponse(res, "Error creating tag. Please contact an admin.");
    }
});
exports.tagsController = {
    createtag,
    gettags,
    deletetag,
    edittag,
};
//# sourceMappingURL=index.js.map