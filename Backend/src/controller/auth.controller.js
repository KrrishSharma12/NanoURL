import wrapAsync from "../utils/tryCatchWrappers.js"
import { registerUser } from "../services/auth.service.js";
import { findUserByEmail } from "../dao/user.dao.js";
import { cookieOptions } from "../config/cookie.config.js";
import { signToken } from "../utils/helper.js";
import bcrypt from 'bcrypt'

export const register_user = wrapAsync(async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const { user, token } = await registerUser(name, email, password);
        res.cookie('token', token, cookieOptions);
        res.status(200).json({
            user: user,
            message: "User registered successfully"
        });
    }
    catch (err) {
        res.status(409).json({
            message: err.message
        });

    }
})

export const login_user = (async (req, res) => {
    let { email, password } = req.body;
    let user = await findUserByEmail(email);
    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
        const token = await signToken(user);
        res.cookie("token", token, cookieOptions);
        return res.status(200).json({ user: user, message: "Login successfull" });

    }
    else {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

})

export const logout_user = wrapAsync(async (req, res) => {
    res.clearCookie("token", cookieOptions);
    res.status(200).json({ message: "Logout success" })
})

export const get_current_user=wrapAsync(async(req,res)=>{
    res.status(200).json({user:req.user});
})