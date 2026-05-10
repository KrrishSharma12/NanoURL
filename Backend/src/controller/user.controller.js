import wrapAsync from "../utils/tryCatchWrappers.js";
import userModel from "../models/user.model.js"
import { getAllUserUrl } from "../dao/user.dao.js";


export const getAllUserUrls = wrapAsync(async (req, res) => {
    const { _id } = req.user;
    const urls = await getAllUserUrl(_id);
    res.status(200).json({ message: "success", urls })
})