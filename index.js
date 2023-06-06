const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const Medicines = require("./routes/medicineRoute")

require("dotenv").config()

const app = express()
const PORT = 3000


app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

const connectDB = async (uri) =>{
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DB connected...")
    } catch (error) {
        console.log(`error in connection ${error}`)
    }
}

connectDB(process.env.MONGO_URL)

app.listen(PORT, () => {
    console.log(`Server active on port: ${PORT}`)
})

app.use("/meds", Medicines)