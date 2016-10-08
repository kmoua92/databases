var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

var poster = function () {
  // connection.query('mysql -u root < ../server/schema.sql');
  connection.query('insert into `messages` values ("' + message.username + '", "' + message.message + '", "' + message.roomname + '", ' + message.objectId + ');', function(err, rows, fields) {
    if (err) {
      throw err;
    }
    console.log('===QUERY========',err, rows, fields);
    
    console.log('Successful Post! ', message);
  });
  // connection.query('select * from messages', function(err, rows, fields) {
  // });
};