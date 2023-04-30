import { db } from "./dbconnect.js";

const coll = db.collection("customers")

export async function addCus(req, res){
    const newCus = req.body
    await coll.add(newCus)
}
export async function getAllCus(req, res){
    const unCus = await coll.get()
    const orgCus = unCus.docs.map(doc => ({...doc.data(), id: doc.id}))
        res.send(orgCus)

}
export async function deleteCus(req, res){
    const { id } = req.params
    await coll.doc(id).delete()
    res.send()
}

export async function updateCus(req, res){
    const { id } = req.params
    const updateInfo = req.body
    await coll.doc(id).update(updateInfo)
}