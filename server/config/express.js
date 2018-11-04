var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');

    /*
const https = require('https');

express.get('/getEvents',function(res,req){
    
    https.get('https://www.eventbriteapi.com/v3/events/search/?token=I6X37F6VPV73GLG2SA4F&q=' + req.params.event + '&location.address=' + req.params.location, (resp) => {
    let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    return JSON.parse(data);
  });

}).on("error", (err) => {
    console.log(err);
});
});

var results;
const eventbrite = require('eventbrite');

var app = exports.init;
app.use(bodyParser.urlencoded({extended:true}));
app.post('/data',function(req, res){
  res.render('parameters', {event: req.body.event, location:req.body.location});
})
// Create configured Eventbrite SDK
const sdk = eventbrite({token: 'I6X37F6VPV73GLG2SA4F'});

sdk.request('/events/search/?token=' + sdk.token + '&q=' + parameters.event + '&location.address=' + parameters.location).then(res => {
  // handle response data
  console.log(res);
  res.set('Content-Type', 'text/html');
  res.render('postResponseHTML');
});


*/
module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /**TODO
  Serve static files */
  app.use(express.static('client'));

  /**TODO 
  Use the listings router for requests to the api */
  app.use('/events/search', eventsRouter);

  /**TODO 
  Go to homepage for all routes not specified */ 
  app.get('*', function(req, res){
    res.redirect('../index.html');
  })
  return app;
};  