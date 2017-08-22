'use strict';
exports.handler = function(event, context, callback) {
  var exec = require('child_process').exec;

  exec('./php -v', function (error, stdout, stderr) {
    if(stdout){
      console.log('stdout: ' + stdout);
    }
    if(stderr){
      console.log('stderr: ' + stderr);
    }
    if (error !== null) {
      console.log('Exec error: ' + error);
    }
    context.succeed(stdout);
    console.log(stdout);
  });
};

