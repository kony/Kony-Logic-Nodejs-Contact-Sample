var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swaggerJSDoc = require('swagger-jsdoc');
var fs = require('fs');
var app = express();

// Kony MobileFabric Gateway to secure endpoints 
app.use(require('mfgateway')());


// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Kony MobileFabric Logic (Node.js) sample application for managing Contacts',
    version: '1.0.0',
    description: 'This sample application demonstrates use of Logic (Node.js) app in Kony MobileFabric',
  },
  host: 'localhost:9000',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// initialize all app routes
initAppRoutes(app, __dirname + '/swagger.json');

app.get('/swagger.json', function(req, res) {
  console.log("Swagger definitition request ");
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


function initAppRoutes(app, swaggerPath) {
    let basePath = '/services/sample';
    if (fs.existsSync(swaggerPath)) {
      let swaggerJSON = JSON.parse(fs.readFileSync(swaggerPath));
      basePath = swaggerJSON.basePath;
    }
    fs.readdirSync(__dirname + '/routes').forEach(function(file) {
        if (file.substr(file.lastIndexOf('.') + 1) !== 'js') {
            return;
        }
        let name = file.substr(0, file.indexOf('.'));
        app.use(basePath, require('./routes/' + name));
    });
}


module.exports = app;
