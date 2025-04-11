//define the user 
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensures unique usernames
        trim: true,   // Trims whitespace
        minlength: 3, // Minimum length for username (you can adjust this)
        maxlength: 50, // Maximum length for username
      },
      email: {
        type: String,
        required: true,
        unique: true, // Ensures unique emails
        lowercase: true, // Converts to lowercase
        trim: true,   // Trims whitespace
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'], // Regex for email validation
      },
      password: {
        type: String,
        required: true,
        minlength: 6, // Minimum password length
      },
},{timestamps:true});

export default mongoose.model("User",userSchema);