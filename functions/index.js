import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { addCus, deleteCus, getAllCus, updateCus } from "./src/customers.js"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/customers", addCus)
app.get("/customers", getAllCus)
app.patch("/customers/:id", updateCus)
app.delete("/customers/:id", deleteCus)



export const api = functions.https.onRequest(app)