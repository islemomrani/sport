//import mongoose module
const mongoose=require('mongoose');

//create match schema (attributes with type)
const matchSchema=mongoose.Schema({

    scoreOne:Number,
    scoreTwo:Number,
    teamOne:String,
    teamTwo:String,
});

//create model Name(majus first chars) and affect to Schema
const match=mongoose.model('Match',matchSchema);
//make match exportable
module.exports=match;
