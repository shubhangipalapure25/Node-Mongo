const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./model/chat");
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main().then((res) =>{
    console.log("Connected sucessfully...");
}).catch((err) =>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsup');
}

//Index Route
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
});

// New Route
app.get("/chats/new", (req,res) =>{
    res.render("new.ejs");
});

//Create Route
app.post("/chats" ,(req,res) =>{
    const {from,to,msg} = req.body;
    // console.log(req.body);
    let newchat = new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at: new Date()
    });
    newchat.save().then((res) =>{
        console.log(res);
    }).catch((err) =>{
        console.log(err);
    });
  
    res.redirect("/chats");
});

//edit Route
app.get("/chats/:id/edit", async (req,res) =>{
    const {id} = req.params;
    // console.log(id);
    let chat = await Chat.findById(id);
    // console.log(chat);
    res.render("edit.ejs",{chat});
});

//Update Route
app.patch("/chats/:id" ,async (req,res) =>{
    const {id} = req.params;
    const {msg:newMsg} = req.body;
    console.log(req.body);
    let chat = await Chat.findByIdAndUpdate(id,{msg:newMsg},{new:true});
console.log(chat);
    res.redirect("/chats");
});

//Destroy Route
app.delete("/chats/:id", async (req,res) =>{
    const {id} = req.params;
    let deletedchat = await Chat.findByIdAndDelete(id);
    console.log(deletedchat);
    res.redirect("/chats");
})

app.listen("8080",() =>{
    console.log("Listening on port 8080");
});