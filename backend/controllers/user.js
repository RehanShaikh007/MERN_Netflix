import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async(req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message: "Invalid Data!",
                success: false
            })
        };
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message: "Invalid Email or Password!",
                success: false
            });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message: "Invalid Email or Password!",
                success: false
            });
        }
        

        const tokenData = {
            id:user._id
        }

        const token = await jwt.sign(tokenData, "sfgerhrhrhsfwsf", {expiresIn : "1d"});
        return res.status(200).cookie("token", token, {httpOnly: true}).json({
            message: `Welcome Back ${user.fullName}`,
            user,
            success: true
        });

    } catch (error) {
        console.log(error);
    }
}


export const Logout = async (req, res) => {
    return res.status(200).cookie("token", "", {expiresIn: new Date(Date.now), httpOnly: true}).json({
        message: "User Logged out Successfully!",
        success: true
    });
}

export const Register = async (req, res) => {
    try {
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message: "Invalid Data!",
                success: false
            });
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message: "Email Already Registered!",
                success: false,
            })
        }
       
        const hashedPassword = await bcryptjs.hash(password, 16);

        await User.create({
            fullName,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "User Registered Successfully!",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

