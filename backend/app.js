// import module express
const express = require("express");
// import module body parser
const bodyParser = require("body-parser");
//import mongoose module
const mongoose = require("mongoose");
//connect express with DB
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');

//import bcrypt module
const bcrypt = require('bcrypt');
//import jwt module
const jwt = require('jsonwebtoken');
//import session module
const session = require('express-session');
//import axios module
const axios = require("axios");

//import multer module
const multer = require("multer");
//import path module
const path = require("path");


// création express BE app 
const app = express();

// bodyParser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );

    next();
});

//session configuration
const secretKey = 'your-secret-key';
app.use(session({
    secret: secretKey,
}));
//image configuration
//shortCutPath==backend/upload
app.use('/shortCutPath', express.static(path.join('backend/upload')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    if (isValid) {
    cb(null, 'backend/upload')
    }
    },
    filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;
    cb(null, imgName);
    }
    });



//Models importation***
const Match = require("./models/match");
const Team = require("./models/team");
const Player = require("./models/player");
const User = require("./models/user");



//   let players=[
//     {id:1,name:'ali',position:3,nbr:'3',age:'18'},
//     {id:2,name:'ali',position:3,nbr:'3',age:'18'},
//     {id:3,name:'ali',position:3,nbr:'3',age:'18'},
//     {id:4,name:'ali',position:3,nbr:'3',age:'18'},

//   ];





//here trait logique add match
app.post("/matches", (req, res) => {
    console.log('here into BL:Add match', req.body);
    let matchObj = new Match(req.body);
    matchObj.save();
    res.json({ message: 'match added' });

});

//here trait logique get all matches
app.get("/matches", (req, res) => {
    Match.find().then((docs) => {
        console.log('here into BL ', docs)
        res.json({ matches: docs }) //then ta3tina retour eli 9balha(Match.find)
    });
});

//here trait logique get match by id
app.get("/matches/:id", (req, res) => {
    console.log('here into BL :get match by id', req.params.id);
    Match.findById(req.params.id).then((doc) => {
        console.log('here doc', doc);
        res.json({ match: doc });
    });
    // let match =matches.find((item)=>item.id ==req.params.id)
    // res.json({match:match})
});


//here BL : delete match
app.delete("/matches/:id", (req, res) => {
    console.log('here intodelete', req.params.id);
    Match.deleteOne({ _id: req.params.id }).then((deleteResponse) => {
        console.log('here response after delete', deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: 'success' })
        } else {
            res.json({ message: 'error' })
        }
    })





    // let pos=matches.findIndex((item)=>item.id ==req.params.id) 
    // matches.splice(pos,1);
    // res.json({message:'match delete'});

});

//here trait logique update match
app.put("/matches", (req, res) => {

    console.log('here into BL :edit match', req.body);
    Match.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
        console.log('here response', updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ message: 'edited with success' });

        } else {
            res.json({ message: 'Errors' });

        }

    })
    //    console.log(req.body)
    //    let index=matches.findIndex((obj)=>obj.id==req.body.id);
    //    matches[index]=req.body ;
    //    res.json({message:'edited with success'});
});





//here business logic:Add Team
app.post('/api/teams', (req, res) => {
    let Obj = new Team(req.body);
    console.log('here is  team', req.body)
    Obj.save();
    res.json({ msg: true })
});

//here trait logique get all teams
app.get("/api/teams", (req, res) => {
    Team.find().then((docs) => {
        console.log('here into BL ', docs)
        res.json({ teams: docs })
    });

});
//here trait logique get team by id
app.get("/api/teams/:id", (req, res) => {
    Team.findById(req.params.id).then((doc) => {
        console.log('here doc', doc);
        res.json({ team: doc });
    });
});
//here trait logique delete team
app.delete("/api/teams/:id", (req, res) => {
    Team.deleteOne({ _id: req.params.id }).then((deleteResponse) => {
        console.log('here response after delete', deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: 'success' })
        } else {
            res.json({ message: 'error' })
        }
    })

});
//here trait logique update team
app.put("/api/teams/:id", (req, res) => {
    console.log(req.body)
    Team.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
        console.log('here response', updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ message: 'edited with success' });

        } else {
            res.json({ message: 'Errors' });

        }

    })
});







//here trait logique add player
app.post("/api/players", (req, res) => {
    let Obj = new Player(req.body);
    console.log('here is  team', req.body)
    Team.findById(req.body.tId).then((team) => {
        if (!team) {
            res.json({ msg: 'team not found' })
        } else {
            let player = new Player({
                name: req.body.name,
                age: req.body.age,
                nbr: req.body.nbr,
                position: req.body.position,
                teamId: team._id //teamId de modél
            });
            player.save((err, doc) => {
                if (err) {
                    res.json({ msg: "player not saved" })
                } else {
                    team.playersId.push(doc);
                    team.save();
                    res.json({ msg: "player saved with success" });
                }
            })
        }
    })

});
//here trait logique get all players
app.get("/api/players", (req, res) => {
    Player.find().then((docs) => {
        console.log('here into BL ', docs)
        res.json({ players: docs })
    });
});

