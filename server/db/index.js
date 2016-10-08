var mysql = require('mysql');
var objectId = 0;
var userId = 0;
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.dbInit = function() {
  exports.dbMessageGet((messages) => { 
    objectId = messages.length; 
  });
  exports.dbUsersGet((users) => {
    userId = users.length;
  });
};


exports.dbMessagePost = function(message, cb) {
  var connection = mysql.createConnection({
    // host     : 'localhost',
    user: 'root',
    password: 'p',
    database: 'chat'
  });
  connection.connect();
  objectId++;

  connection.query('insert into `messages` values ("' + message.username + '", "' + message.text + '", "' + message.roomname + '", ' + objectId + ');', function(err, rows, fields) {
    if (err) {
      throw err;
    }
  });

  connection.end();

};

exports.dbMessageGet = function(cb) {
  var connection = mysql.createConnection({
    // host     : 'localhost',
    user: 'root',
    password: 'p',
    database: 'chat'
  });



  connection.connect();

  connection.query('select * from messages;', function(err, rows, fields) {
    if (err) {
      throw err;
    }
    cb(rows);
  });
  

  connection.end();
};

exports.dbUsersPost = function(message) {
  var connection = mysql.createConnection({
    // host     : 'localhost',
    user: 'root',
    password: 'p',
    database: 'chat'
  });

  connection.connect();

  
  var prom = new Promise((resolve, reject) => {
    connection.query('select * from users;', function(err, rows, fields) {

      if (err) {
        reject(err);
      }

      var userFound = false;
      var users = rows;

      for (var i = 0; i < users.length; i++) {
        if (users[i].username === message.username) {
          userFound = true;
        }
      }

      resolve(userFound);

    });

  }).then(userFound => {

    if (!userFound) {
      userId++;
      connection.query('insert into `users` values ("' + message.username + '",' + userId + ');', function(err, rows, fields) {
        if (err) {
          throw err;
        }
      });      
    } 

    connection.end();

  });
};


exports.dbUsersGet = function(cb) {
  var connection = mysql.createConnection({
    // host     : 'localhost',
    user: 'root',
    password: 'p',
    database: 'chat'
  });

  connection.connect();

  connection.query('select * from users;', function(err, rows, fields) {
    if (err) {
      throw err;
    }

    cb(rows);
  
  });

  connection.end();

};


// mysql -u root < server/schema.sql;