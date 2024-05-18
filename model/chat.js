const mongoose = require("mongoose");

let chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    msg:{
        type: String,
        max:50,
    },
    to:{
        type:String,
        required:true,
    },
    created_at:{
        type:Date,
        required:true,
    },
    modified_at:{
        type:Date,
    }
});

let Chat = mongoose.model("Chat", chatSchema);

module.exports= Chat;