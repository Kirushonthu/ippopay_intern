// const express = require("express");
const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/notesdb")
  .then(() => console.log("db connected"))
  .catch((err) => console.log(`error occurred ${err}`));

const userschema = new mongoose.Schema({
  type: String,
  content: String
});


const Notes = mongoose.model("Notes", userschema);

const insert = async () => {
  try {
    const indata = await Notes.create({
      type: "walk",
      content: "walking asdgahs has "
    });
  }
  catch (err) {
    console.log("Insert Error", err.message);
  }
}

// insert()

const insertmany = async () => {
  try {
    const data = await Notes.insertMany([
      { type: "sleep", content: "sleep well at the night" },
      { type: "walk", content: "walk in the morning" },
      { type: "random", content: "sadgfasdfhdhf hsfhdf" }
    ])
  } catch (err) {
    console.log("Insert Error", err.message);
  }
}

//  insertmany()

const read = async () => {
  try {
    const data = await Notes.find();
    console.log(data);
  } catch (err) {
    console.log("Error fetching data", err.message);
  }
};

// read()

const readid = async () => {
  try {
    const data = await Notes.findOne({ type: "sleep" })
    console.log(data);

  } catch (err) {
    console.log("Error Finding data", err.message);
  }
}

// readid()

const update = async () => {
  try {
    const data = await Notes.updateOne(
      { type: "random" },
      { $set: { type: "swim", content: "swiming " } });
    console.log(data);
  } catch (err) {
    console.log("Error updating data", err.message);
  }
}

// update()

const deletefun = async () => {
  try {
    const data = await Notes.deleteOne({ type: "walk" })
    console.log(data);
  } catch (err) {
    console.log("Error deleting data", err.message);
  }
}

// deletefun()



