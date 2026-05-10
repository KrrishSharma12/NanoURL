import bcrypt from "bcrypt";
import userModel from "../models/user.model.js"
import urlModel from '../models/shorturl.model.js'


export const findUserByEmail = async (email) => {
    return await userModel.findOne({ email })
}

export const findUserById = async (id) => {
    return await userModel.findUserById({ id })

}


export const createUser = async (name, email, password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const createdUser = await userModel.create({ name, email, password: hash });
        return createdUser;
    }
    catch (err) {
        throw new Error("Something went wrong");
    }
}


export const getAllUserUrl = async (id) => {
    return await urlModel.find({ user: id })
}