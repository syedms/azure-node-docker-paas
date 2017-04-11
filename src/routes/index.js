var express = require('express');
var router = express.Router();
const os = require('os');
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  var info = { 
    release: os.release(), 
    type: os.type(), 
    cpus: os.cpus(), 
    hostname: os.hostname(), 
    arch: os.arch(),
    mem: os.totalmem()
  }

  res.render('index', { title: 'Azure Demo App', info: info, isDocker: fs.existsSync('/.dockerenv') });
});

module.exports = router;
