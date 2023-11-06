import express from "express";

const successResponse = (
  res: express.Response,
  data: any,
  message?: any,
  code?: number
) => {
  return res.status(code ?? 200).json({
    status: "Success",
    message: message ?? "operation successful",
    data,
  });
};
const errorResponse = (res: express.Response, message?: any, code?: number) => {
  return res.status(code ?? 400).json({
    status: "Error",
    message: message ?? "Something went wrong",
  });
};

const status = {
  successResponse,
  errorResponse,
};

export default status;
