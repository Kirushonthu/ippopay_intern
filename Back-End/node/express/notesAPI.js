const express = require("express");
const app = express();
app.use(express.json())

let data = [
    { id: 1, title: "food", content: "lorem10 sfgsf shfg sdf hsdfg " },
    { id: 2, title: "home", content: "ajsgfg asgfh sf fzhsf z z hff " }
]

app.get("/", (req, res) => {
    res.send("Notes App")
})

app.get("/notes", (req, res) => {
    // res.json(data)
    res.status(200).json({
        success: true,
        message: "Notes fetched successfully",
        data: data
    })
})

app.get("/notes/:id", (req, res) => {
    // console.log(req.params.id);

    let id = parseInt(req.params.id);
    if (Number.isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Bad request",
            data: null
        });
    }

    const found = data.find(f => f.id === id)

    if (!found) {
        return res.status(404).json({
            success: false,
            message: "Note not found",
            data: null
        });
    }

    res.status(200).json({
        success: true,
        message: "data found",
        data: found
    })

})



app.post("/notes", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({
            success: false,
            message: "Title and content required",
            data: null
        });
    }

    const newNote = {
        id: Date.now() + Math.floor(Math.random() * 1000),
        title,
        content
    }
    data.push(newNote);

    res.status(201).json({
        success: true,
        message: "Note created",
        data: newNote
    })
})

app.put("/notes/:id", (req, res) => {

    const id = parseInt(req.params.id);

      if (Number.isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Bad request",
            data: null
        });
    }

    const index = data.findIndex(f => f.id === id);

  

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Note not found",
            data: null
        })
    }

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            success: false,
            message: "Title and content required",
            data: null
        });
    }

    data[index].title = title;
    data[index].content = content;

    res.status(200).json({
        success: true,
        message: "Note updated",
        data: data[index]
    });


})

app.delete("/notes/:id", (req, res) => {

    const id = parseInt(req.params.id);

     if (Number.isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Bad request",
            data: null
        });
    }

    const index = data.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Note not found",
            data: null
        })
    }

    const deleted = data.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Note deleted",
        data: deleted[0]
    });

});

const PORT = process.env.PORT || 3011;

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);

})