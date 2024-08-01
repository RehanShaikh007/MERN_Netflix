import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import cors from "cors"



dotenv.config({
    path: ".env"
})

databaseConnection();


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'https://mern-netflix-psi.vercel.app',
    credentials: true
}

app.use(cors(corsOptions));


app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`Server Running at Port ${process.env.PORT}`);
});
