var abilities = require('../controllers/ability.js');
var heroes = require('../controllers/hero.js');
var path = require('path');

module.exports = function(app){
    console.log('in routes');

    app.get('/test', (req, res, next)=>{
        console.log('test works')
    })
    app.post('/getAbility', (req, res, next) =>{
        console.log('fetching ability names');
        abilities.getAbility(req, res);
    });

    app.post('/getHeroes', (req, res, next)=>{
        console.log('hero route')
        heroes.getHeroNames(req, res)
    })

    // app.get('/aaa', (req, res, next) =>{
    //     console.log('fetching ability name');
    //     things.getAbility(req, res);
    // });

    // app.post('/addToDB', (req, res, next) =>{
    //     console.log('adding thing');
    //     things.create(req, res);
    // })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
} 