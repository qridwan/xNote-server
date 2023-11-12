"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse = (res, data) => {
    return res.status(200).json({
        status: "success",
        message: "operation successful",
        data,
    });
};
const status = {
    successResponse,
};
exports.default = status;
//# sourceMappingURL=200.js.map