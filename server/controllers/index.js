var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      res.writeHead(200, );
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {


      res.writeHead(201, );
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      res.writeHead();
      res.end();
    },
    post: function (req, res) {

      res.writeHead();
      res.end();
    }
  }
};

