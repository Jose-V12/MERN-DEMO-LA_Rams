const Roster = require("../Model/RosterInformation");
const getAllPlayers = async (req, res, next) =>{
    let roster;
    try{
        roster = await Roster.find()
    }catch(err){
        console.log(err)
    }
    if(!roster){
        return res.status(404).json({message: "No Roster Found"})
    }
    return res.status(200).json({roster});
};
const getById = async (req, res, next) =>{
    const id = req.params.id;
    let player;
    try{
        player = await Roster.findById(id);
    }catch(err){
        console.log(err)
    }
    if(!player){
        return res.status(404).json({message: "No Player Found"})
    }
    return res.status(200).json({player});
};
const addPlayer = async (req, res, next) =>{
    const{firstName, lastName, position, year_salary, leagueYrs, injuryReserve} = req.body;
    let newPlayer;
    try{
        newPlayer = new Roster({
            firstName,
            lastName,
            position,
            year_salary,
            leagueYrs,
            injuryReserve,
        });
        await newPlayer.save();
    }catch(er){
        console.log(err)
    }
    if(!newPlayer){
        return res.status(500).json({message: "Unable to Add Player"})
    }
    return res.status(201).json({newPlayer});
};
const updatePlayer = async (req, res, next) =>{
    const id = req.params.id;
    const {firstName, lastName, position, year_salary, leagueYrs, injuryReserve} = req.body;
    let player;
    try{
        player = await Roster.findByIdAndUpdate(id, {
            firstName,
            lastName,
            position,
            year_salary,
            leagueYrs,
            injuryReserve
        });
        player = await player.save();
    }catch(err){
        console.log(err);
    }
    if(!player){
        return res.status(404).json({message: "Unable to Update by this ID Value"})
    }
    return res.status(200).json({player});
};
const deletePlayer = async (req, res, next) => {
    const id = req.params.id;
    let player;
    try{
        player = await Roster.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!player){
        return res.status(404).json({message: "Unable to Delete by This ID"});
    }
    return res.status(200).json({message: "Player Deleted"});
};
exports.getAllPlayers = getAllPlayers;
exports.getById = getById;
exports.addPlayer = addPlayer;
exports.updatePlayer = updatePlayer;
exports.deletePlayer = deletePlayer;