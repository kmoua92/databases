var models = require('../models');
var db = require('../db/index');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};


module.exports = {
  messages: {
    get: function (req, res) {

      res.writeHead(200);
      res.end('messages get success');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('=====================');
      

      db.dbMessagePost(req.body);

      res.writeHead(201, headers);
      res.end('messages post success');
    }
     // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      res.writeHead(200, headers);
      res.end('users get success');
    },
    post: function (req, res) {

      db.dbUserPost(req.body);

      res.writeHead(201, headers);
      res.end('users post success');
    }
  }
};

