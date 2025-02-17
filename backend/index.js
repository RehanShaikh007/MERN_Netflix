import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import cors from "cors";
import path from 'path';



dotenv.config({
    path: ".env"
})

databaseConnection();

const __dirname = path.resolve();


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: ['http://localhost:5173', 'https://mern-netflix-kysu.onrender.com'],
    credentials: true
}

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '/netflix_mern/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'netflix_mern', 'dist', 'index.html'));
})


app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`Server Running at Port ${process.env.PORT}`);
});
