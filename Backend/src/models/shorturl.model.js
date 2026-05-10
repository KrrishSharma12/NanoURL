import mongoose from "mongoose";
const shortUrlSchema = new mongoose.Schema({
    full_url: {
        type: String,
        required: true,
    },
    short_url: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    expiresAt: {
        type: Date,
        default: null   // NULL = permanent
    }
})
shortUrlSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
const shortUrl = mongoose.model("shortUrl", shortUrlSchema);
export default shortUrl;