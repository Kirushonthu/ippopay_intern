// const express = require("express");
const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/notesdb", {
  serverSelectionTimeoutMS: 3000
})
  .then(() => console.log("DB connected"))
  .catch(err => console.log("Error:", err.message));

const userschema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 10
  }
}, {
  versionKey: false   
});

const Notes = mongoose.model("Notes", userschema);

const insert = async () => {
  try {
    const indata = await Notes.create({
      type: "read",
      content: "zd zgj zgkgj gfg "
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
      { type: "swim" },
      { $set: { type: "swim", content: "swiming is good cardio" } },
      { runValidators: true });
    console.log(data);
  } catch (err) {
    console.log("Error updating data", err.message);
  }
}

// update()

const deletefun = async () => {
  try {
    const data = await Notes.findOneAndDelete({ type: "walk" });

    if (!data) {
      console.log("No document found");
    } else {
      console.log("Deleted:", data);
    }

  } catch (err) {
    console.log("Error:", err.message);
  }
};

// deletefun()

const deleteMany = async () => {
  try {
    const docs = await Notes.find({ type: "walk" });

    if (docs.length === 0) {
      console.log("No document found");
      return;
    }

    const result = await Notes.deleteMany({ type: "walk" });

    console.log("Deleted count:", result.deletedCount);

  } catch (err) {
    console.log("Error:", err.message);
  }
};
// deleteMany()
read()



