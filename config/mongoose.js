const mongoUrl = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const winston = require('winston');

const options = {
  autoIndex: false,
  poolSize: 10
};

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

let appRef = null;
if (process.env.LOG_LEVEL === 'debug') mongoose.set('debug', true);
mongoose.connect(mongoUrl, options);

mongoose.connection.on('connected', function(){
  winston.debug('Connected to MongoDB at: %s ', mongoUrl);
  if(appRef) {
    appRef.startServer();
  }
});


mongoose.connection.on('error',function (err) {
  winston.error('MongooseErr: ' + err.stack);
});

module.exports = (app) => {
  appRef = app;
}
