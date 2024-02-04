const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        set:(v) => bcrypt.hashSync(v,bcrypt.genSaltSync(10)),
    },
    phone:{
        type:String,
        required:[true,"Phone is required"],
        unique:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
},{timestamps:true})

module.exports = mongoose.model("User", userSchema)