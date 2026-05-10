import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from './src/config/mongo.config.js';
import shortUrl from './src/routes/shortUrl.route.js';
import auth_routes from './src/routes/auth.routes.js';
import user_route from './src/routes/user.route.js';
import shortUrlSchema from "./src/models/shorturl.model.js"
import { redirectFromShortUrl } from './src/controller/shortUrl.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cookieParser from 'cookie-parser';
import { attachUser } from './src/utils/attachUser.js';

dotenv.config("./.env");
const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || "https://snipl.vercel.app",
    credentials: true,
}))
app.options(/.*/, cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(attachUser)

app.get('/',(req,res)=>{
    res.send('Backend is running successfully')
})

app.use('/api/user', user_route)
//Create Authentication
app.use("/api/auth", auth_routes);

//Create Short Url
app.use("/api/create", shortUrl);

//Redirection of the short url
app.get("/:id", redirectFromShortUrl)

app.use(errorHandler)
 connectDB();
app.listen(process.env.PORT || 3000, () => {

    console.log("Server is running on", process.env.PORT || 3000);
})
