import express from "express";
import { crypt } from "../../crypt/domain";
import { Auth } from "../domain";
import status from "../../utils/status";
// import { User } from "../domain";

/**
 * @description This function is the final action of login endpoint it takes the body of the Request
 *              and look for a coincidence in the database if an user is found, generates a JWT and resolves it
 * @param req
 * @param res
 * @returns
 */

const login = async (req: express.Request, res: express.Response) => {
  try {
    // const userFinded = await Auth.find(req.body.user_id);
    const userFounded = await Auth.findById(req.body.email);
    // console.log("userFounded: ", userFounded);
    if (!userFounded) {
      return status.errorResponse(res, "User not found", 400);
    }

    const isPassword = await crypt.comparePassword(
      req.body.password,
      userFounded.password
    );
    if (!isPassword) {
      return status.errorResponse(
        res,
        "Email and password doesn't match to an user",
        401
      );
    }

    const token = await crypt.generateJWT(
      userFounded.email,
      userFounded.username,
      userFounded.id
    );
    status.successResponse(
      res,
      {
        ...userFounded,
        token: token,
      },
      "User authenticated successfully",
      201
    );
  } catch (error) {
    status.errorResponse(res, "Please contact with userify admin!");
  }
};
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
const register = async (req: express.Request, res: express.Response) => {
  try {
    const userFound = await Auth.findById(req.body.email);
    if (userFound) {
      return status.errorResponse(
        res,
        "An user already exist with that email address",
        500
      );
    }

    const encryptedPassword = await crypt.encryptPassword(req.body.password);

    const user = await Auth.signUp({
      ...req.body,
      password: encryptedPassword,
    });

    // console.log("userFounded: ", userFounded, req.body, user);
    const token = await crypt.generateJWT(user.email, user.username, user.id);
    delete user.password;
    status.successResponse(res, {
      ...user,
      token: token,
    });
  } catch (error) {
    status.errorResponse(res, "Please contact an admin.");
  }
};

/**
 * @description This function is the final action of renew endpoint it takes the body of the Request
 *              and generates the new JWT.
 * @param req
 * @param res
 * @returns
 */
const renewToken = async (req: express.Request, res: express.Response) => {
  const { username, email, id } = req.body;
  try {
    const token = await crypt.generateJWT(email, username, id);
    return status.successResponse(
      res,
      { token, username, email },
      "New token generated"
    );
  } catch (error) {
    return status.errorResponse(res, "Please contact an admin.");
  }
};

export const AuthController = {
  renewToken,
  register,
  login,
};
