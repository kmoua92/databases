drop database if exists chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE messages (username varchar(15), text varchar(150), roomname varchar(15), objectId integer(3) primary key);
  -- insert into messages values ('ker', 'hi whats up', 'lobby', 007);
  -- insert into messages values ('ker', 'hi dude', 'lobby', 006);
  -- insert into messages values ('eric', 'hi whats up', 'lobby', 005);
  -- insert into messages values ('ker', 'hi whats up', 'lobby', 004);
  -- insert into messages values ('ker', 'yo', 'hackreactor', 003);
  -- insert into messages values ('eric', 'hi whats up', 'hackreactor', 002);
  -- insert into messages values ('Tom', 'hi whats up', 'lobby', 001);
CREATE TABLE users (username varchar(15), userId integer(3) primary key);
  -- insert into users values ('Tom', 001);
  -- insert into users values ('eric', 002);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/



