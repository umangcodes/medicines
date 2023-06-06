const express = require("express")
const router = express.Router()

const Medicine = require("../models/medSchema.js")

/*
FULL-ENDPOINT: /meds/add 
METHOD: POST
ROUTE: TO ADD NEW MEDS TO THE LIST
REQ: ID, NAME, DESC
RES:    200 => msg
        400 => err

*/
router.post("/add", (req, res) => {
    console.log(req.body)
    Medicine.create(req.body).then(book => res.json({msg: "Medicine added successfully"})).catch(err => res.status(400).json(err))
})

/*
FULL-ENDPOINT: /meds/add 
METHOD: POST
ROUTE: TO ADD NEW MEDS TO THE LIST
REQ: ID, NAME, DESC
RES:    200 => msg
        400 => err

*/
router.post("/add", async (req, res) => {
    console.log(req.body)
    await Medicine.create(req.body).then(book => res.json({msg: "Medicine added successfully"})).catch(err => res.status(400).json(err))
})

router.get("/getall", async (req, res) => {
    const resp = await Medicine.find()
    res.status(200).json({resp})
})

router.post("/delete/:id", async (req, res) => {
    try{
        const resp = await Medicine.deleteOne({id :req.params.id})
        res.status(200).json({resp})
    }catch(err){
        res.status(400).json(err)
    }
})




module.exports = router