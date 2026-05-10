import { findUserByEmail } from "../dao/user.dao.js";
import { verifyToken } from "./helper.js";
export const attachUser = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return next();
    try {
        let decoded = verifyToken(token)
        let user = await findUserByEmail(decoded.email);
        if (!user) return next();

        req.user = user

        next();
    }
    catch (err) {
        next();
    }
}