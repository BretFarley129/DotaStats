var things = require('../controllers/thing.js');

module.exports = function(app){
    console.log('in routes');
    app.get('/retrieve', (req, res, next) =>{
        console.log('fetching things');
        things.showAll(req, res);
    });

    app.post('/addToDB', (req, res, next) =>{
        console.log('adding thing');
        things.create(req, res);
    })
} 