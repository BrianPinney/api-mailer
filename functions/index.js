import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { addCus, deleteCus, getAllCus, updateCus } from "./customers"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/customers", addCus)
app.get("/customers", getAllCus)
app.patch("/customers/:id", updateCus)
app.delete("/customers/:id", deleteCus)


app.listen(3000, () => console.log(`Listening on http://localhost/3000...`))

export const api = functions.https.onRequest(app)