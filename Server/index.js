const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
mongoose.connect("mongodb+srv://Jose-V:Josevargas123144!@cluster0.qwyfktd.mongodb.net/LA_Rams?retryWrites=true&w=majority"
).then(() => console.log("Connected To Database"))
.then(() => {
    app.listen(3001)
}).catch((err) => console.log(err));