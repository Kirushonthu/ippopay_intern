const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

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

//Create or Post data

app.post("/notes", async (req, res) => {
    try {
        const { type, content } = req.body;
        if (!type || !content) {
            return res.status(400).json({
                success: false,
                message: "Type and content required",
            });
        }
        const indata = await Notes.create({ type, content });

        res.status(201).json({
            success: true,
            message: "Note created",
            data: indata
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Failed to Create note",

        });
    }

})


app.get("/", (req, res) => {
    res.send("Notes App")
})



// Read or Get data

app.get("/notes", async (req, res) => {
    try {
        const data = await Notes.find();


        res.status(200).json({
            success: true,
            message: "Notes fetched successfully",
            data: data
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error fetching data",
            error: err.message
        });
    }
})

//read by id 

app.get("/notes/:id", async (req, res) => {
    try {

        let { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID"
            });
        }

        const findbyid = await Notes.findById(id)


        if (!findbyid) {
            return res.status(404).json({
                success: false,
                message: "Note not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Note fetched Successfully",
            data: findbyid
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to Fetch note",
            error: err.message
        });
    }

})

//Update or Put data

app.put("/notes/:id", async (req, res) => {

    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID"
            });
        }

        const { type, content } = req.body;

        if (!type || !content) {
            return res.status(400).json({
                success: false,
                message: "Type and content required",
            });
        }

        const updatedNote = await Notes.findByIdAndUpdate(
            id,
            { type, content },
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Note updated successfully",
            data: updatedNote
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error Failed to update note",
            error: err.message
        });
    }

})


//Delete or Terminate data

app.delete("/notes/:id", async (req, res) => {

    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID"
            });
        }

        const deletedata = await Notes.findByIdAndDelete(id);

        if (!deletedata) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Note deleted successfully",
            data: deletedata
        });


    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error Failed to Delete note",
            error: err.message
        });
    }

});


const PORT = process.env.PORT || 3047;

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);

})