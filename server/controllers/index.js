var models = require('../models');
var db = require('../db/index');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/JSON'
};


module.exports = {
  messages: {
    get: function (req, res) {
      db.dbMessageGet((result) => { 
      console.log('messages GET', JSON.stringify(result));

        res.writeHead(200);
        res.end(JSON.stringify(result));
        

      });
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {      
      console.log('SERVER SIDE REQBODY', req);
      db.dbMessagePost(req.body);

      res.writeHead(201, headers);
      res.end('messages post success');
    }
     // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      db.dbUsersGet();

      res.writeHead(200, headers);
      res.end('users get success');
    },
    post: function (req, res) {

      db.dbUsersPost(req.body);

      res.writeHead(201, headers);
      res.end('users post success');
    }
  }
};

