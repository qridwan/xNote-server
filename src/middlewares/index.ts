import joi from "joi";
import express from "express";
import JoiErrors from "../types/JoiErrors";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JoiAlter } from "../types/JoiAlter";
require("dotenv").config();

/**
 * @description This function takes a joi schema and JoiAlter type and works as a middleware to validate
 *              the data before its send to the endpoint
 * @param {joi.ObjectSchema<T>} schema
 * @param {JoiAlter} type
 * @returns Express request
 */

const validateSchemas =
  <T>(schema: joi.ObjectSchema<T>, type: JoiAlter = JoiAlter.default) =>
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      let newBody = {};

      if (type.length) {
        newBody = await schema.tailor(type).validateAsync(req.body, {
          stripUnknown: true,
        });
      } else {
        newBody = await schema.validateAsync(req.body, {
          stripUnknown: true,
        });
      }

      req.body = { ...newBody };

      next();
    } catch (e) {
      console.log(e);
      const error = /(?<=\")(.*?)(?=\")/g.exec(e.message)[0];

      res.status(400).json({
        status: "An error occured",
        errorMessage: JoiErrors[error],
      });
    }
  };

/**
 * @description This function works as a middleware to validate the JWT in the request headers
 * @param req
 * @param res
 * @param next
 * @returns
 */

const validateJWT = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  //   const token = req.headers["x-token"];

  const token = req.headers.authorization;
  console.log("token: ", token);
  if (!token) {
    return res.status(400).json({
      status: "Error",
      ErrorMessage: "Please send a token in the request",
    });
  }

  try {
    const { email, username, id } = jwt.verify(
      token as string,
      process.env.SECRET_KEY
    ) as JwtPayload;
    // req.body.email = email;
    // req.body.username = username;
    // req.body.id = id;
  } catch (error) {
    return res.status(400).json({
      status: "Error",
      ErrorMessage: "Please send a valid token in the request",
    });
  }

  next();
};

export const Middlewares = { validateSchemas, validateJWT };
