//import mongoose module
const mongoose=require('mongoose');

//create team schema (attributes with type)
const teamSchema=mongoose.Schema({
    name:String,
    owner:String,
    foundation:String,
    playersId:[{
        type:mongoose.Schema.Types.ObjectId,
    ref:"Player"
    }]
    
});

//create model Name(pascalCase) and affect to Schema
const team=mongoose.model('Team',teamSchema);

//make team exportable
module.exports=team;

