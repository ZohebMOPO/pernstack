const express = require('express');
const app = express();
const cors = require('cors');

const pool = require('./db');
// middleware

;
app.use(cors());
app.use(express.json());
// Routes 
// Create a note
app.post("/notes", async(req,res) => {
    try {
        const {title, description} = req.body;
        const newNote = await pool.query(
            "INSERT INTO note (description, title) VALUES($1,$2) RETURNING *", [title, description]
        );
        res.json(newNote.rows);
    } catch (err) {
        console.log(err.message);
    }
})
// Get All Notes
app.get("/notes", async(req,res) => {
    try {
        const allNotes = await pool.query("SELECT * FROM note");
        res.json(allNotes.rows)
    } catch (err) {
        console.error(err.message)
    }
})
// Get a note
app.get("/notes/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const getNote = await pool.query("SELECT * FROM note WHERE docs_id = $3", [id])
        res.json(getNote.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

// Update a note
app.put("/notes/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const updateNote = await pool.query("UPDATE note SET (description,title) = ($1,$2) WHERE docs_id = $3", [description,title,id])

        res.json("Todo was Updated!")
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(3001, () => {
    console.log("Started on 3001")
})