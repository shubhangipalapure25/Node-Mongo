const mongoose = require("mongoose");
const Chat = require("./model/chat");

main().then((res) =>{
    console.log("Connected sucessfully...");
}).catch((err) =>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsup');
}

 Chat.insertMany([
    {
    from:"Shradha",
    msg:"Hello, send me js notes.",
    to:"Preeti",
    created_at:new Date(),
    },
    {
        from:"Rani",
        msg:"Lets go for walk.",
        to:"Raja",
        created_at:new Date(),
    },
    {
        from:"mahesh",
        msg:"today you attended class",
        to:"ritesh",
        created_at:new Date(),
    },
    {
        from:"Kajal",
        msg:"Lets Learn javascript",
        to:"Rahul",
        created_at:new Date(),
    },
    {
        from:"Shradha",
        msg:"Coading is easy to learn",
        to:"Kashi",
        created_at:new Date(),
    },
]);

// let chat1 = new Chat({
//     from:"Shradha",
//     msg:"Hello, send me js notes.",
//     to:"Preeti",
//     created_at:new Date(),
// });
// chat1.save().then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// });