//here trait logique get player by id
app.get("/api/players/:id", (req, res) => {

    Player.findById(req.params.id).then((doc) => {
        console.log('here doc', doc);
        res.json({ player: doc });
    });
});

//here trait logique delete player
app.delete("/api/players/:id", (req, res) => {
    Player.deleteOne({ _id: req.params.id }).then((deleteResponse) => {
        console.log('here response after delete', deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: 'success' })
        } else {
            res.json({ message: 'error' })
        }
    })

});

//here trait logique update player
app.put("/api/players", (req, res) => {
    Player.updateOne({ _id: req.body.id }, req.body).then((updateResponse) => {
        console.log('here response', updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ message: 'edited with success' });

        } else {
            res.json({ message: 'Errors' });

        }

    })
});



//here into  BL: signup user
app.post("/api/users/signup",multer({ storage: storage }).single('img'),  (req, res) => {
    console.log('here into signup', req.body)
    bcrypt.hash(req.body.pwd, 10).then((cryptPwd) => {
        console.log('here crypted pwd', cryptPwd);
        req.body.pwd = cryptPwd;
        req.body.avatar=`http://localhost:3000/shortCutPath/${req.file.filename}` ; 
        const user = new User(req.body);
        user.save();
        res.json({ msg: "signup with success" })
    });

});



//here BL: get all users
app.get("/api/users",(req,res)=>{
    User.find().then((docs)=>{
        res.json({users:docs});
    })
})
//here BL :delete user
app.delete("/api/users/:id",(req,res)=>{
    User.deleteOne({id:req.body._id}).then((deleteRes)=>{
        console.log('here delete user',deleteRes);
if (deleteRes.deletedCount==1) {
    res.json({msg:"delete with success"});
} else {
    res.json({msg:"error"});
    
}
    })
})



//here into BL :login
app.post('/api/users/login', (req, res) => {
    console.log('here login', req.body)
    User.findOne({ email: req.body.email }).then((doc) => {
        console.log('here doc', doc);
        if (!doc) {
            res.json({ msg: 'check your email' });

        } else {
            //doc exist
            bcrypt.compare(req.body.pwd, doc.pwd).then((pwdResult) => {
                console.log('here pwdResult', pwdResult);
                if (!pwdResult) {
                    res.json({ msg: 'check your pwd' });

                } else {
                    let userToSend = {
                        _id: doc._id,
                        role: doc.role,
                        firstName: doc.firstName,
                        lastName: doc.lastName,
                        tel: doc.tel,
                        id: doc._id,
                        avatar:doc.avatar
                    }
                    const token = jwt.sign(userToSend, secretKey, {
                        expiresIn:
                            '1h'
                    });

                    res.json({ msg: 'welcome', user: token });

                }

            })
        }
    })

})


//here into BL :get all teams with players
app.get("/api/teamsPlayers", (req, res) => {
    Team.find().populate("playersId").then((teamDocs) => {
        console.log('here team docs', teamDocs);
        res.json({ teams: teamDocs });
    })
})

// here into :get all player with team information
app.get("/api/playersTeam", (req, res) => {
    Player.find().populate("teamId").then((playerDocs) => {
        res.json({ players: playerDocs });
    })
});

//here into BL :edit profile
app.put("/api/users", (req, res) => {
    console.log('edit profile ', req.body);
    User.findOne({ _id: req.body.userId }).then((doc) => {
        if (!doc) {
            res.json({ msg: "user not found" });
        } else {
            bcrypt.compare(req.body.oldPwd, doc.pwd).then((pwdResult) => {
                if (!pwdResult) {
                    res.json({ msg: "please check your old pwd" });

                } else {
                    bcrypt.hash(req.body.newPwd, 10).then((cryptePwd) => {
                        let newObj = { tel: req.body.tel, pwd: cryptePwd };
                        User.updateOne({ _id: req.body.userId }, newObj).then((editResult) => {
                            if (editResult.nModified == 1) {
                                res.json({ msg: "edited with success" });
                            } else {
                                res.json({ msg: "error" });

                            }
                        })
                    })
                }
            });

        }
    })
})



//here BL : search weather ( API )
app.post("/api/weather", (req, res) => {
    console.log('here city', req.body);
    let key = '9985855a31f6e6f024fee278a521345b'
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`
    axios.get(apiURL).then((apiReponse) => {
        console.log('here api response ', apiReponse.data);

        let weatherResponse = {
            temp: apiReponse.data.main.temp,
            humidity: apiReponse.data.main.humidity,
            pressure: apiReponse.data.main.pressure,
            speed: apiReponse.data.wind.speed,
            description: apiReponse.data.weather[0].description,
        }
        res.json({ apiRes: weatherResponse })
    })

})

module.exports = app; // make app exportable
