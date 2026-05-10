import { createShortUrlWithoutUserService, createShortUrlWithUserService } from "../services/shortUrl.service.js";
import { generateNanoId } from "../utils/helper.js";
import { findUrlFromShortUrl } from "../dao/short_url.js";
import { ConflictError } from "../utils/errorHandler.js";
import wrapAsync from "../utils/tryCatchWrappers.js";
export const createShortUrl = wrapAsync(async (req, res) => {
    const data = req.body;
    let shortUrl
    if (req.user) {
        shortUrl = await createShortUrlWithUserService(data.url, req.user.id, data.customUrl);
    }
    else
        shortUrl = await createShortUrlWithoutUserService(data.url);
    res.status(200).json({ shorturl: process.env.APP_URL + shortUrl });

})

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
    const { id } = req.params;
    const url = await findUrlFromShortUrl(id);
    if (!url) throw new Error("Short URL not found ")
    res.redirect(url.full_url)
}
)


