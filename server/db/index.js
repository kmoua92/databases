var mysql = require('mysql');
var messageId = 1;
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


exports.dbMessagePost = function(message) {
  var connection = mysql.createConnection({
    // host     : 'localhost',
    user     : 'root',
    password : 'p',
    database : 'chat'
  });

  connection.connect();

  connection.query('insert into `messages` values ("' + message.username + '", "' + message.message + '", "' + message.roomname + '", ' + messageId + ');', function(err, rows, fields) {
    if (err) {
      throw err;
    }
  });

  connection.end();

};

exports.dbUserPost = function(message) {
  var connection = mysql.createConnection({
    // host     : 'localhost',
    user     : 'root',
    password : 'p',
    database : 'chat'
  });

  connection.connect();

  connection.query('insert into `users` values ("' + message.username + '",' + messageId + ');', function(err, rows, fields) {
    if (err) {
      throw err;
    }
  
  });

  connection.end();

};




// mysql -u root < server/schema.sql;