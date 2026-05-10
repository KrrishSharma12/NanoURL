import shortUrlModel from "../models/shorturl.model.js";
import { ConflictError } from "../utils/errorHandler.js";
export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    try {
        const newUrl = new shortUrlModel({
            full_url: longUrl,
            short_url: shortUrl
        })
        if (userId) {
            newUrl.user = userId
        }
        else {
            newUrl.expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)
        }

        await newUrl.save();
    } catch (err) {
        if (err.code == 11000) {
            throw new ConflictError("Short URL already exists ");
        }
        throw new Error(err)
    }

}


export const findUrlFromShortUrl = async (id) => {
    return await shortUrlModel.findOneAndUpdate({ short_url: id }, { $inc: { clicks: 1 } });
}

export const getCustomShortUrl = async (shortUrl) => {
    return await shortUrlModel.findOne({ short_url: shortUrl });

}