import express from "express"
import cors from "cors"
import {users} from "./db";

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    return res.json(users)
})

app.get("/:id", (req, res) => {
    return res.json(users.find((u) => u.id === Number(req.params.id)) || {})
})

app.listen(process.env.PORT, () => {
    console.log(`App running on http://localhost:${process.env.PORT}`)
})