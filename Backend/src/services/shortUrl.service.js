import { generateNanoId } from "../utils/helper.js";
import shortUrlSchema from "../models/shorturl.model.js"
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js";

export const createShortUrlWithoutUserService = async (url) => {
    const shortUrl = generateNanoId(7);
    if (!shortUrl) throw new Error("shortUrl not generated")
    await saveShortUrl(shortUrl, url);
    return shortUrl;

}


export const createShortUrlWithUserService = async (url, userId, customUrl = null) => {
    const shortUrl = customUrl || generateNanoId(7);
    const exists = await getCustomShortUrl(customUrl);
    if (exists) throw new Error("This custom url already exists")
    await saveShortUrl(shortUrl, url, userId)
    return shortUrl;

}