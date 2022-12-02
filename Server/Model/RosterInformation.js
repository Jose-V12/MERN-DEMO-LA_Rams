const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const playerSchema = new Schema({
    firstName:{
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
    position:{
        type: String,
        require: true,
    },
    year_salary:{
        type: String,
        require: true,
    },
    leagueYrs:{
        type: Number,
        require: true,
    },
    injuryReserve:{
        type: Boolean,
    }
})
module.exports = mongoose.model("RosterInformation", playerSchema);