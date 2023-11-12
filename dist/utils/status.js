"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse = (res, data, message, code) => {
    return res.status(code !== null && code !== void 0 ? code : 200).json({
        status: "Success",
        message: message !== null && message !== void 0 ? message : "operation successful",
        data,
    });
};
const errorResponse = (res, message, code) => {
    return res.status(code !== null && code !== void 0 ? code : 400).json({
        status: "Error",
        message: message !== null && message !== void 0 ? message : "Something went wrong",
    });
};
const status = {
    successResponse,
    errorResponse,
};
exports.default = status;
//# sourceMappingURL=status.js.map