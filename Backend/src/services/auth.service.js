
import JsonWebToken from "jsonwebtoken";
import { findUserByEmail, createUser } from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js"
import wrapAsync from "../utils/tryCatchWrappers.js";
import userModel from "../models/user.model.js"
import { signToken } from "../utils/helper.js";


export const registerUser = async (name, email, password) => {
    const user = await findUserByEmail(email)
    if (user)  throw new ConflictError("User already exists");
    let newUser = await createUser(name, email, password);
    let token = await signToken(newUser);
    
  return {user:newUser,token};
}