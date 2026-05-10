
import { findUserByEmail } from '../src/dao/user.dao.js';
import { verifyToken } from '../src/utils/helper.js';
export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token


    if (!token) return res.status(401).json({ message: "Unauthorized" })

    try {
        let decoded = verifyToken(token)
        let user = await findUserByEmail(decoded.email)

        if (!user) return res.status(401).json({ message: "Unauthorized" });
        req.user = user

        next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}