import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';
export const generateNanoId = (length) => {
    return nanoid(length)
}

export const signToken = async (newUser) => {
    let token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: "30m" });


    return token;

}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);

}
