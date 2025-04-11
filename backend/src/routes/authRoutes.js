import express from "express"
import bcrypt from "bcryptjs"  
import jwt from "jsonwebtoken"
import User from"../model/User.js"

const router = express.Router()

//user registration
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "User already exits,please log in!" });
        }

        // Check if username already exists
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: "Oops, this username is already taken! Try another one." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newuser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newuser.save();

        // Generate JWT token
        const token = jwt.sign({ id: newuser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ message: "Log in now ! ", token, user: { id: newuser._id, username } });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" });
    }
});

//user login
router.post('/login',async(req,res) =>{
    try{
        const {email,username,password} = req.body

        //admin login 
        if (username==="admin" && password ==="admin"){
            const token = jwt.sign({id:"admin_id"},process.env.JWT_SECRET,{expiresIn:"1h"})
            return res.status(200).json({message:"Welcome AAAAAADDDDDMMMMIIIIINNNNNNN!!!!!!",
                token,
                user:{id:"admin_id",username:"admin",email:"admin@gmail.com"}})
        }

        //checks if already a user exists or not using email
        const user = await User.findOne({email});
        if (!user){
            return res.status(400).json({message: "You don't exist, register please !"})
        }

        //verify the username matches 
        if (user.username !== username){
            return res.status(400).json({message:"You don't have this username kiddo!"})
        }

        //checks password id correct or not
        const ismatch=await bcrypt.compare(password,user.password)
        if (!ismatch){
            return res.status(400).json({message:"Oops you did a wrong password"})
        }
        
        // JWT (JSON Web Token) is used for user authentication and authorization.
        // It allows the server to generate a secure token upon login, which the client can use for future requests instead of re-entering credentials. This makes authentication stateless and improves security by verifying user identity without storing session data on the server.
        // generate jwt token
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"})
        
        res.status(200).json({message: "you may start to explore ! " ,token,user:{id:user._id,username:user.username,email:user.email}})


    }catch(error){
        console.error(error)
        res.status(500).json({message : "server error"})
    }
    
});

export default router;