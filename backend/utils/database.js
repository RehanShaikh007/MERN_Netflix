import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config({
    path: "../.env"
});

const databaseConnection =() => {
    const connection = async () => {
       mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_NETFLIX"
       }).then(() => {
        console.log("MongoDb connected Succcessfully!");
       }).catch((error) => {
        console.log(`Error connecting Database ${error}`);
       })
    }
    connection();
};

export default databaseConnection;