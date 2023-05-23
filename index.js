const express = require("express");
const mongoose = require("mongoose");
const app = express();

// const url = "mongodb+srv://myousuffs1234:yousuff12@cluster0.1snfaa1.mongodb.net/?retryWrites=true&w=majority";
const url = "mongodb://127.0.0.1:27017/testing_connection";

const PORT = 3000;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to mongoDB");
  })
  .catch((err) => {
    console.log("Connection error :- ", err);
  });

// mongoose
//   .disconnect()
//   .then(() => {
//     console.log("Disconnected from MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error disconnecting from MongoDB", error);
//   });

app.listen(PORT,()=>{console.log(PORT ,"port Running successfull")});
